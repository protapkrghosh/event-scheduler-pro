import { Outlet } from "react-router-dom";
import EventNavbar from "../pages/shered/navbar/EventNavbar";

const EventDtailsLayouts = () => {
  return (
    <div className="">
      <div>
      <EventNavbar />
      </div>
      <div className="lg:pt-40">
      <Outlet />
      </div>
    </div>
  );
};

export default EventDtailsLayouts;
