import backgroundImage from "../../../assets/new-clouds-2.svg";
const FeaturesHero = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={backgroundStyles} className="hero min-h-screen pt-28 lg:pt-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-[50%]">
          <img
            src="https://www.appointlet.com/wp-content/uploads/2022/10/Features.png"
            className=" w-full h-full"
          />
        </div>
        <div className="md:w-[50%]">
          <h1 className="text-primary">
            A better way to schedule{" "}
            <span className="text-[#0069ff]">meetings</span>
          </h1>
          <p className="text-secondary py-6">
            Appointlet provides all the critical features you need in order to
            book time with people outside your organization
          </p>
          <button className=" btn-primary">Get Started</button>
          <button className=" btn-fetures text-[#0069ff] ml-4">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
