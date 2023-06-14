import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./Checkout.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import moment from "moment";

const Checkout = ({ loadedSelectedClass }) => {
  console.log(loadedSelectedClass?._id);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const { refetch } = useSelectedClasses();

  useEffect(() => {
    if (loadedSelectedClass?.price)
      axiosSecure
        .post("/create-payment-intent", {
          price: loadedSelectedClass?.price,
        })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
  }, [loadedSelectedClass, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      toast.error(error.message);
    } else {
      // toast.success(paymentMethod);
      console.log(paymentMethod);
    }

    // Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      toast.error(confirmError.message);
    } else {
      // toast.success(paymentMethod);
      console.log(paymentIntent);

      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          ...loadedSelectedClass,
          transactionId: paymentIntent.id,
          date: moment(new Date()).startOf("hour").fromNow(),
        };

        axiosSecure.post("/enrolled", paymentInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("payment success");

            axiosSecure
              .delete(`/selected-classes/${loadedSelectedClass?._id}`)
              .then((res) => {
                if (res.data.deletedCount > 0) {
                  navigate("/dashboard/enrolled-classes", { replace: true });
                  refetch();
                }
              })
              .catch((error) => console.log(error));
          }
        });
      }
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-warning mt-4"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <Link to="/dashboard/selected-classes">
          <button className="btn btn-sm btn-error mt-4 mx-2">Back Now</button>
        </Link>
      </form>

      {cardError && <p className="text-red-500 mt-2">{cardError}</p>}
    </>
  );
};

export default Checkout;
