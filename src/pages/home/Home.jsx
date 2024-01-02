import BannerVideo from "./home/BannerVideo/BannerVideo";
import Banner from "./home/banner/banner";
import BookingTime from "./home/bookingTime/BookingTime";
import Bookings from "./home/bookings/Bookings";
import Connecting from "./home/connecting/Connecting";
import ContactUs from "./home/contact_us/ContactUs";
import ReactTabs from "./home/reactTabs/ReactTabs";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerVideo />
      <ReactTabs></ReactTabs>
      <Connecting></Connecting>
      <BookingTime></BookingTime>
      <Bookings></Bookings>
      <ContactUs />
    </div>
  );
};

export default Home;
