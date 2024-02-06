import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import { connectings } from "../../../../data/Data";
const Connecting = () => {

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
        {/* maps the all datas from data folder */}
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
