import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const Workflows = () => {
  const datas = [
    {
      icon: MdMarkEmailRead,
      heading: "Email reminder to invite",
      para: "Reduce no-shows — send automated email reminders to invitees",
    },
    {
      icon: MdMarkEmailRead,
      heading: "Email reminder to host",
      para: "Never miss an event — get automated email reminders",
    },
    {
      icon: MdMarkEmailRead,
      heading: "Send thank you email",
      para: "Build relationships with a quick thanks",
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      heading: "Text reminder to host",
      para: "Never miss an event — set automated text reminders",
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      heading: "Text booking confirmation to host",
      para: "Keep hosts up-to-date with scheduled events",
    },
    {
      icon: MdMarkEmailRead,
      heading: "Email your own feedback survey",
      para: "Email a survey link from a third party like Typeform or Google Forms to get feedback from invitees after your event",
    },
  ];
  return (
    <div>
      <h4 className="heading">Workflows</h4>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="headBox">
          My Calendly <FaAngleDown></FaAngleDown>
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
      <p className="border border-blue-500 py-6 px-2 rounded-md my-5">
        <Link className="text-blue-500 hover:underline">
          Upgrade your subscription
        </Link>{" "}
        to automate your event notifications and reminders with workflows.
      </p>
      <div className="flex justify-start items-center gap-x-5">
        <div className="w-[500px]">
          <h3 className="text-3xl font-semibold font-prompt mt-12 mb-6">Save time with workflows</h3>
          <p>
            Automate all the work you do around events, such as text messages
            when events are booked, email reminders before events, and more. You
            can start with a commonly used workflow or create your own.
          </p>
          <div className="mt-5 flex items-center gap-x-5">
            <button className="btn-dashboard">Upgrade Now</button>
            <button className="text-blue-500 hover:underline">Learn More</button>
          </div>
        </div>
        <img
          src="https://assets.calendly.com/assets/frontend/media/workflows_octobot-055f878d6e0c1e2e1f3d.svg"
        className="rounded-full"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-16">
        {datas.map((data, index) => (
          <div key={index} className="shadow-sm shadow-gray-500 w-[380px] h-[240px] rounded-md p-4 relative">
            <data.icon className="text-5xl text-gray-500 mb-3"></data.icon>
            <h3 className="text-lg font-prompt text-gray-500">{data.heading}</h3>
            <p className="text-lg text-gray-500 my-3">{data.para}</p>
            <button className="bg-blue-500 py-1 px-3 rounded-full text-white font-semibold tracking-tighter absolute right-3 bottom-3">Use Workflow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;
