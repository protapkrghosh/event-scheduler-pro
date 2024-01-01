import BannerVideo from "./home/BannerVideo/BannerVideo";
import Banner from "./home/banner/banner";
import BookingTime from "./home/bookingTime/BookingTime";
import Bookings from "./home/bookings/Bookings";
import Connecting from "./home/connecting/Connecting";
import ContactUs from "./home/contact_us/ContactUs";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <BannerVideo />
      <Connecting></Connecting>
      <BookingTime></BookingTime>
      <Bookings></Bookings>
      <ContactUs />
    </div>
  );
};

export default Home;
