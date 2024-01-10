import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
  const booking = useLoaderData();

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutFrom booking={booking}></CheckoutFrom>
      </Elements>
    </div>
  );
};

export default Payment;
