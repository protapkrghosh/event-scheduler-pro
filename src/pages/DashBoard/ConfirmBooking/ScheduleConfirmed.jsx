import { TiTick } from "react-icons/ti";
import { FcBusinessman } from "react-icons/fc";
import { IoVideocamOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const ScheduleConfirmed = () => {
  return (
    <div className="px-2 lg:py-0">
      <p className="flex justify-center items-center font-cursive text-2xl gap-x-2">
        <span>
          <TiTick className="w-4 h-4 rounded-full text-white bg-green-500 border border-gray-300"></TiTick>
        </span>
        You are scheduled
      </p>
      <p className="text-center mt-4 mb-1 tracking-wide">A calendar invitation has been sent to your email address.</p>
      <div className="lg:w-[450px] mx-auto border border-gray-300 rounded-xl shadow-xl p-5">
        <h3 className="text-xl font-prompt mb-4">Mohammad Rafi</h3>
        <h3 className="flex items-center gap-x-2 mb-3 text-lg text-gray-500 font-cursive">
          <FcBusinessman></FcBusinessman>Mohammad Rafi
        </h3>
        <p className="flex items-center gap-x-2 mb-3 text-lg text-gray-500 font-cursive">
          <SlCalender></SlCalender>10:00am - 10:30am, Friday, January 12, 2024
        </p>
        <p className="flex items-center gap-x-2 mb-3 text-lg text-gray-500 font-cursive">
          <IoVideocamOutline></IoVideocamOutline>Web conferencing details to
          follow.
        </p>
      </div>
    </div>
  );
};

export default ScheduleConfirmed;
