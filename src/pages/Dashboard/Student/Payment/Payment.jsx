import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);

const Payment = () => {
  return (
    <>
      {/* Head Title */}
      <Helmet>
        <title>Student Dashboard | Payment</title>
      </Helmet>

      <h3 className="text-2xl font-semibold mb-8">Complete Your Enrollment</h3>

      <div className="w-full lg:px-20 mt-4">
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
