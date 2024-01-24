/* eslint-disable react/prop-types */
import useContexts from "../../../hooks/useContexts";
import DetailsModal from "./DetailsModal";

const PendingTableContent = ({ pendingMeeting }) => {
  const { user } = useContexts();
  const { duration, eventName, method, meetLink, eventTypes } =
    pendingMeeting;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 rounded-full">
              <img src={user.photoURL} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user.displayName}</div>
            <p>
              {method}({meetLink})
            </p>
          </div>
        </div>
      </td>
      <td>{eventName}</td>
      <td className="font-semibold">{eventTypes}</td>
      <td>{duration} Minutes</td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          details
        </button>
        <DetailsModal meetingDetails={pendingMeeting}></DetailsModal>
      </th>
    </tr>
  );
};

export default PendingTableContent;
