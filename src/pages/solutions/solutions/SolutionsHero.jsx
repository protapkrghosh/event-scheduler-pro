import backgroundImage from "../../../assets/new-clouds-2.svg";
const SolutionsHero = ({ image, title, span, discriptions }) => {
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
          <img src={image} className=" w-full h-full" />
        </div>
        <div className="md:w-[50%]">
          <h1 className="text-primary">
            {title}
            <span className="text-[#0069ff]">{span}</span>
          </h1>
          <p className="text-secondary py-6">{discriptions}</p>
          <button className=" btn-primary">Get Started</button>
          <button className=" btn-fetures text-[#0069ff] ml-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsHero;
