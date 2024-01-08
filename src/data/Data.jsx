import { FaMailBulk, FaUserFriends, FaRocketchat } from "react-icons/fa";
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
