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
  FaAngleDoubleLeft,
} from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";

import DashBoardNavbarComponnets from "../componnents/DashBoardNavbarComponnets";
import { useState } from "react";
const DashboardLayouts = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex">
        <div className="flex justify-between items-center mr-4">
          <ul className="menu p-4 w-[80px] bg-base-200 text-base-content h-[100vh]">
            {/* Sidebar content here */}
            <label
              htmlFor="my-drawer-3"
              className=" drawer-button flex items-center justify-between cursor-pointer"
            >
              <img
                src="https://assets.calendly.com/assets/frontend/media/calendly-33a0809afc4c21162dd7.svg"
                className="w-[50px] h-[50px] cursor-pointer mb-12"
                alt=""
              />
            </label>

            <button
              className="bg-[#0069ff] text-white font-bold text-xl w-[50px] h-[50px] rounded-full flex items-center justify-center"
              to={"/create-event"}
            >
              <FaPlus />
            </button>

            <li className="mt-4">
              <Link to={"/dashboard/create-event"} className="text-xl">
                <FaLink />
              </Link>
            </li>
            <li className="mt-4">
              <Link to={"/dashboard/schedule-event"} className="text-xl">
                <FaCalendarAlt />
              </Link>
            </li>
            <li className="mt-4">
              <Link to={"/dashboard/create-event"} className="text-xl">
                <FaCodeBranch />
              </Link>
            </li>
            <li className="mt-4">
              <Link to={"/dashboard/create-event"} className="text-xl">
                <FaRandom />
              </Link>
            </li>
            <li className="mt-6">
              <Link to={"/dashboard/create-event"} className="text-xl">
                <FaRegClock />
              </Link>
            </li>
            <li className="mt-4">
              <Link to={"/dashboard/create-event"} className="text-xl">
                <FaQuestion />
              </Link>
            </li>
            <li className="mt-4">
              <Link to={"/dashboard/create-event"} className="text-xl">
                <FaHeadset />
              </Link>
            </li>
          </ul>
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
        {/* <DasboardNavbar /> */}
        <Outlet />
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar"></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-center font-cursive uppercase text-2xl">
              lets schedule
            </h1>
            <label
              htmlFor="my-drawer-3"
              className=" drawer-button flex items-center justify-between cursor-pointer"
            >
              <FaAngleDoubleLeft className="text-2xl"></FaAngleDoubleLeft>
            </label>
          </div>
          <button
            className="btn-event  flex items-center justify-center gap-2"
            to={"/create-event"}
          >
            <FaPlus /> create event
          </button>
          <ul>
            <li className="mt-4">
              <Link
                to={"/dashboard/create-event"}
                className="flex items-center  text-xl"
              >
                <FaLink />
                Event types
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to={"/dashboard/schedule-event"}
                className="flex items-center  text-xl"
              >
                <FaCalendarAlt />
                Scheduled events
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to={"/dashboard/create-event"}
                className="flex items-center  text-xl"
              >
                <FaCodeBranch />
                Workflows
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to={"/dashboard/create-event"}
                className="flex items-center  text-xl"
              >
                <FaRandom />
                Routing
              </Link>
            </li>
            <Link
              to="/dashboard/subscription"
              className="border border-[#0069ff] p-4 mt-8"
            >
              <FaLevelUpAlt className="text-xl font-bold"></FaLevelUpAlt>
              <h1 className="text-xl font-bold rounded-3xl">
                Upgrade your subscription
              </h1>
              <p>Get even more of the features you need.</p>
            </Link>
            <li className="mt-6">
              <Link
                to={"/dashboard/create-event"}
                className="flex items-center  text-xl"
              >
                <FaRegClock />
                Availability
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to={"/dashboard/create-event"}
                className="flex items-center  text-xl"
              >
                <FaQuestion />
                Help
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to={"/dashboard/create-event"}
                className="flex items-center  text-xl"
              >
                <FaHeadset />
                contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
