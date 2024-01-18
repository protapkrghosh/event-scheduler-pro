import useAllUsers from "../../../../hooks/useAllUsers";
import useAllSchedule from "../../../../hooks/useAllSchedule";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";

const Overview = () => {
  const { allUser } = useAllUsers();
  const { allEvents } = useAllSchedule();

  return (
    <>
      <div className="md:grid grid-cols-4 gap-4 text-center">
        <div className=" border-4 border-white text-white bg-[#0069ff] text-4xl font-bold py-4 shadow-xl shadow-black">
          <h1 className="flex item-center gap-4  justify-center ">
            {" "}
            <FaUsers className="" />
            Total user
          </h1>
          <p className="mt-4">{allUser.length}</p>
        </div>
        <div className="border-4 border-white text-white bg-[#0069ff] text-4xl font-bold py-4 shadow-xl shadow-black">
          <h1>total pro user</h1>
        </div>
        <div className="border-4 border-white text-white bg-[#0069ff] text-4xl font-bold py-4 shadow-xl shadow-black">
          <h1>total purchase</h1>
        </div>
        <div className="border-4 border-white text-white bg-[#0069ff] text-4xl font-bold py-4 shadow-xl shadow-black">
          <h1 className="flex item-center  justify-center">
            <FaCalendarAlt className="mr-4" />
            Total events
          </h1>
          <p className="mt-4">{allEvents.length}</p>
        </div>
      </div>
    </>
  );
};

export default Overview;
