import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://lets-schedule-backend.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    try {
      setCardError("");
      setSuccess("");
      setProcessing(true);

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: patient,
              email: email,
            },
          },
        });

      if (confirmError) {
        setCardError(confirmError.message);
        setProcessing(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        const payment = {
          price,
          transactionId: paymentIntent.id,
          bookingId: _id,
        };

        const response = await fetch(
          "https://lets-schedule-backend.vercel.app/payments",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(payment),
          }
        );

        const data = await response.json();

        if (data.insertedId) {
          console.log(data);
          setSuccess("Congratulations! Your payment is completed");
          setTransactionId(paymentIntent.id);
        }
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
      setCardError("Error confirming payment. Please try again.");
    } finally {
      setProcessing(false);
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
          className="border border-blue-500 px-3 py-1 hover:bg-blue-500 transition-colors duration-200 rounded-md mt-5 cursor-pointer"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div>
          <p className="text-green-400">{success}</p>
          <p>
            TransactionId: <span className="font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
