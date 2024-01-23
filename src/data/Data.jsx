import {
  FaMailBulk,
  FaUserFriends,
  FaRocketchat,
  FaLink,
  FaCalendarAlt,
  FaRegClock,
  FaQuestion,
  FaHeadset,
  FaRegUser,
} from "react-icons/fa";
export const servicesData = [
  {
    img: <FaUserFriends />,
    title: "Automatic Confirmations",
    discriptions:
      "Enable instant email confirmations with all booking details, for staff and customers.",
  },
  {
    img: <FaMailBulk />,
    title: "Email Reminders",
    discriptions:
      "Automate booking updates and reminders, straight to your customers’ inboxes.",
  },
  {
    img: <FaRocketchat />,
    title: "Text Reminders",
    discriptions:
      "No more no-shows: Fire out customized SMS reminders for upcoming bookings.",
  },
];
export const event = [
  {
    img: "https://assets.calendly.com/assets/frontend/media/one_on_one-c0ed81ea039b15906953.svg",
    link: "/dashboard/one-by-one",
    linkTitle: "One-on-One",
    title: "One-on-One",
    titleTwo: "One host with one invitee",
    discriptions: "Good for: coffee chats, 1:1 interviews, etc.",
  },
  {
    img: "https://assets.calendly.com/assets/frontend/media/group-eaa808c3bb66b614c714.svg",
    link: "/dashboard/one-by-one",
    linkTitle: "One-on-One",
    title: "Group",
    titleTwo: "One host with group of invitees",
    discriptions: "Good for: webinars, online classes, etc.",
  },
  {
    img: "https://assets.calendly.com/assets/frontend/media/collective-dff7740f53ebd8dd98cc.svg",
    link: "/dashboard/one-by-one",
    linkTitle: "One-on-One",
    title: "Collective",
    titleTwo: "More than one host with one invitee",
    discriptions: "Good for: panel interviews, group sales calls, etc",
  },
  {
    img: "https://assets.calendly.com/assets/frontend/media/round_robin-02aa170a63b896ec56e3.svg",
    link: "/one-by-one",
    linkTitle: "One-on-One",
    title: "Round Robin",
    titleTwo: "One rotating host with one invitee",
    discriptions: "Good for: distributing incoming sales leads",
  },
];

export const userDashBoardNavData = [
  {
    icon: <FaLink />,
    name: "Event types",
    to: "/dashboard/create-event",
  },
  {
    icon: <FaCalendarAlt />,
    name: "Scheduled events",
    to: "/dashboard/schedule-event",
  },
  {
    icon: <FaRegClock />,
    name: "Availability",
    to: "/dashboard/schedule-event",
  },
  {
    icon: <FaQuestion />,
    name: " Help",
    to: "/dashboard/schedule-event",
  },
  {
    icon: <FaHeadset />,
    name: " contact us",
    to: "/dashboard/schedule-event",
  },
];
export const adminDashBoardNavData = [
  {
    icon: <FaRegUser />,
    name: "All User",
    to: "/dashboard/all-user",
  },
  {
    icon: <FaCalendarAlt />,
    name: "All events",
    to: "/dashboard/all-events",
  },
];

export const cards = [
  {
    id: 1,
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
    button: "Start Pro",
  },
  {
    id: 2,
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
    button: "Start Team",
  },
  {
    id: 3,
    heading: "Enterprise",
    para: "Infinite users",
    rate: 48,
    description: [
      "Unlimited appointments",
      "Accept payments",
      "Your custom Booking Page",
      "iOS and Android apps",
      "Customized notifications",
      "Email reminders",
      "Integrate with your favorite apps",
    ],
    button: "Enterprise",
  },
];
