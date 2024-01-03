import { Link } from "react-router-dom";
import { VscStarFull } from "react-icons/vsc";
import HomePageDegain from "../../../../componnents/HomePageDegain";
import backgroundImage from "../../../../assets/new-clouds-2.svg";
const Banner = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: "100%",
    width: "100%",
  };
  return (
    <div
      style={backgroundStyles}
      className="hero md:pt-[200px] pt-[150px] md:w-8/12 mx-auto"
    >
      <div className="hero-content text-center">
        <div className="hidden md:flex">
          <div>
            <VscStarFull className="text-[#0069ff] text-4xl animate-pulse absolute top-96 left-24" />
            <VscStarFull className="text-[#0069ff] text-4xl animate-pulse absolute bottom-24 left-[300px]" />
            <VscStarFull className="text-[#0069ff] text-4xl animate-pulse absolute top-24 left-80" />

            <VscStarFull className="text-[#0069ff] text-4xl animate-pulse absolute top-24 right-[300px]" />
            <VscStarFull className="text-[#0069ff] text-4xl animate-pulse absolute bottom-28 right-[300px]" />
            <VscStarFull className="text-[#0069ff] text-4xl animate-pulse absolute bottom-72 right-[100px]" />
          </div>
          <div className="animate-pulse absolute bottom-44 lg:block hidden left-[100px]">
            <HomePageDegain />
          </div>
        </div>
        <div className="text-left md:text-center">
          <h1 className="text-primary">
            Transforming Your Calendar into a{" "}
            <span className="text-[#0069ff] pt-2">Masterpiece</span>
          </h1>
          <p className="py-8 text-secondary ">
            Welcome to the future of event scheduling. Dive into a curated
            selection of experiences, tailor your social calendar, and make
            every moment extraordinary. Ready to redefine the way you celebrate?
          </p>
          <Link to={"/sinup"}>
            <button className=" btn-primary">Get started with free now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
