import { Link, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaRegClock } from "react-icons/fa";
import "./ConfirmBooking.css";
const ConfirmBooking = () => {
  const { register, handleSubmit, reset } = useForm();
  const [scheduleInfo, setScheduleInfo] = useState({});
  const [SingleEvent, setSingleEvent] = useState(null);
  const [scheduleDate, setScheduleDate] = useState(null);
  console.log(scheduleDate);
  // Schedule info==================================
  const {
    timeRange,
    path,
    hostName,

    hostEmail,

    scheduleLink,
    methodInfo,
    scheduleDate: selectedDate,

    inviteeInfo,
  } = scheduleInfo || {};
  const detailsLink = `${scheduleLink}/details`;
  const { startDate, endDate } = timeRange || {};

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
  }, [id]);
  const preSelectedDate = selectedDate ? new Date(selectedDate) : null;
  const minDate = new Date(startDate);
  const maxDate = endDate ? new Date(endDate) : null;

  const onSubmit = async (data) => {
    inviteeInfo.push(data);
    const res = await axios.put(`/api/scheduling/${path}`, {
      inviteeInfo,
      scheduleDate: preSelectedDate ? preSelectedDate : scheduleDate,
      confirm: true,
    });
    if (res?.data?.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Event confirm successfully",
        text: "More information sent to your email.",
      });

      reset();

      const inviteeEmailSend = await axios.post(`/api/sendmailinvitee`, {
        inviteeName: data?.inviteeName,
        inviteeEmail: data?.inviteeEmail,
        eventName,
        hostEmail,
        scheduleDate,
        detailsLink,
        methodInfo,
      });
      const hostEmailSend = await axios.post(`/api/sendmailhost`, {
        inviteeName: data?.inviteeName,
        inviteeEmail: data?.inviteeEmail,
        eventName,
        hostEmail,
        scheduleDate,

        hostName,
        detailsLink,
        methodInfo,
      });
    }
  };

  if (!SingleEvent) {
    return <p>Loading...</p>;
  }
  const { duration, eventName, userName, method } = SingleEvent;

  return (
    <div className="pt-10 my-10 md:w-8/12 mx-auto  ">
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
            <button className="py-2 px-8 text-xl text-[#FFF] mr-auto bg-[#066DD3]">
              next
            </button>
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
            inline
            fixedHeight
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
