import { Link } from "react-router-dom";

const FetureContact = () => {
  return (
    <div className="hero py-40 md:w-10/12 mx-auto ">
      <div className="hero-content flex-col lg:flex-row-reverse rounded-2xl md:relative border w-full bg-slate-100">
        <div className="md:absolute -top-[88px] xl:-top-[115px] right-[10px]">
          <img
            src="https://assets.setmore.com/website/v2/images/common-images/smiling-couple/smiling-couple.webp"
            className="w-full h-[300px] lg:h-full"
          />
        </div>
        <div className="mr-auto  lg:py-12 pl-4">
          <h1 className="text-third text-center lg:text-left">
            For business big <br />{" "}
            <span className="text-[#0069ff]">and small</span>
          </h1>
          <p className="hidden xl:block py-3 lg:py-6 text-secondary text-center lg:text-left">
            Reach out to discuss Enterprise solutions for larger teams. We can{" "}
            <br />
            tailor Setmore’s features to meet your requirements, processes and{" "}
            <br />
            strategic goals.
          </p>
          <p className="xl:hidden py-3 lg:py-6 text-secondary text-center lg:text-left lg:w-[415px]">
            Reach out to discuss Enterprise solutions for larger teams. We can{" "}
            
            tailor Setmore’s features to meet your requirements, processes and{" "}
            
            strategic goals.
          </p>
          <div className="flex justify-center lg:justify-start">
          <Link to="/contactUs" className=" btn-primary">
            Contact us
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetureContact;
