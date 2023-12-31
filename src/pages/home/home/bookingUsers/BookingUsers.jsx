import CountUp from 'react-countup';

const BookingUsers = () => {
  return (
    <div className='bookingBg mt-32 w-full h-auto md:h-[250px]'>
      <div className='z-10'>
        <h3 className='text-[25px] font-semibold text-center pt-8 md:pt-10 mb-5 z-50'>We handle 1,000,000+ bookings every month for our users</h3>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 text-center w-12/12 md:w-8/12 mx-auto">
            <div>
              <CountUp delay={2} duration={5} end={18371} className='text-[#2A9D8F] text-5xl font-semibold' />
              <p className='text-[#6E7172] text-[17px] mt-2'>Bookings today</p>
            </div>

            <div>
              <div>
                <CountUp delay={2} duration={5} end={901784} className='text-[#2A9D8F] text-5xl font-semibold' />
                <p className='text-[#6E7172] text-[17px] mt-2'>Bookings this month</p>
              </div>
            </div>

            <div>
              <CountUp delay={2} duration={5} start={0} end={78879171} className='text-[#2A9D8F] text-5xl font-semibold' />
              <p className='text-[#6E7172] text-[17px] mt-2'>Bookings all time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingUsers;
