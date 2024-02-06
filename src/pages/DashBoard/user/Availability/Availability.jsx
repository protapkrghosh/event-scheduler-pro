import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const Availability = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const response = await axios.get(
          "https://lets-sheduleit-backend.vercel.app/api/v1/events/get-all-event"
        );

        const bookedTimes = response.data.map((event) => {
          const parsedDate = moment(
            event.dateAndTime,
            "h:mm a dddd, DD/MM/YYYY ",
            true
          );
          return parsedDate.isValid()
            ? parsedDate.format("YYYY-MM-DD h:mm A")
            : null;
        });

        const allTimes = [];
        let currentDate = null;

        // Iterate for the next 7 days
        for (let i = 0; i < 6; i++) {
          currentDate = moment().add(i, "days");

          // Check if there are any available times for the current date
          let hasAvailableTime = false;

          // Iterate for each hour and each 30-minute interval
          for (let j = 0; j <= 48; j++) {
            for (let minutes = 0; minutes <= 30; minutes += 30) {
              // Form the date and time string
              const timeSlot = moment(currentDate)
                .hour(j)
                .minute(minutes)
                .format("YYYY-MM-DD h:mm A");

              // Check if the time slot is not booked
              if (!bookedTimes.includes(timeSlot)) {
                hasAvailableTime = true;
                allTimes.push(timeSlot);
              }
            }
          }

          // If there are available times, include the date
          if (hasAvailableTime) {
            allTimes.push(currentDate.format("YYYY-MM-DD"));
          }
        }

        console.log(allTimes);
        setAvailableTimes(allTimes);
      } catch (error) {
        console.error("Error fetching available times:", error.message);
      }
    };

    fetchAvailableTimes();
  }, []);

  return (
    <div>
      <h3 className="heading">Next Available times in 3 days</h3>
      <div className="grid grid-cols-3 gap-5">
        {availableTimes.map((time, index) => (
          <p
            key={index}
            className={`border border-gray-500 rounded-md p-5 cursor-pointer`}
          >
            {time}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Availability;
