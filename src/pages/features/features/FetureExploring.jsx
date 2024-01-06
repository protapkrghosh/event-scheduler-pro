import { Link } from "react-router-dom";

const FetureExploring = () => {
  return (
    <div className="hero  py-40 md:w-10/12 mx-auto">
      <div className="hero-content   flex-col lg:flex-row-reverse rounded-2xl md:relative border w-full bg-slate-100">
        <div className="md:absolute  -top-[120px]  right-[1px]">
          <img
            src="https://assets.setmore.com/website/v2/images/common-images/iphone-setmore-integrations.webp"
            className="w-full h-full"
          />
        </div>
        <div className="mr-auto  pt-10 pl-4">
          <h1 className="text-primary">
            Speaking <br />{" "}
            <span className="text-[#0069ff]">of connecting</span>
          </h1>
          <p className="py-6 text-secondary ">
            Enhance your service by integrating Setmore with your favorite{" "}
            <br />
            business apps. Video calling, engaging emails, social streaming –{" "}
            <br />
            scheduling is just the beginning. strategic goals.
          </p>
          <Link to="/contactUs" className=" btn-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default FetureExploring;
