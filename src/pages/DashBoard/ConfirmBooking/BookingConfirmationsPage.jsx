import { FaCheckCircle } from "react-icons/fa";
const BookingConfirmationsPage = () => {
  return (
    <div className="px-2 lg:px-0">
      <div className="lg:w-8/12 md:border shadow-2xl md:border-[#0069ff] rounded-md mx-auto  lg:border border-gray-300 lg:px-8 py-5 text-center">
        <div className="flex item-center ml-[400px]  ">
          <FaCheckCircle className="mt-2 mr-4 text-green-500 text-2xl" />{" "}
          <h1 className="text-2xl font-bold">you are scheduled</h1>
        </div>
        <p>A calendar invitation has been sent to your email address.</p>
        <p>open invitetions</p>
      </div>
    </div>
  );
};

export default BookingConfirmationsPage;
