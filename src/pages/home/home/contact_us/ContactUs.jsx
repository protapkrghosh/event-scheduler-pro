import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="text-center bg-[#0a2540] py-28  my-4 md:w-10/12 md:mx-auto mx-2 rounded-2xl">
      <h1 className="md:text-7xl text-4xl font-bold text-white">
        Power up your <span className="text-[#0069ff]">scheduling</span>
      </h1>
      <p className="text-white text-xl py-8">
        Get started with the worlds leading Scheduling Automation Platform in
        seconds – for free.
      </p>
      <Link to={"/sinup"}>
        <button className=" btn-primary">Sign up for free</button>
      </Link>
      <Link to="/contactUs" className=" btn-contact text-[#FFF]">Contact sales</Link>
    </div>
  );
};

export default ContactUs;
