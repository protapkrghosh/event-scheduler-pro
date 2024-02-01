import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
import { cards } from "../../../../data/Data";

const Payments = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
  const { id } = useParams();
  const [payment, setPayment] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isRequestMade, setIsRequestMade] = useState(false);
  const [data, setData] = useState();

  const carts = cards;

  useEffect(() => {
    if (!isRequestMade && carts) {
      const item = carts.find((cart) => cart.id == id);
      setData(item);

      if (item) {
        setPayment(item.rate);

        setDataLoaded(true);
        setIsRequestMade(true);
      }
    }
  }, [carts, id, isRequestMade]);
  if (!dataLoaded) {
    return null;
  }

  const { heading, description, para, rate } = data;
  return (
    <div className="py-32 md:w-9/12 mx-auto  ">
      <h1 className="text-third text-center pb-12">Upgrade to Standard</h1>
      <div className="flex flex-col w-full lg:flex-row  ">
        <div className="grid flex-grow card md:w-[50%] pl-8 shadow-xl shadow-black  border-[#0069ff]  rounded-box p-4 border-4  items-center  mt-4">
          <div>
            <div className="">
              <div className="py-4 w-full">
                <p className="text-third uppercase">
                  {heading} <br />{" "}
                  <span className="text-secondary">{para}</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <p className="text-secondary mt-4 ">Enter your card details</p>
          <Elements stripe={stripePromise}>
            <CheckoutFrom card={data} price={payment}></CheckoutFrom>
          </Elements>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow card md:w-[50%] shadow-xl shadow-black  border-[#0069ff]  rounded-box p-4 border-4  items-center  mt-4 pl-8">
          <p className="text-third text center uppercase">
            Total charge : {rate} $
          </p>
          {description.map((descriptionText) => (
            <div className="flex items-center gap-x-3" key={descriptionText}>
              <TiTick></TiTick>
              <p className="text-[#477eb8]">{descriptionText}</p>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payments;
