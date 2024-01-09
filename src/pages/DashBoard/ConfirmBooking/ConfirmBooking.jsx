import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaRegClock, FaTimesCircle } from "react-icons/fa";
import meetlogo from '../../../assets/meet.png'
import phoneLogo from '../../../assets/phone.png'
import locationLogo from '../../../assets/location.png'
const ConfirmBooking = () => {
  const { register, handleSubmit, reset } = useForm();
  const [scheduleInfo, setScheduleInfo] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  // Schedule info==================================
  const {
    timeRange,
    path,
    hostName,
    method,
    eventName,
    hostEmail,
    duration,
    scheduleLink,
    methodInfo,
    scheduleDate: selectedDate,
    eventType,
    inviteeInfo,
  } = scheduleInfo || {};
  const detailsLink = `${scheduleLink}/details`;
  const { startDate, endDate } = timeRange || {};
  const [scheduleDate, setScheduleDate] = useState(null);
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
      setShowModal(false);
      reset();
      setConfirm(true);
      const inviteeEmailSend = await axios.post(`/api/sendmailinvitee`, {
        inviteeName: data?.inviteeName,
        inviteeEmail: data?.inviteeEmail,
        eventName,
        hostEmail,
        scheduleDate,
        method,
        detailsLink,
        methodInfo,
      });
      const hostEmailSend = await axios.post(`/api/sendmailhost`, {
        inviteeName: data?.inviteeName,
        inviteeEmail: data?.inviteeEmail,
        eventName,
        hostEmail,
        scheduleDate,
        method,
        hostName,
        detailsLink,
        methodInfo,
      });
    }
  };

  // checked event status=========================
  if (scheduleInfo) {
    if (scheduleInfo.confirm && scheduleInfo?.eventType == "Single") {
      return (
        <p className="text-slate-500 py-40 mt-20 text-5xl font-bold text-center">
          This Event already Confirmed...
        </p>
      );
    }
  } else {
    return (
      <p className="py-40 mt-20 text-5xl text-center">
        No Schedule available in this link
      </p>
    );
  }

  return (
    <div>
      <div className="pt-10 my-10">
        <div className="flex flex-wrap items-center justify-center gap-5">
          {/*=============== Event details ===================*/}
          <div className="w-full sm:w-[515px] lg:w-[40%] border rounded-md p-5">
            <h3 className="text-lg font-bold">Invitee:</h3>
            <p className="mt-1 text-xl font-medium">{hostName}</p>
            <h3 className="mt-4 text-lg font-bold">Meeting Name:</h3>
            <p className="mt-1 text-3xl font-semibold">{eventName}</p>
            <h3 className="mt-4 text-lg font-bold">Meeting duration:</h3>
            <div className="flex items-center gap-2 my-3">
              <FaRegClock className="text-2xl font-medium" />
              <span className="text-lg font-medium">{duration} minutes</span>
            </div>
            <h3 className="mt-4 text-lg font-bold">location:</h3>
            <div className=" mt-2">
              {method == "Google Meet" ? (
                <Link
                  target="_blank"
                  href={methodInfo}
                  className="flex items-center text-blue-500 hover:underline gap-2"
                >
                  <img width={30} height={30} src={meetlogo} alt="icon" />
                  <span className="text-lg font-medium">Google Meet</span>
                </Link>
              ) : method == "Phone Call" ? (
                <div className="flex items-center gap-2">
                  <img width={30} height={30} src={phoneLogo} alt="icon" />
                  <span className="text-lg font-medium">{methodInfo}</span>
                </div>
              ) : method == "In Person" ? (
                <div className="flex items-center gap-2">
                  <img width={30} height={30} src={locationLogo} alt="icon" />
                  <span className="text-lg font-medium">{methodInfo}</span>
                </div>
              ) : (
                <p>no location added</p>
              )}
            </div>
            {preSelectedDate ? (
              <p className="mt-2 font-bold text-red-500">
                You cant change the date/time. Its a host control Event.
              </p>
            ) : (
              <p className="mt-2 font-bold text-red-500">
                If not select any time it automatic select 12:00 AM.
              </p>
            )}
          </div>
          <div className="">
            <DatePicker
              selected={preSelectedDate ? preSelectedDate : scheduleDate}
              showTimeSelect
              onChange={(date) => setScheduleDate(date)}
              minDate={preSelectedDate ? preSelectedDate : minDate}
              maxDate={preSelectedDate ? preSelectedDate : maxDate}
              timeIntervals={duration}
              inline
              fixedHeight
              
            />
          </div>
        </div>
        {(scheduleDate || preSelectedDate) && (
          <div
            onClick={() => setShowModal(true)}
            className="w-fit mx-auto mt-5"
          >
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md font-cursive">Confirm</button>
          </div>
        )}
      </div>
      {/*===================== confirm massage =================== */}
      {confirm && (
        <div className="bg-slate-800 bg-opacity-30 fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen">
          <p className="text_shadow text-5xl font-bold text-center">
            Confirmed
          </p>
        </div>
      )}
      {/* =========== modal for confirm event form============= */}
      {showModal && (
        <div className="bg-slate-800 bg-opacity-40 fixed top-0 left-0 z-40 flex items-center justify-center w-full h-screen">
          <div className="w-fit h-fit relative p-10 text-center bg-white rounded-lg">
            <h2 className=" text-3xl font-semibold">Confirm Schedule</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Enter your Name....."
                className="input_field my-5"
                required
                {...register("inviteeName")}
              />

              <input
                placeholder="Enter your Email...."
                className="input_field my-5"
                required
                type="email"
                {...register("inviteeEmail")}
              />

              <input type="submit" value={"Confirm"}  className="bg-blue-500 text-white px-5 py-2 rounded-md font-cursive cursor-pointer" />
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="-right-2 -top-2 absolute z-50 text-3xl text-red-600 bg-white rounded-full"
            >
              <FaTimesCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmBooking;
