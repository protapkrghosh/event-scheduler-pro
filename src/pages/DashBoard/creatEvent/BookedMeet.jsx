import useContexts from "../../../hooks/useContexts";
import { useEffect, useState } from "react";
import axios from "axios";
import { CiSettings } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { Link } from "react-router-dom";

const BookedMeet = () => {
  const [events, setEvents] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useContexts();
  useEffect(() => {
    const handleFach = async () => {
      const data = await axios.get(
        `http://localhost:3000/api/v1/events/get-event?email=${user?.email}`
      );
      setEvents(data.data);
    };
    handleFach();
  }, [user?.email]);
  console.log(events);

  return (
    <div className="md:grid grid-cols-3 gap-4">
      {events ? (
        events.map((event) => {
          return (
            <div
              key={event._id}
              className="w-[382px] h-full rounded-md border border-gray-200 border-t-8 border-t-[#912DEF] shadow-xl "
            >
              <div className="card-body">
                <div className="flex justify-between items-center mb-3">
                  <input
                    type="checkbox"
                    className="checkbox w-4 h-4 rounded-sm"
                  />
                  <div className="flex items-center text-xl cursor-pointer">
                    <CiSettings></CiSettings>
                    <IoMdArrowDropdown></IoMdArrowDropdown>
                  </div>
                </div>
                <div className="border-b-2 border-gray-300 pb-3 mb-5">
                  <h1 className="text-gray-500 mb-3">{event.eventName}</h1>
                  <p className="text-gray-500 mb-3">{`${event.duretion} minute, ${event.eventTypes}`}</p>
                  <Link className="text-blue-500 hover:underline">
                    View booking page
                  </Link>
                </div>
                <div className="flex justify-between items-center gap-x-2">
                  <div className="flex justify-center items-center gap-x-1 text-blue-500 cursor-pointer">
                    <MdContentCopy></MdContentCopy>
                    <p className="hover:underline">Copy Link</p>
                  </div>
                  <button className="px-3 border border-blue-500 rounded-full uppercase text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200">
                    Share
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500 mb-3">loading</p>
      )}
    </div>
  );
};

export default BookedMeet;
