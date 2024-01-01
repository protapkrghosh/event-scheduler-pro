import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
const ReactTabs = () => {
  const [active, setIsActive] = useState("Sales");
  const tabTitles = [
    "Sales",
    "Marketing",
    "Success",
    "Recruiting",
    "Technology",
    "Education",
  ];
  const salesTabPanel = [
    {
      heading: "Drive more revenue",
      para: "Book high-value meetings in seconds and turn scheduling into a competitive advantage.",
    },
    {
      heading: "Speed up your sales cycle",
      para: "Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.",
    },
    {
      heading: "Close more deals",
      para: "Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.",
    },
  ];

  const marketingTabPanel = [
    {
      heading: "Drive more pipeline",
      para: "Turn marketing leads into booked meetings, faster.",
    },
    {
      heading: "Improve lead response times",
      para: "Gain a competitive advantage when you qualify, route, and book leads instantly.",
    },
    {
      heading: "Boost conversion rates",
      para: "Reduce friction in the sales funnel and close more deals.",
    },
  ];
  const customerSuccessTabPanel = [
    {
      heading: "Drive more retention",
      para: "Bring all of your experts together and connect with customers at every stage of their journey to build long-lasting partnerships.",
    },
    {
      heading: "Speed up your response times",
      para: "Quickly book time to solve customers’ needs and help them self-serve to support their goals.",
    },
    {
      heading: "Improve NPS and customer health",
      para: "Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.",
    },
  ];
  const recruitingTabPanel = [
    {
      heading: "Hire more efficiently",
      para: "Spend less time wrangling calendars and more time meeting candidates.",
    },
    {
      heading: "Speed up your recruiting cycle",
      para: "Book interviews in seconds and reduce time-to-fill.",
    },
    {
      heading: "Improve the candidate experience",
      para: "Eliminate friction and make your recruiting process a competitive advantage.",
    },
  ];
  const informationTechnologyTabPanel = [
    {
      heading: "Maintain enterprise-grade security with scheduling automation",
      para: "Stay aligned with your security requirements and reduce risk across the org.",
    },
    {
      heading: "Implement and govern at ease",
      para: "Eliminate the manual processes of implementing, managing user access and permissions on the platform.",
    },
    {
      heading: "Drive adoption and ROI across teams",
      para: "Partner with our team to onboard, drive adoption, and identify success metrics to achieve greater value, faster.",
    },
  ];
  const educationTabPanel = [
    {
      heading: "Drive more valuable connections with automated scheduling",
      para: "Spend more quality time supporting students, whether you’re advising, tutoring, career planning, or counseling.",
    },
    {
      heading: "Increase communication and foster coordination",
      para: "Make your schedule more accessible to students and prospects, allowing them to book time when they need it most.",
    },
    {
      heading: "Deliver a better educational experience",
      para: "Focus on what matters most: supporting and connecting with your students, so they can succeed.",
    },
  ];
  return (
    <div className="my-24 py-16 bg-slate-50">
      <Tabs>
        <TabList className="lg:w-1/2 mx-auto grid grid-cols-2 lg:grid-cols-6 place-items-center gap-y-3 mb-24">
          {tabTitles.map((tabTitle) => (
            <Tab
              key={tabTitle}
              onClick={() => setIsActive(tabTitle)}
              className={`${
                active === tabTitle && "bg-blue-50 border-b-4 border-b-blue-400"
              } py-1 lg:py-3 px-3 lg:px-5 text-gray-500 text-xl font-semibold tracking-tight cursor-pointer w-[140px] transition-colors duration-200 text-center`}
            >
              {tabTitle}
            </Tab>
          ))}
        </TabList>

        <TabPanel className="lg:w-[60%] px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {salesTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-lg text-gray-500 font-semibold">
                    {panelContent.para}
                  </p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[500px] lg:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/5efef2a0b21095c5333d41ea650b6fd3/Calendly-Sales-Small-new_io.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>

        <TabPanel className="lg:w-[60%] px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {marketingTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-lg text-gray-500 font-semibold">
                    {panelContent.para}
                  </p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[500px] lg:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/6MaOVZrhlUGMwh5xszyWl8/2aaeec70d4e44490f150e28ea21d3165/Calendly-Demand-Gen-Small.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel className="lg:w-[60%] px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {customerSuccessTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-lg text-gray-500 font-semibold">
                    {panelContent.para}
                  </p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[500px] lg:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/47xznwNRRuHE6gx1VSbhee/2f9ad09c15c55a4a252239f2e915c459/Calendly-Customer-Success.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel className="lg:w-[60%] px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {recruitingTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-lg text-gray-500 font-semibold">
                    {panelContent.para}
                  </p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[500px] lg:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/1kDKK7sXKlgYglms0bWvmh/832a633866ff496a90261876f026d5fd/Calendly-Recruiting-Small.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>

        <TabPanel className="lg:w-[60%] px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {informationTechnologyTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-lg text-gray-500 font-semibold">
                    {panelContent.para}
                  </p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[500px] lg:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/2Vw1fqn2KMdFMULRX84jgx/5149a01af4dc9951f752a972aaa77b6c/Calendly-IT_Small__3_io.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>
        <TabPanel className="lg:w-[60%] px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {educationTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-lg text-gray-500 font-semibold">
                    {panelContent.para}
                  </p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[500px] lg:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/1nFkpdx4ok8zrMu4ZCkIxV/2d9761a58b2d846458fa27797dc2ecee/Calendly-Education.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTabs;
