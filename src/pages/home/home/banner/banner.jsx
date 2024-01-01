import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero md:pt-[200px] pt-[200px] md:w-8/12 mx-auto">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-primary">
            Transforming Your Calendar into a Masterpiece
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
