import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Main from "./layouts/Main.jsx";
import router from "./routes/route.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  </React.StrictMode>
);
