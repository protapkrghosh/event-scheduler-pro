import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {
  FaAngleDown,
  FaDownload,
  FaAlignRight,
  FaCaretDown,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DateRange from "./DateRange";
import UpcomingTableContent from "./UpcomingTableContent";
import { isBefore, addDays, parse, isSameDay, isAfter } from "date-fns";
import PendingTableContent from "./PendingTableContent";
import PastTableContent from "./PastTableContent";
import useContexts from "../../../hooks/useContexts";

const ScheduleEvents = () => {
  const { user } = useContexts();
  const [active, setIsActive] = useState("pending");
  const [open, setOpen] = useState(false);
  const [meetings, setMeetings] = useState([]);
  const [pastMeetings, setPastMeetings] = useState([]);
  const [nextDayMeetings, setNextDayMeetings] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // get data
  useEffect(() => {
    fetch(
      `https://lets-sheduleit-backend.vercel.app/api/v1/events/get-event?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        const parsedMeetings = data.map((meeting) => ({
          ...meeting,
          dateAndTime: meeting?.dateAndTime,
        }));
        setMeetings(parsedMeetings);
      });
  }, [user?.email]);

  useEffect(() => {
    console.log("startDate:", startDate);
    console.log("endDate:", endDate);
    console.log("meetings:", meetings);

    if (startDate && endDate) {
      // If both startDate and endDate are selected, filter meetings within the date range
      const filteredMeetings = meetings.filter((meeting) => {
        const [, datePart] = meeting?.dateAndTime?.split(",") || [];
        if (datePart) {
          const formattedDate = datePart.trim();
          const meetingDate = parse(formattedDate, "dd/MM/yyyy", new Date());
          return (
            isAfter(meetingDate, startDate) && isBefore(meetingDate, endDate)
          );
        }
        return false;
      });

      console.log("filteredMeetings:", filteredMeetings);
      const pastMeetings = filteredMeetings.filter((meeting) => {
        const meetingDate = parse(
          meeting?.dateAndTime?.split(",")[1]?.trim(),
          "dd/MM/yyyy",
          new Date()
        );
        return isBefore(meetingDate, new Date());
      });

      const nextDayMeetings = filteredMeetings.filter((meeting) => {
        const meetingDate = parse(
          meeting?.dateAndTime?.split(",")[1]?.trim(),
          "dd/MM/yyyy",
          new Date()
        );
        const tomorrow = addDays(new Date(), 1);
        return isSameDay(meetingDate, tomorrow);
      });

      setPastMeetings(pastMeetings);
      setNextDayMeetings(nextDayMeetings);
    } else {
      getTomorrowsMeetings();
      getPastMeetings();
    }
  }, [startDate, endDate, meetings]);

  // handle handleUpcomingTabOpen open
  const handleUpcomingTabOpen = () => {
    setOpen(false);
    setIsActive("upcoming");
    getTomorrowsMeetings();
  };

  //handle pending tab open
  const handlePendingTabOpen = () => {
    setOpen(false);
    setIsActive("pending");
  };

  // handle past tab open
  const handlePastTabOpen = () => {
    setOpen(false);
    getPastMeetings();
    setIsActive("past");
  };
  // handle date range tab open
  const handleDateRangeTabOpen = () => {
    setOpen(!open);
    setIsActive("date");
  };

  // get past meetings
  const getPastMeetings = () => {
    const today = new Date();
    const pastMeetings = meetings.filter((meeting) => {
      // Use optional chaining to safely access dateAndTime
      const [, datePart] = meeting?.dateAndTime?.split(",") || [];

      if (datePart) {
        const formattedDate = datePart.trim();
        const meetingDate = parse(formattedDate, "dd/MM/yyyy", new Date());
        return isBefore(meetingDate, today);
      }

      return false;
    });
    setPastMeetings(pastMeetings);
  };

  // get the next day meetings
  const getTomorrowsMeetings = () => {
    const tomorrow = addDays(new Date(), 1);
    const tomorrowsMeetings = meetings.filter((meeting) => {
      const [, datePart] = meeting?.dateAndTime?.split(",") || [];
      if (datePart) {
        const formattedDate = datePart.trim();
        const meetingDate = parse(formattedDate, "dd/MM/yyyy", new Date());
        return isSameDay(meetingDate, tomorrow);
      }
      return false;
    });
    setNextDayMeetings(tomorrowsMeetings);
  };

  return (
    <div>
      <h1 className="font-prompt text-3xl font-semibold mb-16">
        Scheduled events
      </h1>
      
        <div className="dropdown mb-5">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-x-2 bg-gray-50 py-2 px-5 rounded-md font-prompt border border-gray-400 m-1"
          >
            my schedule <FaAngleDown></FaAngleDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64 mt-1"
          >
            <li>
              <a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                illo veniam voluptas. Praesentium aut dolor dolorem vel! Numquam
                repellat eveniet tempore. Magnam, quis nihil, nobis suscipit
                architecto pariatur deserunt asperiores nisi delectus voluptate
                labore
              </a>
            </li>
          </ul>
        
      </div>
      <Tabs className="border border-gray-300 rounded-md pb-5">
        <TabList className="flex justify-between items-center px-5 border-b-2 border-gray-300 h-[55px]">
          <div className="flex justify-center items-center gap-x-5">
            <Tab
              onClick={handleUpcomingTabOpen}
              className={`${
                active === "upcoming" && "border-b-4 border-blue-600"
              } react-tabs`}
            >
              Upcoming
            </Tab>
            <Tab
              onClick={handlePendingTabOpen}
              className={`${
                active === "pending" && "border-b-4 border-blue-600"
              } react-tabs`}
            >
              Pending
            </Tab>
            <Tab
              onClick={handlePastTabOpen}
              className={`${
                active === "past" && "border-b-4 border-blue-600"
              } react-tabs`}
            >
              Past
            </Tab>
            <div className="relative">
              <button
                onClick={handleDateRangeTabOpen}
                className={`${
                  open && "border-b-4 border-blue-600"
                } react-tabs flex justify-center items-center gap-x-2`}
              >
                Date Range{" "}
                <FaCaretDown
                  className={`transition-all duration-100 ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                ></FaCaretDown>{" "}
              </button>
              <div
                className={`${open ? "absolute top-[42px] z-10" : "hidden"}`}
              >
                <DateRange
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  startDate={startDate}
                  endDate={endDate}
                ></DateRange>
              </div>
            </div>

          </div>
          {/* <div className="flex justify-center items-center gap-x-4">
            <button className="hidden lg:flex justify-center items-center gap-x-2 border border-black  py-1 px-3 rounded-full">
              <FaDownload></FaDownload> Export
            </button>
            <button className="hidden lg:flex justify-center items-center gap-x-2 border border-black  py-1 px-3 rounded-full">
              <FaAlignRight></FaAlignRight> Filter <FaAngleDown></FaAngleDown>
            </button>
          </div> */}
        </TabList>

        <TabPanel>
          {nextDayMeetings && nextDayMeetings ? (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name And Meet</th>
                    <th>Date And Time</th>
                    <th>Event Types</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {nextDayMeetings.map((nextDayMeeting, index) => (
                    <UpcomingTableContent
                      key={index}
                      nextDayMeeting={nextDayMeeting}
                    ></UpcomingTableContent>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-y-3">
              <img
                src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg"
                alt=""
              />
              <h4 className="text-2xl font-prompt text-gray-500">
                No Events Yet
              </h4>
              <p>Share Event Type links to schedule events.</p>
              <Link
                to="/dashboard/create-event"
                className="bg-blue-600 text-white px-5 py-1 font-semibold rounded-full cursor-pointer"
              >
                View Events Type
              </Link>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {meetings ? (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name And Meet</th>
                    <th>Event Name</th>
                    <th>Event Types</th>
                    <th>Duration</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {meetings &&
                  meetings.map((meeting, index) => (
                    <tbody key={index}>
                      {!meeting.dateAndTime && (
                        <PendingTableContent
                          pendingMeeting={meeting}
                        ></PendingTableContent>
                      )}
                    </tbody>
                  ))}
              </table>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-y-3">
              <img
                src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg"
                alt=""
              />
              <h4 className="text-2xl font-prompt text-gray-500">
                No Pending Events
              </h4>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {pastMeetings && pastMeetings ? (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name And Meet</th>
                    <th>Date And Time</th>
                    <th>Event Types</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pastMeetings.map((pastMeeting, index) => (
                    <PastTableContent
                      key={index}
                      pastMeeting={pastMeeting}
                    ></PastTableContent>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-y-3">
              <img
                src="https://assets.calendly.com/assets/frontend/media/no-events-2ed89b6c6379caebda4e.svg"
                alt=""
              />
              <h4 className="text-2xl font-prompt text-gray-500">
                No Past Events
              </h4>
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ScheduleEvents;
