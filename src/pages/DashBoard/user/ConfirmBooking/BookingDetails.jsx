import { IoMdArrowRoundBack, IoIosTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useSingleEvents from "../../../../hooks/useSingleEvents";
import Loading from "../../../../componnents/loading/Loading";

const BookingDetails = () => {
  // use useParams react hook to get the dynamic schedule id
  const { id } = useParams();

  // get the single event data from useSingleEvents() build in hook and it received a unique id to fetch the data
  const { SingleEvent, refetch } = useSingleEvents(id);

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // handle fetch the Single data smoothly use loading
  <Loading data={SingleEvent} />;

  // destructure the all  information from the single events
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

  // this is initial schedule link which schedule has been crated by the user
  const detailsLink = `https://let-s-scheduled-frontend.vercel.app/confirm-schedule/${id}`;

  // handle the logic of booking schedule
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
        meetLink,
        detailsLink,
        email,
      };

      // this response will save in our database and send a email to the user who book this schedule
      const response = await axios.post(
        "https://lets-sheduleit-backend.vercel.app/api/v1/mail/send-email",
        { emailInfo: emailData }
      );
      // if confirmed the time then he will redirect to this page.
      if (response.data.success === true) {
        navigate(`/confirm-schedule/bookingConfirmed/${scheduleId}`);
        refetch();
      }
    } catch (error) {
      console.error("Error sending email:", error);
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
          <h3 className="text-lg font-bold text-secondary">Invitee:</h3>
          <h3 className=" text-xl mt-4 mb-5 font-prompt hidden lg:block">
            {userName}
          </h3>
          <h3 className="mt-4 text-lg font-bold text-secondary">
            Meeting Name:
          </h3>
          <h3 className=" text-2xl mt-4 mb-5 font-prompt hidden lg:block">
            {eventName}
          </h3>
          <h3 className="mt-4 text-lg font-bold text-secondary">
            Meeting duration:
          </h3>
          <p className="flex items-center mt-4 gap-x-3  mb-5 font-prompt">
            <IoIosTime className="text-xl"></IoIosTime>
            {duration} minutes
          </p>
          <h3 className="mt-4 font-bold text-secondary">Date And Time</h3>
          <p className="lg:flex items-center gap-x-3 mt-4  mb-5 font-prompt hidden ">
            <SlCalender className="text-xl"></SlCalender>
            <p className="">{dateAndTime}</p>
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

          <h6 className="font-prompt mb-1 mt-6">
            Please share anything that will help prepare for our meeting.
          </h6>
          <textarea
            type="text"
            rows={3}
            className="textarea textarea-bordered block w-full"
            {...register("text")}
          />
          {/* button for confirm the schedule/time */}
          <button className="border bg-blue-600 hover:bg-transparent hover:border-blue-500 text-white hover:text-blue-500 transition-colors duration-200 px-4 py-2 rounded-full mt-5 font-cursive">
            Schedule Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingDetails;
