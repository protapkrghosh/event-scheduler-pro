import { Outlet } from "react-router-dom";
import Navbar from "../pages/shered/navbar/Navbar";
import Footer from "../pages/shered/footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto bg-[#f6f8fc]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
