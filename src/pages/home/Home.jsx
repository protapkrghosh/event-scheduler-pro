import BannerVideo from "./home/BannerVideo/BannerVideo";
import Banner from "./home/banner/banner";
import Bookings from "./home/bookings/Bookings";
import ContactUs from "./home/contact_us/ContactUs";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <BannerVideo />
      <ContactUs />
      <Bookings></Bookings>
    </div>
  );
};

export default Home;
