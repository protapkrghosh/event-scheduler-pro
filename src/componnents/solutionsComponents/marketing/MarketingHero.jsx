import SolutionsHero from "../../../pages/solutions/solutions/SolutionsHero";

const MarketingHero = () => {
  return (
    <div>
      <SolutionsHero
        title={"Convert leads to meetings and revenue"}
        discriptions={
          "Create a better experience for high-value prospects, automate handoffs to sales, and fill your pipeline with quality leads."
        }
        span={" faster"}
        image={
          "https://images.ctfassets.net/k0lk9kiuza3o/6MaOVZrhlUGMwh5xszyWl8/2aaeec70d4e44490f150e28ea21d3165/Calendly-Demand-Gen-Small.png?q=85&fm=webp"
        }
      />
    </div>
  );
};

export default MarketingHero;
