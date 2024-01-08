import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import useSingleEventData from "../../../hooks/useSingleEventData";
import useContexts from "../../../hooks/useContexts";
import { useEffect, useState } from "react";
import axios from "axios";

const BookedMeet = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContexts();
  useEffect(() => {
    const handleFach = async () => {
      const data = await axios.get(
        `https://lets-sheduleit-backend.vercel.app/api/v1/events/get-event?email=${user?.email}`
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
              className="card w-full  bg-base-100 shadow-xl border"
            >
              <div className="card-body">
                <h1 className="text-gray-500 mb-3">{event.eventName}</h1>
                <p className="text-gray-500 mb-3">{`${event.duretion} minute, ${event.eventTypes}`}</p>
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
