import { TiTick } from "react-icons/ti";
import { FcBusinessman } from "react-icons/fc";
import { IoVideocamOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { useParams } from "react-router-dom";
import useSingleEvents from "../../../hooks/useSingleEvents";
import Loading from "../../../componnents/loading/Loading";

const ScheduleConfirmed = () => {
  const handleRedirect = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/`;
    window.open(gmailUrl, "_blank");
  };
  const { id } = useParams();
  const { SingleEvent } = useSingleEvents(id);
  <Loading data={SingleEvent} />;

  const { eventName, dateAndTime, userName } = SingleEvent;
  return (
    <div className="px-2 lg:px-0">
      <div className="lg:w-8/12 items-center justify-center md:border shadow-2xl md:border-[#0069ff] rounded-md mx-auto lg:flex gap-x-12 lg:border  lg:px-8 py-5">
        <div>
          <p className="flex py-4 justify-center items-center font-cursive text-2xl gap-x-2">
            <span>
              <TiTick className="w-6 h-6 rounded-full text-white bg-green-500 border "></TiTick>
            </span>
            You are <span className="text-[#0069ff]">scheduled</span>
          </p>
          <p className="text-center mt-4 mb-1 tracking-wide pb-4">
            A calendar invitation has been sent to your email address.
          </p>
          <button
            onClick={handleRedirect}
            className="text-center mb-4 text-xl border-[#0069ff] ml-28 p-4 border rounded-xl"
          >
            open invitation
          </button>
          <div className="lg:w-[450px] mx-auto border  rounded-xl shadow-xl p-5">
            <h3 className="text-xl font-prompt mb-4 text-[#0069ff]">
              {eventName}
            </h3>
            <h3 className="flex items-center gap-x-2 mb-3 text-lg text-gray-500 font-cursive">
              <FcBusinessman></FcBusinessman>
              {userName}
            </h3>
            <p className="flex items-center gap-x-2 mb-3 text-lg text-gray-500 font-cursive">
              <SlCalender></SlCalender>
              {dateAndTime}
            </p>
            <p className="flex items-center gap-x-2 mb-3 text-lg text-gray-500 font-cursive">
              <IoVideocamOutline></IoVideocamOutline>Web conferencing details to
              follow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleConfirmed;
