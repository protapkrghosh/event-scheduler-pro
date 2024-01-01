const BookingTime = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-0 lg:w-[65%] mx-auto my-16">
      <div className="lg:w-[40%]">
        <h1 className="text-4xl font-bold mb-8">
          Give customers the <br /> power to book any time.
        </h1>
        <p>
          Feature your free QR code on marketing, merch, and more. One scan and
          your Booking Page appears.
          <br />
          <br />
          With all-hours self-booking and easy payments, free online appointment
          scheduling software helps fill your calendar faster.
        </p>
        <button className="btn-primary mt-4">Lets Get Started</button>
      </div>
      <img
        src="https://assets.setmore.com/website/v2/images/homepage-v2-2/qr-code-appointment-booking.webp"
        alt=""
      />
    </div>
  );
};

export default BookingTime;
