import { useEffect, useState } from "react";

const Availability = () => {
    const [meetings, setMeetings] = useState([]);
    useEffect(() => {
        fetch(
          `https://lets-sheduleit-backend.vercel.app/api/v1/events/get-all-event`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setMeetings(data);
          });
      }, []);
      
      const today = new Date().toLocaleDateString(); // Get today's date
      
      // Filter events that are not booked for today
      const eventsNotBookedForToday = meetings.filter(event => {
        const eventDate = new Date(event.dateAndTime.split(",")[1].trim()).toLocaleDateString();
        return eventDate !== today;
      });
      
      console.log("eventsNotBookedForToday", eventsNotBookedForToday);
      
    return (
        <div>
            
        </div>
    );
};

export default Availability;