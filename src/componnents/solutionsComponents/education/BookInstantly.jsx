import EasyScheduleSecondPart from "../../../pages/solutions/solutions/EasyScheduleSecondPart";

const BookInstantly = () => {
  return (
    <div>
      {/* send data as a props to handle make the solution page reusable */}
      <EasyScheduleSecondPart
        title="BOOK INSTANTLY"
        span="in just a few clicks "
        heading="Schedule student meetings  "
        para="Make it easy and fast for students to book advising hours while ensuring that educators and faculty can maintain control of their schedules."
        link="Set your availability"
        img="https://images.ctfassets.net/k0lk9kiuza3o/7e7hoySQhofK5HyHarOBfq/ffcd12ec68cccb71232fe46e784a846b/Calendly-education-scheduling.png?q=85&fm=webp"
      ></EasyScheduleSecondPart>
    </div>
  );
};

export default BookInstantly;
