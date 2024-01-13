import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCodeBranch,
  FaHeadset,
  FaLink,
  FaPlus,
  FaQuestion,
  FaRandom,
  FaRegClock,
} from "react-icons/fa";
import DasboardNavbar from "../pages/shered/navbar/DasboardNavbar";

const DashboardLayouts = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex">
        <div className="flex justify-between mr-4"></div>
        <div className="w-full  mt-8">
          <DasboardNavbar />
          <div className="mt-10 lg:mt-[100px] -ml-10 xl:-ml-0 px-4">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar"></label>
        <div className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-center font-cursive uppercase text-2xl">
              <Link to={"/"}>lets schedule</Link>
            </h1>
          </div>
          <button
            className="btn-primary   flex items-center justify-center gap-2"
            to={"/create-event"}
          >
            <FaPlus /> create event
          </button>
          <ul>
            <li className="mt-4">
              <NavLink
                to={"/dashboard/create-event"}
                className={({ isActive }) =>
                  isActive ? "text-[#0069ff]" : "nothing"
                }
              >
                <FaLink />
                Event types
              </NavLink>
            </li>
            <li className="mt-4">
              <NavLink
                to={"/dashboard/schedule-event"}
                className={({ isActive }) =>
                  isActive ? "text-[#0069ff]" : "nothing"
                }
              >
                <FaCalendarAlt />
                Scheduled events
              </NavLink>
            </li>
            <li className="mt-4">
              <NavLink
                to={"/dashboard/workflows"}
                className={({ isActive }) =>
                  isActive ? "text-[#0069ff]" : "nothing"
                }
              >
                <FaCodeBranch />
                Workflows
              </NavLink>
            </li>
            <li className="mt-4">
              <NavLink
                to={"/dashboard/routing"}
                className={({ isActive }) =>
                  isActive ? "text-[#0069ff]" : "nothing"
                }
              >
                <FaRandom />
                Routing
              </NavLink>
            </li>
            <li className="mt-6">
              <NavLink
                to={"/dashboard/availability"}
                className={({ isActive }) =>
                  isActive ? "text-[#0069ff]" : "nothing"
                }
              >
                <FaRegClock />
                Availability
              </NavLink>
            </li>
            <li className="mt-4">
              <NavLink
                to={"/dashboard/help"}
                className={({ isActive }) =>
                  isActive ? "text-[#0069ff]" : "nothing"
                }
              >
                <FaQuestion />
                Help
              </NavLink>
            </li>
            <li className="mt-4">
              <NavLink
                to={"/dashboard/contact-us"}
                className={({ isActive }) =>
                  isActive ? "text-[#0069ff]" : "nothing"
                }
              >
                <FaHeadset />
                contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
