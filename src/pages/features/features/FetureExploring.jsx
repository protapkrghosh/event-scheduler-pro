import { Link } from "react-router-dom";

const FetureExploring = () => {
  return (
    <div className="hero  py-40 md:w-10/12 mx-auto">
      <div className="hero-content   flex-col lg:flex-row-reverse rounded-2xl md:relative border w-full bg-slate-100">
        <div className="md:absolute -top-[60px] xl:-top-[120px] right-[1px]">
          <img
            src="https://assets.setmore.com/website/v2/images/common-images/iphone-setmore-integrations.webp"
            className="w-[450px] xl:w-full h-[300px] lg:h-full"
          />
        </div>
        <div className="mr-auto  pt-10 pb-2 pl-4">
          <h1 className="text-third text-center lg:text-left">
            Speaking <br />{" "}
            <span className="text-[#0069ff]">of connecting</span>
          </h1>
          <p className="hidden xl:block py-6 text-secondary text-center lg:text-left">
            Enhance your service by integrating Setmore with your favorite{" "}
            <br />
            business apps. Video calling, engaging emails, social streaming –{" "}
            <br />
            scheduling is just the beginning. strategic goals.
          </p>
          <p className="xl:hidden py-6 text-secondary text-center lg:text-left lg:w-[450px]">
            Enhance your service by integrating Setmore with your favorite{" "}
            business apps. Video calling, engaging emails, social streaming –{" "}
            scheduling is just the beginning. strategic goals.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to="/contactUs" className=" btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetureExploring;
