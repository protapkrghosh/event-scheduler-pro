import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const IntegrationsAndApps = () => {
  const apps = [
    {
      icon: "https://assets.calendly.com/assets/frontend/media/console-56d94e384fad7b090d01.svg",
      heading: "API and webhooks",
      para: "Build custom integrations with Calendly data.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/android-7b8ea513c8b5c9457bcd.svg",
      heading: "Calendly Android app",
      para: "Access meetings and availability on the go.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/chrome-0dd0c283878400e43c08.svg",
      heading: "Calendly for Chrome",
      para: "Access and share availability on any web page.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/microsoft-edge-bc393cb394ec6bbb4d75.svg",
      heading: "Calendly for Edge",
      para: "Access and share availability on any web page.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/firefox-c5d4b833885dd70fcdfb.svg",
      heading: "Calendly for Firefox",
      para: "Access and share availability on any web page.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/intercom-453d6e4006c850be6ea5.svg",
      heading: "Calendly for Intercom",
      para: "Embed your booking page in Intercom chat.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/outlook_extension-3dcb55a85151d4783bf9.svg",
      heading: "Calendly for Outlook",
      para: "Access and share availability from your Outlook inbox.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/apple-0a3d6968721c9ccea820.svg",
      heading: "Calendly iPhone app",
      para: "Access meetings and share availability on the go.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/duo-442d304b9f83ad286624.svg",
      heading: "Duo",
      para: "Enforce single sign-on for your users' Calendly accounts.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/microsoft-exchange-da0af9f64aa242ee36de.svg",
      heading: "Exchange Calendar",
      para: "Add events to your calendar and prevent double-booking.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/gmail-d35ec868f510eb930574.svg",
      heading: "Gmail for Workflows",
      para: "Send automated emails from your Gmail account.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/gong-ff563b4fdc2cc02d8001.svg",
      heading: "Gong",
      para: "Access and share your availability in Gong.",
    },
    // first para end
    {
      icon: "https://assets.calendly.com/assets/frontend/media/google-analytics-cce6ed536a49224ffc0a.svg",
      heading: "Google Analytics",
      para: "Track engagement with your booking pages.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/google-calendar-9d502e45f709b07b91a1.svg",
      heading: "Google Calendar",
      para: "Add events to your calendar and prevent double-booking.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/google-meet-74ebbfcacec52008a972.svg",
      heading: "Google Meet",
      para: "Include Google Meet details in your Calendly events.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/go-to-meeting-a7a16d8ae03a6e21d8fd.svg",
      heading: "GoTo Meeting",
      para: "Include GoTo Meeting details in your Calendly events.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/hubspot-947b620ac8ce8d1c8fb4.svg",
      heading: "HubSpot",
      para: "Create and update contacts as meetings are scheduled. Book meetings directly from HubSpot forms.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/icloud-c7eb991263acd6ff682c.svg",
      heading: "iCloud Calendar",
      para: "Add events to your calendar and prevent double-booking.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/linkedin-b4b18ab275a4b6bc143d.svg",
      heading: "LinkedIn Messaging",
      para: "Access and share your availability in LinkedIn.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/mailchimp-0b6601fe96028880520a.svg",
      heading: "Mailchimp",
      para: "Create and update contacts as meetings are scheduled.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/marketo-5c2970cb5941e26bb17a.svg",
      heading: "Marketo",
      para: "Use form responses to qualify and route your leads to the right booking pages and update records as meetings are scheduled.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/facebook-2d1598c5ebcd6885fe59.svg",
      heading: "Meta Pixel",
      para: "Track engagement with your booking pages.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/microsoft-azure-11ff8bb118bb90ad1c2d.svg",
      heading: "Microsoft Azure",
      para: "Provision users and enforce single sign-on for their Calendly accounts.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/microsoft_dynamics-b5b0df8cf1856bb7640f.svg",
      heading: "Microsoft Dynamics 365",
      para: "Create and update records as meetings are scheduled.",
    },
    // second para end
    {
      icon: "https://assets.calendly.com/assets/frontend/media/microsoft-teams-8af8226c210af918aba2.svg",
      heading: "Microsoft Teams",
      para: "      Include Teams conferencing details in your Calendly events.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/okta-f9353aede88d6a2aa035.svg",
      heading: "Okta",
      para: "      Provision users and enforce single sign-on for their Calendly accounts.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/one-login-7cc5444e804fe93f89af.svg",
      heading: "OneLogint",
      para: "      Provision users and enforce single sign-on for their Calendly accounts.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/microsoft-office-24d37bc320a68e6d4cd5.svg",
      heading: "Outlook Calendar",
      para: "      Add events to your calendar and prevent double-booking.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/outlook-d226707be5525615a568.svg",
      heading: "Outlook for Workflows",
      para: "      Send automated emails from your Outlook account.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/salesforce-pardot-09dabde1d4b36f63611c.svg",
      heading: "Pardot",
      para: "      Use form responses to qualify and route your leads to the right booking pages.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/pay-pal-23e8d5edeb8ce0250bf8.svg",
      heading: "PayPal",
      para: "      Collect payment before the meeting.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/ping-identity-00d6fdf61a492ae6174c.svg",
      heading: "Ping Identity",
      para: "      Enforce single sign-on for your users' Calendly accounts.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/outlook-d226707be5525615a568.svg",
      heading: "Power Automate",
      para: "      Create no-code automations with the tools you use.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/salesforce-ace11f773162ac4a253f.svg",
      heading: "Salesforce",
      para: "      Create and update records as meetings are scheduled. Plus, route meetings via real time Salesforce lookup.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/sso-d987d680603ac9f940c9.svg",
      heading: "Single sign-on",
      para: "      Provision users and enforce single sign-on for their Calendly accounts.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/slack-4cc01e8ecd1ab0101193.svg",
      heading: "Slack",
      para: "      Access and share your Calendly links in Slack.",
    },
    // second para end
    {
      icon: "https://assets.calendly.com/assets/frontend/media/squarespace-d6a1882f345df63fe334.svg",
      heading: "Squarespace",
      para: "Embed your booking page on your website.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/stripe-4b6a6cc4ce4b269bbe04.svg",
      heading: "Stripe",
      para: "Collect payment before the meeting.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/webex-53fbd765bf7edce401c6.svg",
      heading: "Webex",
      para: "      Include Webex details in your Calendly events.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/wix-7215bbd1c9b90290982c.svg",
      heading: "Wix",
      para: "       Embed your booking page on your website.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/wordpress-fb1f85dd39eaaba5b121.svg",
      heading: "WordPress",
      para: "Embed your booking page on your website.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/zapier-8f2c6ea3f4959dfe801c.svg",
      heading: "Zapier",
      para: "Create no-code automations with the tools you use.",
    },
    {
      icon: "https://assets.calendly.com/assets/frontend/media/zoom-a3c8dad71d431ffc18f2.svg",
      heading: "Zoom",
      para: "Include Zoom details in your Calendly events.",
    },
    // second para end
  ];
  return (
    <div>
      <h3 className="heading">Integrations & apps</h3>
      <div className="shadow-md shadow-gray-300 rounded-md">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex justify-around items-center gap-x-10 bg-blue-50">
              <img
                className="w-[438px] h-[247px]"
                src="https://assets.calendly.com/assets/frontend/media/gong_routing_graphic-d46097597978242896b1.svg"
                alt=""
              />
              <div className="w-[455px]">
                <h5 className="font-prompt tracking-wider">
                  FEATURED INTEGRATION
                </h5>
                <p className="text-2xl font-bold font-cursive my-3">
                  Quick, easy scheduling in Gong for better lead conversion
                </p>
                <button className="bg-blue-500 py-1 px-3 rounded-full text-white font-semibold tracking-tighter">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-around items-center gap-x-10 bg-blue-50">
              <img
                className="w-[438px] h-[247px]"
                src="https://assets.calendly.com/assets/frontend/media/hubspot_routing_graphic-e4c921cb2f6c13a590b7.svg"
                alt=""
              />
              <div className="w-[455px]">
                <h5 className="font-prompt tracking-wider">
                  FEATURED INTEGRATION
                </h5>
                <p className="text-2xl font-bold font-cursive my-3">
                  Increase HubSpot form conversion with instant, qualified
                  booking
                </p>
                <button className="bg-blue-500 py-1 px-3 rounded-full text-white font-semibold tracking-tighter">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-around items-center gap-x-10 bg-blue-50">
              <img
                className="w-[438px] h-[247px]"
                src="https://assets.calendly.com/assets/frontend/media/sfdc_routing_graphic-b92742ea2df4ac44456e.svg"
                alt=""
              />
              <div className="w-[455px]">
                <h5 className="font-prompt tracking-wider">
                  FEATURED INTEGRATION
                </h5>
                <p className="text-2xl font-bold font-cursive my-3">
                  Route leads to the right team member via real-time Salesforce
                  lookup
                </p>
                <button className="bg-blue-500 py-1 px-3 rounded-full text-white font-semibold tracking-tighter">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-around items-center gap-x-10 bg-blue-50">
              <img
                className="w-[438px] h-[247px]"
                src="https://assets.calendly.com/assets/frontend/media/marketo_routing_graphic-9b7e9276d36957744ad9.svg"
                alt=""
              />
              <div className="w-[455px]">
                <h5 className="font-prompt tracking-wider">
                  FEATURED INTEGRATION
                </h5>
                <p className="text-2xl font-bold font-cursive my-3">
                  Boost Marketo form conversion with instant, qualified booking
                </p>
                <button className="bg-blue-500 py-1 px-3 rounded-full text-white font-semibold tracking-tighter">
                  Get Started
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-between gap-5 p-4">
          <h3 className="font-prompt mb-2 text-xl">All Integrations</h3>
          <div className="grid grid-cols-4 gap-8 justify-items-center">
            {apps.map((app, index) => (
              <div
                key={index}
                className="w-[206px] h-[202px] shadow-md shadow-gray-300 pl-4 pt-4 pr-1"
              >
                <img src={app.icon} className="w-[48px] h-[50px]" alt="" />
                <h5 className="font-prompt my-1 text-[14px]">{app.heading}</h5>
                <p className="text-[14px] text-gray-500">{app.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsAndApps;
