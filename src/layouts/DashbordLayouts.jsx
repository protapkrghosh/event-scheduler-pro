import { Link, Outlet } from "react-router-dom";
import DasboardNavbar from "../pages/shered/navbar/DasboardNavbar";
import { FaAlignLeft, FaPlus, FaUserPlus } from "react-icons/fa";
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
          <h1>lets schediule</h1>
          <li>
            <button
              className="btn-event text-center flex items-center justify-center"
              to={"/create-event"}
            >
              <FaPlus /> create event
            </button>
          </li>
          <li>
            <Link to={"/create-event"}> Sidebar Item 1</Link>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayouts;
