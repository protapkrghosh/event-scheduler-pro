import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// received title, heading, para, link, img, span as a props from solutions components and handle the all solutions third sections dynamic
const EasyScheduleSecondPart = ({ title, heading, para, link, img, span }) => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-[50%]">
          <img src={img} className="" />
        </div>
        <div className="md:w-[50%]">
          <h5 className="font-cursive text-blue-500 mb-5 text-center lg:text-left">
            {title}
          </h5>
          <h3 className="text-third text-center lg:text-left">
            {heading}
            <span className="text-[#0069ff]">{span}</span>{" "}
          </h3>
          <p className="text-secondary tracking-wide my-5 text-center lg:text-left">
            {para}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link className="font-cursive text-blue-500 flex items-center gap-x-2">
              {link} <FaLongArrowAltRight></FaLongArrowAltRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyScheduleSecondPart;
