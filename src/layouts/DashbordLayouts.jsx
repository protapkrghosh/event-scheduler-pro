import { Link, Outlet } from "react-router-dom";
import DasboardNavbar from "../pages/shered/navbar/DasboardNavbar";
import {
  FaAlignLeft,
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
} from "react-icons/fa";
import DashBoardNavbarComponnets from "../componnents/DashBoardNavbarComponnets";
const DashboardLayouts = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        <div className="flex justify-between items-center mr-4">
          <label
            htmlFor="my-drawer-2"
            className=" ml-4  drawer-button lg:hidden flex items-center justify-between "
          >
            <div>
              <FaAlignLeft />
            </div>
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
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <h1 className="text-center font-bold text-4xl text-[#0069ff] mb-12">
            lets schediule
          </h1>
          <button
            className="btn-event  flex items-center justify-center gap-2"
            to={"/create-event"}
          >
            <FaPlus /> create event
          </button>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0069ff] text-xl"
            >
              <FaLink />
              Event types
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0069ff] text-xl"
            >
              <FaCalendarAlt />
              Scheduled events
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0069ff] text-xl"
            >
              <FaCodeBranch />
              Workflows
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0069ff] text-xl"
            >
              <FaRandom />
              Routing
            </Link>
          </li>
          <div className="border border-[#0069ff] p-4 mt-8">
            <FaLevelUpAlt className="text-xl font-bold text-[#0069ff]" />
            <h1 className="text-xl font-bold rounded-3xl">
              Upgrade your subscription
            </h1>
            <p>Get even more of the features you need.</p>
          </div>
          <li className="mt-6">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0069ff] text-xl"
            >
              <FaRegClock />
              Availability
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0069ff] text-xl"
            >
              <FaQuestion />
              Help
            </Link>
          </li>
          <li className="mt-4">
            <Link
              to={"/dashboard/create-event"}
              className="flex items-center  text-[#0069ff] text-xl"
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
