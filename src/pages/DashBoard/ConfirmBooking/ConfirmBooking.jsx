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
  const [disabledTimes, setDisabledTimes] = useState([]);
  const { timeRange, scheduleDate: selectedDate } = scheduleInfo || {};
  const { startDate, endDate } = timeRange || {};
  const { id } = useParams();
  const { SingleEvent, refetch } = useSingleEvents(id);

  // this is for disabled times of specific date. if any user booked a meeting in this time. then in the same time no one can book another meeting.
  useEffect(() => {
    const fetchDisabledTimes = async () => {
      try {
        const response = await axios.get(
          "https://lets-sheduleit-backend.vercel.app/api/v1/events/get-all-event"
        );

        const bookedTimes = response.data
          .filter((event) => {
            const eventMoment = moment(
              event.dateAndTime,
              "h:mm a dddd, DD/MM/YYYY ",
              true
            );
            console.log("eventMoment", eventMoment);
            return (
              eventMoment.isValid() &&
              eventMoment.isSame(moment(scheduleDate).startOf("day"), "day")
            );
          })
          .map((event) =>
            moment(event.dateAndTime, "h:mm a dddd, DD/MM/YYYY ").format(
              "HH:mm"
            )
          );
        setDisabledTimes(bookedTimes);
        console.log("Booked Times for selected date:", bookedTimes);
        console.log("disabledTimes", disabledTimes);
      } catch (error) {
        console.error("Error fetching disabled times:", error.message);
      }
    };

    if (scheduleDate) {
      fetchDisabledTimes();
    }
  }, [scheduleDate]);

  if (!SingleEvent) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  const { duration, eventName, userName, method, scheduleId } = SingleEvent;
  const preSelectedDate = selectedDate ? new Date(selectedDate) : null;
  const minDate = new Date();
  const maxDate = endDate ? new Date(endDate) : null;

  const handlePatch = async (id) => {
    const formattedDate = moment(scheduleDate).format(
      "h:mm a dddd, DD/MM/yyyy "
    );

    const response = await axios.patch(
      `https://lets-sheduleit-backend.vercel.app/api/v1/events/update-date-and-time?id=${id}`,
      { date: { dateAndTime: formattedDate } }
    );
    refetch();
    console.log(response.data);
  };

  return (
    <div className=" px-2 lg:px-0 ">
      <div className="lg:w-8/12 md:border shadow-2xl md:border-[#0069ff] rounded-md mx-auto lg:flex gap-x-12 lg:border border-gray-300 lg:px-8 py-5">
        {/*=============== Event details ===================*/}
        <div className="w-full sm:w-[515px] h-[397px] lg:w-[40%]    p-5 flex flex-col justify-center gap-2">
          <h3 className="text-lg font-bold">Invitee:</h3>
          <p className="mt-1 text-secondary">{userName}</p>
          <h3 className="mt-4 text-lg font-bold">Meeting Name:</h3>
          <p className="mt-1 text-3xl font-semibold text-secondary">
            {eventName}
          </p>
          <h3 className="mt-4 text-lg font-bold">Meeting duration:</h3>
          <div className="flex items-center gap-2 my-3">
            <FaRegClock className="text-2xl font-medium" />
            <span className="text-lg font-medium text-secondary">
              {duration} minutes
            </span>
          </div>
          <h3 className="mt-4 text-lg font-bold text-secondary">{`Location: ${method} `}</h3>

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
            minDate={minDate}
            maxDate={preSelectedDate ? preSelectedDate : maxDate}
            timeIntervals={duration}
            dateFormat="dd/MM/yyyy h:mm aa"
            timeFormat="h:mm aa"
            inline
            fixedHeight
            excludeTimes={disabledTimes.map((timeString) =>
              moment(timeString, "HH:mm").toDate()
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
