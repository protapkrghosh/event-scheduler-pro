import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

const BookedMeet = () => {
  return (
    <div className="w-[382px] h-[212px] rounded-md border border-gray-200 border-t-8 border-t-[#912DEF] shadow-xl py-2 px-3">
      <div className="flex justify-between items-center mb-3">
        <input type="checkbox" className="checkbox w-4 h-4 rounded-sm" />
        <div className="flex items-center text-xl cursor-pointer">
          <CiSettings></CiSettings>
          <IoMdArrowDropdown></IoMdArrowDropdown>
        </div>
      </div>
      <div className="border-b-2 border-gray-300 pb-3 mb-5">
        <h4 className="font-cursive">Mohammad Rafi</h4>
        <p className="text-gray-500 mb-3">30 mins, One-on-One</p>
        <Link className="text-blue-500 hover:underline">View booking page</Link>
      </div>
      <div className="flex justify-between items-center gap-x-2">
        <div className="flex justify-center items-center gap-x-1 text-blue-500 cursor-pointer">
          <MdContentCopy></MdContentCopy>
          <p className="hover:underline">Copy Link</p>
        </div>
        <button className="px-3 border border-blue-500 rounded-full uppercase text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">Share</button>
      </div>
    </div>
  );
};

export default BookedMeet;
