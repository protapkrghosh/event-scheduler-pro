import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ScheduleEvents = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h1>Scheduled events</h1>
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <p>Displaying 0 – 0 of 0 Events</p>
      </div>
      <Tabs>
        <TabList>
          <div>
          <Tab>Upcoming</Tab>
          <Tab>Pending</Tab>
          <Tab>Past</Tab>
          <button>Date Range</button>
          </div>
          <div>
            <button>Export</button>
            <button>Filter</button>
          </div>
        </TabList>

        <TabPanel>
          <img src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg" alt="" />
          <h4>No Events Yet</h4>
          <p>Share Event Type links to schedule events.</p>
          <button>View Events Type</button>
        </TabPanel>
        <TabPanel>
          <img src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg" alt="" />
          <h4>No Pending Events</h4>
        </TabPanel>
        <TabPanel>
          <img src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg" alt="" />
          <h4>No Past Events</h4>
        </TabPanel>        
      </Tabs>
    </div>
  );
};

export default ScheduleEvents;
