import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import SingIn from "../pages/login_and_sinup/login/SingIn";
import Sinup from "../pages/login_and_sinup/sinup/Sinup";
import Features from "../pages/features/Features";
import DashboardLayouts from "../layouts/DashbordLayouts";
import CreateEvent from "../pages/DashBoard/creatEvent/CreatEvent";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ScheduleEvents from "../pages/DashBoard/scheduleEvents/ScheduleEvents";
import Bookings from "../pages/home/home/bookings/Bookings";
import Sales from "../componnents/solutionsComponents/sales/Sales";
import Marketing from "../componnents/solutionsComponents/marketing/Marketing";
import Sucsses from "../componnents/solutionsComponents/Sucsses/Sucsses";
import Recruiting from "../componnents/solutionsComponents/recruiting/Recruiting";
import Technology from "../componnents/solutionsComponents/technology/Technology";
import Educations from "../componnents/solutionsComponents/education/Educations";
import ContactUs from "../pages/ContactUs/ContactUs";
import CreateMeet from "../pages/DashBoard/creatEvent/CreateMeet";
import CreatRoom from "../pages/DashBoard/creatCustomMeet/CreatRoom";
import EventDtailsLayouts from "../layouts/EventDtailsLayouts";
import ConfirmBooking from "../pages/DashBoard/ConfirmBooking/ConfirmBooking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SingIn />,
      },
      {
        path: "/sinup",
        element: <Sinup />,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/pricing",
        element: <Bookings></Bookings>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/room/:roomID",
        element: <CreatRoom />,
      },
      {
        path: "/solutions/sales",
        element: <Sales />,
      },
      {
        path: "/solutions/sales",
        element: <Sales />,
      },
      {
        path: "/solutions/marketing",
        element: <Marketing />,
      },
      {
        path: "/solutions/success",
        element: <Sucsses />,
      },
      {
        path: "/solutions/recruiting",
        element: <Recruiting />,
      },
      {
        path: "/solutions/technology",
        element: <Technology />,
      },
      {
        path: "/solutions/education",
        element: <Educations />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts />,
    children: [
      {
        path: "/dashboard",
        element: <CreateEvent></CreateEvent>,
      },
      {
        path: "/dashboard/create-event",
        element: <CreateEvent />,
      },
      {
        path: "/dashboard/schedule-event",
        element: <ScheduleEvents></ScheduleEvents>,
      },
      {
        path: "/dashboard/subscription",
        element: <Bookings></Bookings>,
      },
      {
        path: "/dashboard/:eventType",
        element: <CreateMeet></CreateMeet>,
      },
    ],
  },
  {
    path: "/confirm-schedule",
    element: <EventDtailsLayouts />,
    children: [
      {
        path: "/confirm-schedule/:id",
        element: <ConfirmBooking />,
      },
    ],
  },
]);

export default router;
