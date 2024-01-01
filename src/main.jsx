import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import router from "./routes/route.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
      <div className=" container md:w-9/12 mx-auto bg-[#f6f8fc]">
        <Main />
      </div>
    </RouterProvider>
  </AuthProvider>
);
