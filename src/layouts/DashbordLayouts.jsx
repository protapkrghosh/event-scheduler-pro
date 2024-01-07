import { Link, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCodeBranch,
  FaHeadset,
  FaLink,
  FaPlus,
  FaQuestion,
  FaRandom,
  FaRegClock,
  FaAngleDoubleLeft,
} from "react-icons/fa";

const DashboardLayouts = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex">
        <div className="flex mr-4">
          <label
            htmlFor="my-drawer-3"
            className=" drawer-button cursor-pointer"
          >
            <FaAngleDoubleLeft className="text-2xl rotate-180 mt-5"></FaAngleDoubleLeft>
          </label>
        </div>
        {/* <DasboardNavbar /> */}
        <div className="w-1/2 mx-auto mt-40">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar"></label>
        <div className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          <div className="flex justify-betweenitems-center mb-12">
            <label
              htmlFor="my-drawer-3"
              className="lg:hidden drawer-button  cursor-pointer"
            >
              <FaAngleDoubleLeft className="text-2xl"></FaAngleDoubleLeft>
            </label>
            <h1 className="text-center font-cursive uppercase text-2xl">
              lets schedule
            </h1>
            <label
              htmlFor="my-drawer-3"
              className="hidden drawer-button lg:flex items-center ml-5 cursor-pointer"
            >
              <FaAngleDoubleLeft className="text-2xl"></FaAngleDoubleLeft>
            </label>
          </div>
          <button
            className="btn-primary   flex items-center justify-center gap-2"
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
