import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import SingIn from "../pages/login_and_sinup/login/SingIn";
import Error from "../pages/error/error";
import Sinup from "../pages/login_and_sinup/sinup/Sinup";
import LandingPage from "../pages/dashboard/landingPage/LandingPage";
import Features from "../pages/features/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
        path: "/dashboard",
        element: <LandingPage></LandingPage>
      },
      {
        path: "/features",
        element: <Features></Features>
      },
    ],
  },
]);

export default router;
