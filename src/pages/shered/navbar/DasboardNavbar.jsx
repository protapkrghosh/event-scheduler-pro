import { FaUserPlus } from "react-icons/fa";
import DashBoardNavbarComponnets from "../../../componnents/DashBoardNavbarComponnets";
import { useState } from "react";
import InviteUserModal from "../../../componnents/modal/InviteUserModal";

const DasboardNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="float-right hidden md:flex  items-center justify-between gap-4 mr-4">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn-nav flex items-center justify-center gap-2"
        >
          <FaUserPlus /> invite user
        </button>
      </div>
      <DashBoardNavbarComponnets />
      <InviteUserModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default DasboardNavbar;
