import { Outlet } from "react-router-dom";
import EventNavbar from "../pages/shered/navbar/EventNavbar";

const EventDtailsLayouts = () => {
  return (
    <div>
      <EventNavbar />
      <Outlet />
    </div>
  );
};

export default EventDtailsLayouts;
