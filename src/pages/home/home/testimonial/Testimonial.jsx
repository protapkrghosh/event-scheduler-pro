import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import { swiperContents } from "../../../../data/Data";

const Testimonial = () => {
  return (
    <div className="my-12">
      <h1 className="text-center  text-primary font-cursive my-14">
        People <span className="text-red-500">❤</span>{" "}
        <span className="text-[#0069ff]">Let's schedule</span>
      </h1>

      <div className="lg:w-11/12 xl:w-9/12 px-5 lg:px-0 lg:flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 justify-center items-center lg:gap-x-20 xl:gap-x-5 2xl:gap-x-40 mx-auto">
        <div className="lg:w-[400px] mb-10">
          <h1 className="text-2xl text-center mb-2">Excellent</h1>
          <div className="flex justify-center items-center gap-x-1 my-2">
            <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>

            <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>

            <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>

            <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>

            <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>
          </div>
          <p className="text-center text-gray-500 tracking-tighter">
            Based on <span className="underline">2,119 reviews</span>
          </p>
          <div className="flex justify-center items-center">
            <FaStar className="text-xl w-10 h-10 p-1 text-green-500"></FaStar>
            <p className="text-xl font-cursive uppercase">TrustPilot</p>
          </div>
        </div>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
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
          {swiperContents.map((swiperContent, index) => (
            <SwiperSlide key={index}>
              <div className="w-[350px] md:w-[300px] xl:w-[280px] mx-auto lg:mx-0">
                <div className="flex items-center gap-x-1 mb-2">
                  <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>
                  <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>
                  <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>
                  <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>
                  <FaStar className="text-xl w-6 h-6 p-1 bg-green-500 text-white"></FaStar>
                  {swiperContent.verified && (
                    <div className="flex items-center gap-x-1">
                      <TiTick className="bg-black text-white w-4 h-4 rounded-full"></TiTick>{" "}
                      Verified
                    </div>
                  )}
                </div>
                <h1 className="font-cursive ">{swiperContent.heading}</h1>
                <p className="text-gray-500">{swiperContent.para}</p>
                <p>
                  <span className="font-cursive">Date of Experience:</span>{" "}
                  {swiperContent.DOE}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
