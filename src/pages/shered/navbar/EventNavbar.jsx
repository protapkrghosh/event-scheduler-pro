import { FaLink } from "react-icons/fa";
import DashBoardNavbarComponnets from "../../../componnents/DashBoardNavbarComponnets";

const EventNavbar = () => {
  return (
    <div className="float-right hidden md:flex  items-center justify-between gap-8 md:pr-24 ">
      <button className="btn-nav flex items-center justify-center gap-2">
        <FaLink /> copy link
      </button>

      <DashBoardNavbarComponnets />
    </div>
  );
};

export default EventNavbar;
