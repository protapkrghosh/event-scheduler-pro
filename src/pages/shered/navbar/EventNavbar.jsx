import { FaLink } from "react-icons/fa";
import DashBoardNavbarComponnets from "../../../componnents/DashBoardNavbarComponnets";

const EventNavbar = () => {
  return (
    <div className="float-right hidden md:flex  items-center justify-between gap-8 md:pr-24 ">
      <button className="btn-nav flex items-center justify-center gap-2">
        <FaLink /> copy link
      </button>

      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="">
          Menu
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <DashBoardNavbarComponnets />
    </div>
  );
};

export default EventNavbar;
