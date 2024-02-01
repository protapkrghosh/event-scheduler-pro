import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { customerSuccessTabPanel, educationTabPanel, informationTechnologyTabPanel, marketingTabPanel, recruitingTabPanel, salesTabPanel, tabTitles } from "../../../../data/Data";

const ReactTabs = () => {
  // the sales tab will open default.
  const [active, setIsActive] = useState("Sales");

  return (
    <div className=" py-16 bg-[#F8FAFC]">
      <h1 className="text-center text-primary pb-24 md:w-10/12 mx-auto">
        Smarter scheduling for teams who{" "}
        <span className="text-[#0069ff]">conduct meetings at scale</span>
      </h1>
      {/* the whole tabs functionality */}
      <Tabs>
        {/* tab titles. mapping all tab titles from data folder. */}
        <TabList className="lg:w-10/12 mx-auto grid grid-cols-2 lg:grid-cols-6 place-items-center gap-y-3 mb-24">
          {tabTitles.map((tabTitle) => (
            <Tab
              key={tabTitle}
              onClick={() => setIsActive(tabTitle)}
              className={`${
                active === tabTitle &&
                "bg-blue-50 border-b-4 border-b-[#0069ff]"
              } py-1 lg:py-3 px-3 lg:px-5 text-[#0b3558] text-xl font-semibold tracking-tight cursor-pointer w-[140px] transition-colors duration-200 text-center`}
            >
              {tabTitle}
            </Tab>
          ))}
        </TabList>
        {/* all tab content below there */}
        {/* sales tab content. mapping all tab content from data folder. */}
        <TabPanel className="lg:w-10/12 px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {salesTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-secondary">{panelContent.para}</p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[400px] xl:w-[500px] lg:h-[318px] xl:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/5efef2a0b21095c5333d41ea650b6fd3/Calendly-Sales-Small-new_io.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>

        {/* marketing tab content. mapping all tab content from data folder. */}
        <TabPanel className="lg:w-10/12 px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {marketingTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-secondary">{panelContent.para}</p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[400px] xl:w-[500px] lg:h-[318px] xl:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/6MaOVZrhlUGMwh5xszyWl8/2aaeec70d4e44490f150e28ea21d3165/Calendly-Demand-Gen-Small.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>

        {/* customerSuccessTabPanel tab content. mapping all tab content from data folder. */}
        <TabPanel className="lg:w-10/12 px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {customerSuccessTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-secondary">{panelContent.para}</p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[400px] xl:w-[500px] lg:h-[318px] xl:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/47xznwNRRuHE6gx1VSbhee/2f9ad09c15c55a4a252239f2e915c459/Calendly-Customer-Success.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>

        {/* recruitingTabPanel tab content. mapping all tab content from data folder. */}
        <TabPanel className="lg:w-10/12 px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {recruitingTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-secondary">{panelContent.para}</p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[400px] xl:w-[500px] lg:h-[318px] xl:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/1kDKK7sXKlgYglms0bWvmh/832a633866ff496a90261876f026d5fd/Calendly-Recruiting-Small.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>

        {/* informationTechnologyTabPanel tab content. mapping all tab content from data folder. */}
        <TabPanel className="lg:w-10/12 px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {informationTechnologyTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-secondary">{panelContent.para}</p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[400px] xl:w-[500px] lg:h-[318px] xl:h-[418px]"
              src="https://images.ctfassets.net/k0lk9kiuza3o/2Vw1fqn2KMdFMULRX84jgx/5149a01af4dc9951f752a972aaa77b6c/Calendly-IT_Small__3_io.png?q=85&fm=webp"
              alt=""
            />
          </div>
        </TabPanel>
        {/* educationTabPanel tab content. mapping all tab content from data folder. */}
        <TabPanel className="lg:w-10/12 px-2 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-16">
            <div>
              {educationTabPanel.map((panelContent, index) => (
                <div key={index} className="mb-8">
                  <h1 className="text-[#0b3558] text-2xl font-semibold tracking-tight">
                    {panelContent.heading}
                  </h1>
                  <p className="text-secondary">{panelContent.para}</p>
                </div>
              ))}
            </div>
            <img
              className="lg:w-[400px] xl:w-[500px] lg:h-[318px] xl:h-[418px]"
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
