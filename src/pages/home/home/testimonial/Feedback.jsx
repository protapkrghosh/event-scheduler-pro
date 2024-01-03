import { FaStar } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className="mt-40 mb-20">
      <div className="w-11/12 md:w-1/2 mx-auto  ">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="30  00"
          className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-end w-full "
        >
            <div className=" w-full h-52 shadow-sm rounded-xl p-5 hover:scale-105 duration-500">
                <h6 className="text-lg font-prompt mb-2">Facebook</h6>
                <p className="text-gray-500 mb-2">I’ve used Setmore for over 3 years, its a brilliant booking app that does all the hard work for me!</p>
                <p>―Rowena Gledhill</p>
            </div>
            <div className="w-full h-24 hover:scale-105 duration-500 p-3 shadow-xl rounded-xl border border-gray-200">
            <div className="flex items-center gap-x-1">
              <FaStar className="text-xl w-6 h-6 p-1 text-green-500"></FaStar>

              <FaStar className="text-xl w-6 h-6 p-1 text-green-500"></FaStar>

              <FaStar className="text-xl w-6 h-6 p-1 text-green-500"></FaStar>

              <FaStar className="text-xl w-6 h-6 p-1 text-green-500"></FaStar>

              <FaStar className="text-xl w-6 h-6 p-1 text-green-500"></FaStar>
            </div>
                <p><span>4.6/5 rating</span> based on 233 reviews on Facebook.</p>
            </div>
          <div className=" bg-blue-500 rounded-lg w-full h-52 flex items-end justify-center hover:scale-105 duration-500">
          <img
            src="https://assets.setmore.com/website/v2/images/features/setmore-customer-ipad.webp"
            loading="lazy"
            alt="gellary"
            className="w-56 h-5w-56"
          />
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="3000"
          className="grid grid-cols-2 md:grid-cols-2 gap-20  mt-4"
        >
          <div className="bg-yellow-500 rounded-lg w-full h-52 flex items-end justify-center hover:scale-105 duration-500">
          <img
            src="https://assets.setmore.com/website/v2/images/features/setmore-client-curly-hair.webp"
            loading="lazy"
            alt="gelary"
            className=" w-58 h-58 "
          />
          </div>
          <div className=" w-full h-52 shadow-xl rounded-xl p-5 border border-gray-200 hover:scale-105 duration-500">
                <h6 className="text-lg font-prompt mb-2">Facebook</h6>
                <p className="text-gray-500 mb-2">I’ve used Setmore for over 3 years, its a brilliant booking app that does all the hard work for me!</p>
                <p>―Rowena Gledhill</p>
            </div>
        </div>

        <div
          data-aos="zoom-in-down"
          className="grid grid-cols-2 md:grid-cols-3 gap-4  mt-4"
        >
            <div className="w-full h-24 hover:scale-105 duration-500 p-3 shadow-xl rounded-xl border border-gray-200 flex items-center">
                <img src="https://assets.setmore.com/website/v2/images/icons/logo-badge-capterra.png" alt="" />
                <p className="text-xl font-cursive">
Reservations</p>
            </div>
            <div className=" w-full h-52 shadow-xl rounded-xl p-5 border border-gray-200 hover:scale-105 duration-500">
                <h6 className="text-lg font-prompt mb-2">Facebook</h6>
                <p className="text-gray-500 mb-2">I’ve used Setmore for over 3 years, its a brilliant booking app that does all the hard work for me!</p>
                <p>―Rowena Gledhill</p>
            </div>
            <div className="w-full h-24 hover:scale-105 duration-500 p-3 shadow-xl rounded-xl border border-gray-200 flex items-center">
                <img src="https://assets.setmore.com/website/v2/images/icons/logo-badge-getapp.png" alt="" />
                <p className="text-xl font-cursive">Reservation & Online Booking</p>
            </div>
        </div>
      </div>    
    </div>
  );
};

export default Feedback;
