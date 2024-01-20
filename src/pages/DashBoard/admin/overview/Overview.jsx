import useAllUsers from "../../../../hooks/useAllUsers";
import useAllSchedule from "../../../../hooks/useAllSchedule";
import {
  FaCalendarAlt,
  FaChessKing,
  FaMoneyCheckAlt,
  FaUsers,
} from "react-icons/fa";
import useAllProUser from "../../../../hooks/useAllProUser";
import useAllPayments from "../../../../hooks/useAllPayments";

const Overview = () => {
  const { allUser } = useAllUsers();
  const { allEvents } = useAllSchedule();
  const { allProUser } = useAllProUser();
  const { allPayments } = useAllPayments();

  const totalAmount = allPayments?.reduce(
    (total, item) => total + item.amount,
    0
  );

  return (
    <>
      <div className="xl:grid grid-cols-4 gap-4 text-center">
        <div className=" border-4 border-white text-white bg-[#0069ff] text-4xl font-bold py-4 shadow-xl shadow-black">
          <FaUsers className="w-full mx-auto" />
          <h1 className="flex item-center gap-4  justify-center ">
            {" "}
            Total user
          </h1>
          <p className="mt-4">{allUser.length}</p>
        </div>
        <div className="border-4 border-white text-white bg-[#0069ff] text-4xl font-bold py-4 shadow-xl shadow-black">
          <FaChessKing className="w-full mx-auto" />

          <h1 className="flex item-center gap-2  justify-center ">
            Total pro user
          </h1>
          <p className="mt-4">{allProUser.length}</p>
        </div>
        <div className="border-4 border-white text-white  bg-[#0069ff] text-4xl font-bold py-4 shadow-xl shadow-black">
          <FaMoneyCheckAlt className="w-full mx-auto" />
          <h1 className="flex item-center gap-2  justify-center ">
            {" "}
            Total purchase
          </h1>
          <p className="mt-4">{`${totalAmount} $`}</p>
        </div>
        <div className="border-4 border-white text-white bg-[#0069ff] text-4xl font-bold py-4 shadow-xl shadow-black">
          <FaCalendarAlt className="w-full mx-auto" />
          <h1 className="flex item-center  justify-center">Total events</h1>
          <p className="mt-4">{allEvents.length}</p>
        </div>
      </div>
    </>
  );
};

export default Overview;
