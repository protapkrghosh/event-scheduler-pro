import { TiTick } from "react-icons/ti";
import { HiArrowLongRight } from "react-icons/hi2";

const Bookings = () => {
  const cards = [
    {
      heading: "Free",
      para: "Up to 4 users",
      rate: 0,
      description: [
        "Unlimited appointments",
        "Accept payments",
        "Your custom Booking Page",
        "iOS and Android apps",
        "Customized notifications",
        "Email reminders",
        "Integrate with your favorite apps",
      ],
    },
    {
      heading: "Pro",
      para: "1 - 2 users",
      rate: 5,
      description: [
        "Unlimited appointments",
        "Accept payments",
        "Your custom Booking Page",
        "iOS and Android apps",
        "Customized notifications",
        "Email reminders",
        "Integrate with your favorite apps",
      ],
    },
    {
      heading: "Team",
      para: "Infinite users",
      rate: 12,
      description: [
        "Unlimited appointments",
        "Accept payments",
        "Your custom Booking Page",
        "iOS and Android apps",
        "Customized notifications",
        "Email reminders",
        "Integrate with your favorite apps",
      ],
    },
  ];
  return (
    <div className=" bg-[#EDF0F2] px-1 lg:px-0 py-16">
      <div className="lg:w-[60%] mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-8 text-center tracking-wide">
          Bookings <span className="text-[#096CD0] text-4xl lg:text-6xl -ml-3">,</span> simplified <span className="text-[#096CD0] text-4xl lg:text-6xl -ml-3">.</span>
        </h1>
        <p className="text-center text-lg mb-16 hidden lg:block">
          Stay in the loop with your whole team’s calendars. A free appointment{" "}
          <br />
          scheduling app gives your business the freedom to grow.
        </p>
        <p className="text-center text-lg mb-8 lg:hidden">
          Stay in the loop with your whole team’s calendars. A free appointment
          scheduling app gives your business the freedom to grow.
        </p>
        <div className="flex justify-center items-center gap-x-2 font-semibold mb-4 lg:mb-8">
          <p>Monthly billing</p>
          {/* toggle start*/}

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-[#1E90F5] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1E90F5]"></div>
          </label>

          {/* toggle end */}
          <p>Annual billing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-5 place-items-center">
        {cards.map((card) => (
          <div
            key={card.heading}
            className="bg-white py-6 px-10 rounded-lg w-[340px]"
          >
            <h4 className="text-4xl font-bold mb-2">{card.heading}</h4>
            <p className="tracking-tighter text-gray-500">{card.para}</p>
            <div className="flex mt-2">
              <h4 className="text-4xl font-bold">${card.rate}</h4>
              <p className=" text-gray-500">user / month</p>
            </div>
            <button className="w-full text-[#066DD3] border border-[#066DD3] rounded-md text-center my-5 py-3 hover:bg-[#096CD0] hover:text-white transition-colors duration-200">
              Start Free
            </button>
            <p className="bg-[#EEFCF6] rounded-full text-center py-1 mb-5 text-[12px] font-semibold">
              24/7 HUMAN SUPPORT
            </p>
            <div>
              {card.description.map((descriptionText) => (
                <div
                  className="flex items-center gap-x-3"
                  key={descriptionText}
                >
                  <TiTick></TiTick>
                  <p className="text-gray-500">{descriptionText}</p>{" "}
                </div>
              ))}
            </div>
            <span className="flex items-center gap-x-3 mt-8 text-[#066DD3]">
              <HiArrowLongRight></HiArrowLongRight> Learn More
            </span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
