import { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegClock } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ConfirmBooking = () => {
  const [singleEvent, setSingleEvent] = useState(null);
  const [scheduleDate, setScheduleDate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/events/get-SingleEvents?id=${id}`
        );
        setSingleEvent(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    handleFetch();
  }, [id]); // Add id as a dependency to re-run effect when id changes

  if (!singleEvent) {
    return <p>Loading...</p>;
  }

  const { eventName, duretion, method, date, userEmail } = singleEvent;

  const preSelectedDate = date ? new Date(date) : null;
  const minDate = date ? new Date(date) : null;
  const maxDate = date ? new Date(date) : null;

  return (
    <div>
      <div className="pt-10 my-10 ml-11">
        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="w-full sm:w-[515px] lg:w-[40%] border rounded-md p-5">
            <h3 className="text-lg font-bold">Invitee:</h3>
            <p className="mt-1 text-xl font-medium">{userEmail}</p>
            <h3 className="mt-4 text-lg font-bold">Meeting Name:</h3>
            <p className="mt-1 text-3xl font-semibold">{eventName}</p>
            <h3 className="mt-4 text-lg font-bold">Meeting duration:</h3>
            <div className="flex items-center gap-2 my-3">
              <FaRegClock className="text-2xl font-medium" />
              <span className="text-lg font-medium">{duretion} minutes</span>
            </div>
            <h3 className="mt-4 text-lg font-bold">{`Location: ${method}n `}</h3>
            {/* Add your location rendering logic here */}
          </div>
          <div className="">
            <DatePicker
              selected={preSelectedDate ? preSelectedDate : scheduleDate}
              showTimeSelect
              onChange={(date) => setScheduleDate(date)}
              minDate={minDate}
              maxDate={maxDate}
              timeIntervals={duretion}
              inline
              fixedHeight
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
