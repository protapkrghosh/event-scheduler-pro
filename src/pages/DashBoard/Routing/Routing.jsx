import { Link } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <h3 className="heading">Routing</h3>
      <div className="flex justify-center gap-10">
        <div>
          <h3 className="font-prompt text-3xl font-semibold mb-5">
            Qualify, route, and schedule meetings instantly
          </h3>
          <p className="mb-5">
            Gather information from website visitors and direct them to a
            specific booking page based on their responses. Learn more in our{" "}
            <Link className="text-blue-500 hover:underline">Help Center</Link>.
          </p>
          <ul className="list-decimal pl-6">
            <li>
              Create or import a <span className="font-prompt font-semibold">form</span> to set up questions
            </li>
            <li>
              Set up <span className="font-prompt font-semibold">logic</span> to send invitees to a booking page and
              more
            </li>
          </ul>

          <p className="my-3">
            <span className="bg-[#0069FF] px-2 py-1 text-white font-semibold rounded-sm text-[12px]">NEW</span> Level up your forms
          </p>
          <ul className="list-disc pl-6">
            <li><span  className="font-prompt font-semibold">Salesforce routing</span> is available on the Enterprise plan</li>
            <li>
              <span  className="font-prompt font-semibold">Third-party forms</span> (Marketo, HubSpot & Pardot) are available on
              Teams and Enterprise plans
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-x-5">
            <button className="btn-dashboard">Upgrade Now</button>
            <button className="text-blue-500 hover:underline">Learn More</button>
          </div>
        </div>
        <img
          src="https://assets.calendly.com/assets/frontend/media/illustration_en-5aeae2435975a4e58ccb.svg"
          className="w-[600px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Routing;
