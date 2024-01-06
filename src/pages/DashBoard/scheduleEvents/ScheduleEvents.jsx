import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaAngleDown,FaDownload,FaAlignRight, FaCaretDown  } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import DateRange from "./DateRange";

const ScheduleEvents = () => {
  const [active, setIsActive] = useState("upcoming");
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="font-prompt text-3xl font-semibold mb-16">Scheduled events</h1>
      <div className="flex justify-between items-center mb-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="flex items-center gap-x-2 bg-gray-50 py-2 px-5 rounded-md font-prompt border border-gray-400 m-1">
            My Calendly  <FaAngleDown></FaAngleDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 mt-1"
          >
            <li>
              <a>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illo veniam voluptas. Praesentium aut dolor dolorem vel! Numquam repellat eveniet tempore. Magnam, quis nihil, nobis suscipit architecto pariatur deserunt asperiores nisi delectus voluptate labore</a>
            </li>
          </ul>
        </div>
        <p className="text-gray-500 tracking-wide">Displaying 0 – 0 of 0 Events</p>
      </div>
      <Tabs className="border border-gray-300 rounded-md pb-5">
        <TabList className="flex justify-between items-center px-5 border-b-2 border-gray-300 h-[55px]">
          <div className="flex justify-center items-center gap-x-5">
          <Tab onClick={() => setIsActive("upcoming")} className={`${active === "upcoming" && "border-b-4 border-blue-600"} react-tabs`}>Upcoming</Tab>
          <Tab onClick={() => setIsActive('pending')} className={`${active === "pending" && "border-b-4 border-blue-600"} react-tabs`}>Pending</Tab>
          <Tab onClick={() => setIsActive('past')} className={`${active === 'past' && "border-b-4 border-blue-600"} react-tabs`}>Past</Tab>
          <div className="relative">
          <button onClick={() => setOpen(!open)} className={`react-tabs flex justify-center items-center gap-x-2`}>Date Range <FaCaretDown  className={`transition-all duration-100 ${open ? "rotate-180" : "rotate-0"}`}></FaCaretDown> </button>
          <div className={`${open ? "absolute top-[42px]" : "hidden"}`}><DateRange></DateRange></div>
          </div>
          
          
          {/* <DateRange></DateRange> */}
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <button className="flex justify-center items-center gap-x-2 border border-black  py-1 px-3 rounded-full"><FaDownload></FaDownload> Export</button>
            <button className="flex justify-center items-center gap-x-2 border border-black  py-1 px-3 rounded-full"><FaAlignRight></FaAlignRight> Filter <FaAngleDown></FaAngleDown></button>
          </div>
        </TabList>

        <TabPanel className="flex flex-col justify-center items-center gap-y-3">
          <img src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg" alt="" />
          <h4 className="text-2xl font-prompt text-gray-500">No Events Yet</h4>
          <p>Share Event Type links to schedule events.</p>
          <Link to="/dashboard/create-event" className="bg-blue-600 text-white px-5 py-1 font-semibold rounded-full cursor-pointer">View Events Type</Link>
        </TabPanel>
        <TabPanel className="flex flex-col justify-center items-center gap-y-3">
          <img src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg" alt="" />
          <h4 className="text-2xl font-prompt text-gray-500">No Pending Events</h4>
          
        </TabPanel>
        <TabPanel className="flex flex-col justify-center items-center gap-y-3">
          <img src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg" alt="" />
          <h4 className="text-2xl font-prompt text-gray-500">No Past Events</h4>
        </TabPanel>        
      </Tabs>
    </div>
  );
};

export default ScheduleEvents;
