import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const Availability = () => {
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const response = await axios.get(
          "https://lets-sheduleit-backend.vercel.app/api/v1/events/get-all-event"
        );

        const bookedTimes = response.data.map((event) =>
          moment(event.dateAndTime, "YYYY-MM-DDTHH:mm:ss").format(
            "MMMM Do YYYY, h:mm A"
          )
        );

        // Get the current date
        const currentDate = moment();

        // Create an array to store available time slots
        const allTimeSlots = [];

        // Iterate for the next 7 days
        for (let i = 0; i < 7; i++) {
          const nextDate = moment(currentDate).add(i, "days");

          // Iterate for each hour
          for (let j = 9; j <= 17; j++) {
            // Form the date and time string
            const dateAndTime = moment(nextDate)
              .hour(j)
              .minute(0)
              .second(0)
              .format("MMMM Do YYYY, h:mm A");

            // Check if the time slot is not booked
            if (!bookedTimes.includes(dateAndTime)) {
              allTimeSlots.push(dateAndTime);
            }
          }
        }
        console.log(allTimeSlots);
        setAvailableTimeSlots(allTimeSlots);
      } catch (error) {
        console.error("Error fetching available times:", error.message);
      }
    };

    fetchAvailableTimes();
  }, []);

  return (
    <div>
      <p>{availableTimeSlots.join(", ")}</p>
    </div>
  );
};

export default Availability;
