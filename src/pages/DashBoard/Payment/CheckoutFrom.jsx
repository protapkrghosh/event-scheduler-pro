import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import useContexts from "../../../hooks/useContexts";

const CheckoutForm = ({ price }) => {
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContexts();
  const [isPaymentIntent, setIsPaymentIntent] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (!isPaymentIntent) {
      axios
        .post("http://localhost:3000/api/v1/events/create-payment-intent", {
          price,
        })
        .then((res) => {
          setClientSecret(res.data.data.clientSecret);

          setIsPaymentIntent(true);
        });
    }
  }, [price, isPaymentIntent]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    console.log(card);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
          },
        },
      });

    console.log(confirmError);

    console.log(paymentIntent.status);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full  my-8">
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
          className="btn-primary w-full mt-8"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Purchase
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
