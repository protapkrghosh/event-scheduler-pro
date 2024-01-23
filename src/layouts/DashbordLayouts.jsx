import { Link, NavLink, Outlet } from "react-router-dom";
import { FaAlignJustify, FaPlus } from "react-icons/fa";
import DasboardNavbar from "../pages/shered/navbar/DasboardNavbar";
import { adminDashBoardNavData, userDashBoardNavData } from "../data/Data";
import useAdmin from "../hooks/useAdmin";
import Loading from "../componnents/loading/Loading";
import { FaChartBar } from "react-icons/fa";

const DashboardLayouts = () => {
  const { isAdmin } = useAdmin();
  <Loading data={isAdmin} />;
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        <div className="flex items-center justify-between pl-4 pt-2">
          <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden">
            <FaAlignJustify className="text-2xl" />
          </label>
          <div className="">
            <DasboardNavbar />
          </div>
        </div>
        <div className="w-full">
          <div className="    px-4">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-center font-cursive uppercase text-2xl">
              <Link to={"/"}>lets schedule</Link>
            </h1>
          </div>
          {isAdmin?.isAdmin ? (
            <Link to={"/dashboard/overview"}>
              <button className="btn-primary w-full   flex items-center justify-center gap-2">
                <FaChartBar /> Overview
              </button>
            </Link>
          ) : (
            <button
              className="btn-primary   flex items-center justify-center"
              to={"/create-event"}
            >
              <FaPlus /> create event
            </button>
          )}
          <ul>
            {isAdmin?.isAdmin
              ? adminDashBoardNavData.map((userData) => (
                  <li key={userData.name} className="mt-4">
                    <NavLink
                      to={userData.to}
                      className={({ isActive }) =>
                        isActive ? "text-[#0069ff]" : "nothing"
                      }
                    >
                      {userData.icon}
                      {userData.name}
                    </NavLink>
                  </li>
                ))
              : userDashBoardNavData.map((userData) => (
                  <li key={userData.name} className="mt-4">
                    <NavLink
                      to={userData.to}
                      className={({ isActive }) =>
                        isActive ? "text-[#0069ff]" : "nothing"
                      }
                    >
                      {userData.icon}
                      {userData.name}
                    </NavLink>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
