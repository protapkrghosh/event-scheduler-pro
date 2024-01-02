import { Link, Outlet } from "react-router-dom";
import DasboardNavbar from "../pages/shered/navbar/DasboardNavbar";
import {
    FaCalendarAlt,
  FaCodeBranch,
  FaHeadset,
  FaLevelUpAlt,
  FaLink,
  FaPlus,
  FaQuestion,
  FaRandom,
  FaRegClock,
  FaUserPlus,
  FaAngleDoubleLeft 
} from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

import DashBoardNavbarComponnets from "../componnents/DashBoardNavbarComponnets";
const DashboardLayouts = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="flex justify-between items-center mr-4">
          <label
            htmlFor="my-drawer-2"
            className=" drawer-button flex items-center justify-between cursor-pointer"
          >
            <FaAnglesRight className="text-2xl"></FaAnglesRight>
          </label>
          <div className="md:hidden flex items-center justify-between gap-4">
            <div>
              <button className="btn-nav">
                <FaUserPlus />
              </button>
            </div>
            <div>
              <DashBoardNavbarComponnets />
            </div>
          </div>
        </div>
        <DasboardNavbar />
        <Outlet />
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-center font-cursive uppercase text-2xl text-[#0b3558]">
              lets schediule
            </h1>
            <label
              htmlFor="my-drawer-2"
              className=" drawer-button flex items-center justify-between cursor-pointer"
            >
              <FaAngleDoubleLeft  className="text-2xl"></FaAngleDoubleLeft>
            </label>
          </div>
          <button
            className="btn-event  flex items-center justify-center gap-2"
            to={"/create-event"}
          >
            <FaPlus /> create event
          </button>

          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0b3558] text-xl"
            >
              <FaLink />
              Event types
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/schedule-event"}
              className="flex items-center  text-[#0b3558] text-xl"
            >
              <FaCalendarAlt />
              Scheduled events
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0b3558] text-xl"
            >
              <FaCodeBranch />
              Workflows
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0b3558] text-xl"
            >
              <FaRandom />
              Routing
            </Link>
          </li>
          <Link to="/dashboard/subscription" className="border border-[#0069ff] p-4 mt-8">
            <FaLevelUpAlt className="text-xl font-bold text-[#0b3558]" />
            <h1 className="text-xl font-bold rounded-3xl">
              Upgrade your subscription
            </h1>
            <p>Get even more of the features you need.</p>
          </Link>
          <li className="mt-6">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0b3558] text-xl"
            >
              <FaRegClock />
              Availability
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0b3558] text-xl"
            >
              <FaQuestion />
              Help
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0b3558] text-xl"
            >
              <FaHeadset />
              contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayouts;
