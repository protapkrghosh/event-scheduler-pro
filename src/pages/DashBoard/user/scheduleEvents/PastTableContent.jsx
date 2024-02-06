/* eslint-disable react/prop-types */

import useContexts from "../../../../hooks/useContexts";
import DetailsModal from "./DetailsModal";

// past meeting coming from scheduleEvent.jsx
const PastTableContent = ({ pastMeeting }) => {
  const { user } = useContexts();
  // take some data from pastMeeting to show here
  const { eventName, dateAndTime, method, eventTypes } = pastMeeting;
  // separate the date and time to show.
  const [timePart, datePart] = dateAndTime?.split(",") || [];
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 rounded-full">
              <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.displayName}</div>
            <p>{method}</p>
          </div>
        </div>
      </td>
      <td className="font-semibold">
        {timePart}
        <br />
        <span>{datePart}</span>
      </td>
      <td className="font-semibold">
        {eventName}
        <br />
        {eventTypes}
      </td>
      <th>
        {/* show the details modal */}
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          details
        </button>
        <DetailsModal
          meetingDetails={pastMeeting}
          timePart={timePart}
          datePart={datePart}
        ></DetailsModal>
      </th>
    </tr>
  );
};

export default PastTableContent;
