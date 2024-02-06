import EasyScheduleFirstPart from "./solutions/EasyScheduleFirstPart";
import EasyScheduleSecondPart from "./solutions/EasyScheduleSecondPart";
import SolutionsHero from "./solutions/SolutionsHero";

const Solutions = () => {
  return (
    <div>
      {/* render all the section of the solution page have */}
      <SolutionsHero />
      <EasyScheduleFirstPart></EasyScheduleFirstPart>
      <EasyScheduleSecondPart></EasyScheduleSecondPart>
    </div>
  );
};

export default Solutions;
