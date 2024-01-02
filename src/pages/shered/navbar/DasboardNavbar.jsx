import { FaUserPlus } from "react-icons/fa";
import DashBoardNavbarComponnets from "../../../componnents/DashBoardNavbarComponnets";

const DasboardNavbar = () => {
  return (
    <div className="float-right hidden md:flex  items-center justify-between gap-4 mr-4">
      <div>
        <button className="btn-nav flex items-center justify-center gap-2">
          <FaUserPlus /> invite user
        </button>
      </div>
      <DashBoardNavbarComponnets />
    </div>
  );
};

export default DasboardNavbar;
