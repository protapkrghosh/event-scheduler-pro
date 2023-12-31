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
    <div className=" bg-[#EDF0F2] py-5">
      <div className="w-[60%] mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center tracking-wide">
          Bookings, simplified.
        </h1>
        <p className="text-center text-lg mb-24">
          Stay in the loop with your whole team’s calendars. A free appointment{" "}
          <br />
          scheduling app gives your business the freedom to grow.
        </p>
        <div className="flex justify-center items-center gap-x-2 font-semibold">
          <p>Monthly billing</p>
          {/* toggle start*/}

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>

          {/* toggle end */}
          <p>Annual billing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        {cards.map((card) => (
          <div
            key={card.heading}
            className="bg-white py-6 px-10 rounded-lg w-[340px]"
          >
            <h4 className="text-4xl font-bold mb-2">{card.heading}</h4>
            <p>{card.para}</p>
            <div className="flex gap-x-2 mt-2">
              <h4 className="text-4xl font-bold">${card.rate}</h4>
              <p>user / month</p>
            </div>
            <button className="w-full text-[#066DD3] border border-[#066DD3] rounded-md text-center my-5 py-3">
              Start Free
            </button>
            <p className="bg-[#EEFCF6] rounded-full text-center py-1 mb-5">
              24/7 HUMAN SUPPORT
            </p>
            <div>
              {card.description.map((descriptionText) => (
                <div
                  className="flex items-center gap-x-3"
                  key={descriptionText}
                >
                  <TiTick></TiTick>
                  <p className="text-black">{descriptionText}</p>{" "}
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
