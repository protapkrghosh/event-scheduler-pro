import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import "./ConfirmBooking.css";
import useSingleEvents from "../../../hooks/useSingleEvents";
import moment from "moment";
const ConfirmBooking = () => {
  const [scheduleInfo, setScheduleInfo] = useState({});
  const [scheduleDate, setScheduleDate] = useState(null);
  const { timeRange, scheduleDate: selectedDate } = scheduleInfo || {};
  const { startDate, endDate } = timeRange || {};
  const { id } = useParams();
  const { SingleEvent, refetch } = useSingleEvents(id);
  if (!SingleEvent) {
    return <p>Loading...</p>;
  }
  const { duration, eventName, userName, method, scheduleId } = SingleEvent;
  const preSelectedDate = selectedDate ? new Date(selectedDate) : null;
  const minDate = new Date(startDate);
  const maxDate = endDate ? new Date(endDate) : null;
  console.log(scheduleDate);

  const handlePatch = (id) => {
    const formattedDate = moment(scheduleDate).format(
      "h:mm a dddd, DD/MM/yyyy "
    );
    const response = axios.patch(
      `http://localhost:3000/api/v1/events/update-date-and-time?id=${id}`,
      { date: { dateAndTime: formattedDate } }
    );
    console.log(response.data);
    refetch();
  };

  return (
    <div className=" md:w-8/12 mx-auto  ">
      <div className="flex flex-wrap items-center justify-center shadow-2xl gap-5 mt-14 py-8 md:border md:border-[#0069ff] rounded-md">
        {/*=============== Event details ===================*/}
        <div className="w-full sm:w-[515px] h-[397px] lg:w-[40%]   p-5 flex flex-col justify-center gap-2">
          <h3 className="text-lg font-bold">Invitee:</h3>
          <p className="mt-1 text-xl font-medium">{userName}</p>
          <h3 className="mt-4 text-lg font-bold">Meeting Name:</h3>
          <p className="mt-1 text-3xl font-semibold">{eventName}</p>
          <h3 className="mt-4 text-lg font-bold">Meeting duration:</h3>
          <div className="flex items-center gap-2 my-3">
            <FaRegClock className="text-2xl font-medium" />
            <span className="text-lg font-medium">{duration} minutes</span>
          </div>
          <h3 className="mt-4 text-lg font-bold">{`Location: ${method} `}</h3>

          {scheduleDate && (
            <Link
              onClick={() => handlePatch(scheduleId)}
              to={`/confirm-schedule/bookingDetails/${scheduleId}`}
            >
              <button className="py-2 px-8 text-xl text-[#FFF] mr-auto bg-[#066DD3]">
                next
              </button>
            </Link>
          )}
        </div>
        <div className="">
          <DatePicker
            selected={preSelectedDate ? preSelectedDate : scheduleDate}
            showTimeSelect
            onChange={(date) => {
              setScheduleDate(date);
            }}
            minDate={preSelectedDate ? preSelectedDate : minDate}
            maxDate={preSelectedDate ? preSelectedDate : maxDate}
            timeIntervals={duration}
            dateFormat="dd/MM/yyyy h:mm aa"
            timeFormat="h:mm aa"
            inline
            fixedHeight
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
