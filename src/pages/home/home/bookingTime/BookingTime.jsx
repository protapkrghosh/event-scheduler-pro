const BookingTime = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-[50%]">
          <img
            src="https://assets.setmore.com/website/v2/images/homepage-v2-2/qr-code-appointment-booking.webp"
            className="w-full h-full"
          />
        </div>
        <div className="md:w-[50%]">
          <h1 className="text-third">
            Give customers the power{" "}
            <span className=" text-[#0069ff]">to book any time</span>
          </h1>
          <p className="py-6 text-secondary">
            Feature your free QR code on marketing, merch, and more. One scan
            and your Booking Page appears.
            <br />
            <br />
            With all-hours self-booking and easy payments, free online
            appointment scheduling software helps fill your calendar faster.
          </p>
          <button className=" btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BookingTime;
