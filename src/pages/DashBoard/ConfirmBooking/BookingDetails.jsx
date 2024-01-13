import { IoMdArrowRoundBack, IoIosTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSingleEvents from "../../../hooks/useSingleEvents";
import { useForm } from "react-hook-form";
import axios from "axios";

const BookingDetails = () => {
  const { id } = useParams();
  const { SingleEvent } = useSingleEvents(id);
  const { register, handleSubmit } = useForm();
  const navigat = useNavigate();

  if (!SingleEvent) {
    return <p>Loading...</p>;
  }

  const {
    duration,
    eventName,
    userName,
    dateAndTime,
    userEmail,
    method,
    meetLink,
    scheduleId,
  } = SingleEvent;
  const detailsLink = `let-s-scheduled-frontend.vercel.app/confirm-schedule/${id}`;
  const onSubmit = async (data) => {
    try {
      const { name, email } = data;

      const emailData = {
        userName,
        name,
        userEmail,
        eventName,
        dateAndTime,
        method,
        meetLink, // There is no definition for 'meetLink' in your code
        detailsLink,
        email,
      };

      const response = await axios.post(
        "http://localhost:3000/api/v1/events/send-email",
        { emailInfo: emailData }
      );

      if (response.data.success === true) {
        navigat(`/confirm-schedule/bookingConfirmed/${scheduleId}`);
      }
      console.log(response.data);

      // Handle the response or any other logic after sending the email
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the error, maybe show an error message to the user
    }
  };

  return (
    <div className="px-2 lg:px-0">
      <div className="lg:w-8/12 md:border shadow-2xl md:border-[#0069ff] rounded-md mx-auto lg:flex gap-x-12 lg:border border-gray-300 lg:px-8 py-5">
        <div>
          <div className="flex items-center mb-5 lg:mb-0">
            <Link to={`/confirm-schedule/${id}`}>
              <IoMdArrowRoundBack className="border border-gray-300 p-1 w-8 h-8 text-blue-500 rounded-full cursor-pointer lg:mb-10"></IoMdArrowRoundBack>
            </Link>
            <p className="lg:hidden text-gray-500 text-2xl font-prompt ml-16">
              {" "}
              {userName}
            </p>
          </div>
          <h3 className="text-gray-500 text-xl mb-5 font-prompt hidden lg:block">
            {userName}
          </h3>
          <h3 className="text-gray-500 text-2xl mb-5 font-prompt hidden lg:block">
            {eventName}
          </h3>
          <p className="flex items-center gap-x-3 text-gray-500 mb-5 font-prompt">
            <IoIosTime className="text-xl"></IoIosTime>
            {duration}
          </p>
          <p className="lg:flex items-center gap-x-3 text-gray-500 mb-5 font-prompt hidden ">
            <SlCalender className="text-xl"></SlCalender>
            <p>{dateAndTime}</p>
          </p>
          <p className="flex items-center gap-x-3 text-gray-500 mb-5 font-prompt lg:hidden">
            <SlCalender className="text-xl"></SlCalender>
            <p>8:00am - 8:30am, Friday, January 12, 2024</p>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:border-l-2 lg:pl-24 border-gray-300 h-full"
        >
          <h4 className="font-cursive">Enter Details</h4>
          <h6 className="font-prompt mb-1 mt-6">Name *</h6>
          <input
            type="name"
            className="input input-bordered block w-full"
            {...register("name")}
          />
          <h6 className="font-prompt mb-1 mt-6">Email *</h6>
          <input
            type="email"
            className="input input-bordered block w-full"
            {...register("email")}
          />
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white transition-colors duration-200 px-3 py-1 rounded-full mt-5">
            Add guests
          </button>
          <h6 className="font-prompt mb-1 mt-6">
            Please share anything that will help prepare for our meeting.
          </h6>
          <textarea
            type="text"
            rows={3}
            className="textarea textarea-bordered block w-full"
            {...register("text")}
          />
          <button className="border bg-blue-600 hover:bg-transparent hover:border-blue-500 text-white hover:text-blue-500 transition-colors duration-200 px-4 py-2 rounded-full mt-5 font-cursive">
            Schedule Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDetails;
