import ContactUs from "../home/home/contact_us/ContactUs";
import FeaturesHero from "./features/FeaturesHero";
import FetureContact from "./features/FetureContact";
import FetureExploring from "./features/FetureExploring";
import FetureSerivises from "./features/FetureSerivises";
import Scheduling from "./features/Scheduling";

const Features = () => {
  return (
    <div>
      <FeaturesHero></FeaturesHero>
      <Scheduling></Scheduling>
      <FetureContact />
      <FetureSerivises />
      <FetureExploring />
      <ContactUs />
    </div>
  );
};

export default Features;
