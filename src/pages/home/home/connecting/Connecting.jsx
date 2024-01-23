import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
const Connecting = () => {
  const connectings = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      heading: "Salesforce",
      para: "Collect debit or credit card payments on booking.",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1618575477781807105/iDuRlqTe_400x400.jpg",
      heading: "Stripe",
      para: "Collect debit or credit card payments on booking.",
    },
    {
      img: "https://fonts.gstatic.com/s/i/productlogos/calendar_2020q4/v13/192px.svg",
      heading: "Google Calendar",
      para: "Sync calendar events between Google and Setmore",
    },
    {
      img: "data:image/jpeg;base64,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",
      heading: "Zoom",
      para: "Host 1:1 consultations and group classes online, from anywhere.",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Squier_guitars_logo.png/1200px-Squier_guitars_logo.png",
      heading: "Square",
      para: "Get paid for your services with Square, Cash App and more.",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
      heading: "Instagram",
      para: "Encourage new bookings by streaming posts to your Booking Page.",
    },
    {
      img: "https://www.facebook.com/images/fb_icon_325x325.png",
      heading: "Facebook",
      para: "Get booked directly from your Facebook business profile.",
    },
    {
      img: "https://pbs.twimg.com/profile_images/1618575477781807105/iDuRlqTe_400x400.jpg",
      heading: "Stripe",
      para: "Collect debit or credit card payments on booking",
    },
  ];
  return (
    <div className="bg-[#EDF0F2] py-16 px-5 my-10">
      <h1 className="text-center text-primary mb-8">
        It’s all about <span className="text-[#0069ff]">connecting</span> 🤝
      </h1>
      <p className="text-center text-secondary mb-8 hidden lg:block">
        Integrate your free appointment scheduler with your website, <br />{" "}
        social media, sales CRM, and a range of the world’s most popular apps.{" "}
      </p>
      <p className="text-center mb-8 lg:hidden">
        Integrate your free appointment scheduler with your website, social
        media, sales CRM, and a range of the world’s most popular apps.
      </p>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
          1537: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 2000,
        }}
        initialSlide={0}
        className="mySwiper"
      >
        {connectings.map((connecting) => (
          <SwiperSlide key={connecting.img}>
            <div className="">
              <div className="lg:w-[300px] lg:h-[120px] xl:w-[350px] mx-auto lg:mx-0 bg-white py-6 px-8 rounded-lg">
                <div className="flex gap-x-3">
                  <img
                    className="w-8 h-8 rounded-lg mt-1"
                    src={connecting.img}
                    alt=""
                  />
                  <div>
                    <h5 className="text-xl tracking-tighter text-gray-600 font-semibold mb-1">
                      {connecting.heading}
                    </h5>
                    <p className="text-sm text-gray-500">{connecting.para}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Connecting;
