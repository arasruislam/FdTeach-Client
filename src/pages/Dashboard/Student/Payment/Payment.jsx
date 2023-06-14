import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);

const Payment = () => {
  const LoadedSelectedClass = useLoaderData();
  // console.log(LoadedSelectedClass);
  return (
    <>
      {/* Head Title */}
      <Helmet>
        <title>Student Dashboard | Payment</title>
      </Helmet>

      <h3 className="text-2xl font-semibold mb-8">Complete Your Enrollment</h3>

      <div className="w-full lg:px-20 mt-4">
        <Elements stripe={stripePromise}>
          <Checkout LoadedSelectedClass={LoadedSelectedClass} />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
