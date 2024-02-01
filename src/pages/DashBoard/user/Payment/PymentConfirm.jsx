import { useParams } from "react-router-dom";
import useContexts from "../../../../hooks/useContexts";
import useSinglePayments from "../../../../hooks/useSinglePayments";

import moment from "moment";

const PymentConfirm = () => {
  // get the user from the custom made hook useContexts()
  const { user } = useContexts();

  // get the daynamic id which payment is made successfully
  const { id } = useParams();

  // get the single payment data from the custom made hook useSinglePayments() and send the argument id of the dynamic id we received in the params
  const { SinglePayments } = useSinglePayments(id);

  // if the single payment is undefine or null then it will show a loading statement there
  if (!SinglePayments) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  // destructure the singlePayments data
  const { amount, transitionId, paymentsId, date, packages } =
    SinglePayments.data;
  const formattedDate = moment(date).format("MMMM DD, YYYY");
  return (
    <div className="py-28">
      <h1 className="text-third text-center pb-12">
        {`Congratulations `}
        <span className="text-[#066DD3]">{user?.displayName}</span>
        {` you are now pro`}
      </h1>
      <div className="max-w-xl mx-auto bg-white p-8 shadow-2xl shadow-black">
        <div className="text-center  mb-8">
          <h2 className="text-3xl font-bold">{user?.displayName} Invoice</h2>
        </div>
        <div className="mb-4">
          <div className="font-bold text-secondary">Invoice Number:</div>
          <div>{paymentsId}</div>
        </div>
        <div className="mb-4">
          <div className="font-bold text-secondary">Date:</div>
          <div>{formattedDate}</div>
        </div>
        <div className="mb-4">
          <div className="font-bold text-secondary">transition Id: </div>
          <div>{transitionId}</div>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="text-left text-secondary">Package</th>
              <th className="text-right text-secondary">Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="text-left ">{packages}</td>
              <td className="text-right">${amount}</td>
            </tr>
          </tbody>
          <hr className="mt-4 w-full text-[#0069ff]" />
          <tfoot>
            <tr>
              <td className="text-left font-bold text-secondary">Total:</td>
              <td className="text-right font-bold">${amount}</td>
            </tr>
          </tfoot>
        </table>
        <div className="text-center">
          <p className="text-2xl font-bold">
            {" "}
            Thank you for your payment back to my account and enjoy our
            services!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PymentConfirm;
