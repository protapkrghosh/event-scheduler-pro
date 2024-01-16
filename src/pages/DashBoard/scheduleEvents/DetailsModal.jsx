/* eslint-disable react/prop-types */
import useContexts from "../../../hooks/useContexts";
import { ImCross } from "react-icons/im";

const DetailsModal = ({ meetingDetails, timePart, datePart }) => {
  const { user } = useContexts();
  const {
    userName,
    eventTypes,
    eventName,
    meetLink,
    description,
    duration,
    userEmail,
    method,
  } = meetingDetails;
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box font-semibold">
          <div className="modal-action -m-1">
            <form method="dialog" className="">
              <button>
                <ImCross></ImCross>{" "}
              </button>
            </form>
          </div>
          <div>
            <img
              src={user?.photoURL}
              className="w-24 h-24 mx-auto mb-5 rounded-full"
              alt=""
            />
            <div>
              <span className="font-bold uppercase">Name:</span>
              <p className="tracking-wider mb-3 text-lg"> {userName}</p>
              <span className="font-bold uppercase">Email:</span>
              <p className="tracking-wider mb-3 text-lg"> {userEmail}</p>
              <span className="font-bold uppercase">Event Method: </span>
              <p className="tracking-wider mb-3 text-lg">{method}</p>
              <span className={`font-bold uppercase ${!timePart && "hidden"}`}>Event Time: </span>
              <p className={`tracking-wider mb-3 text-lg ${!timePart && "hidden"}`}>
                {timePart}, {datePart}
              </p>
              <span className="font-bold uppercase">Event Name: </span>
              <p className="tracking-wider mb-3 text-lg">{eventName}</p>
              <span className="font-bold uppercase">Event Types: </span>
              <p className="tracking-wider mb-3 text-lg">{eventTypes}</p>
              <span className="font-bold uppercase">Meet Id/Link: </span>
              <p className="mb-3 text-lg">{meetLink}</p>
              <span className="font-bold uppercase">Duration: </span>
              <p className="tracking-wider mb-3 text-lg">{duration}</p>
              <span className="font-bold uppercase">Description: </span>
              <p className="tracking-wider mb-3 text-lg">{description}</p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DetailsModal;
