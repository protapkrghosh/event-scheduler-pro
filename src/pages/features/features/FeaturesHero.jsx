import backgroundImage from "../../../assets/new-clouds-2.svg";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const FeaturesHero = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={backgroundStyles} className="bg-[#E8F5FF] pt-20 lg:pt-32">
      <div className="lg:w-9/12 mx-auto px-3 lg:px-0 flex flex-col-reverse lg:flex-row justify-center items-center gap-x-16">
        <div>
          <h1 className="font-cursive text-4xl lg:text-6xl font-semibold hidden lg:block">
            A better way to <br />
            <span className="text-[#2A9DFC]">schedule meetings</span>
          </h1>
          <h1 className="font-cursive text-4xl lg:text-6xl font-semibold">
            A better way to <span className="text-[#2A9DFC]">schedule meetings</span>
          </h1>
          <p className="font-cursive my-8">
            Appointlet provides all the critical features you <br /> need in order to
            book time with people outside <br /> your organization
          </p>
          <div className="flex items-center gap-x-4">
            <button className="flex items-center gap-x-1 text-xl text-center my-5 px-2 lg:px-5 py-1 lg:py-3 bg-[#46CC71] hover:bg-[#22a44b] font-semibold text-white transition-colors duration-200 rounded-full">Start Free Trial <MdOutlineArrowRightAlt className="text-[25px]"></MdOutlineArrowRightAlt> </button>
            <button className="btn-card rounded-md">Request Demo</button>
          </div>
        </div>
        <img
          className="w-[600px]"
          src="https://www.appointlet.com/wp-content/uploads/2022/10/Features.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturesHero;
