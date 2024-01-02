import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import SingIn from "../pages/login_and_sinup/login/SingIn";
import Sinup from "../pages/login_and_sinup/sinup/Sinup";
import Features from "../pages/features/Features";
import DashboardLayouts from "../layouts/DashbordLayouts";
import CreateEvent from "../pages/DashBoard/creatEvent/CreatEvent";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts />,
    children: [
      {
        path: "/dashboard/create-event",
        element: <CreateEvent />,
      },
    ],
  },
]);

export default router;
