import axios from "axios";
import { useEffect, useState } from "react";
import useContexts from "./useContexts";

const useSingleEventData = () => {
  const [events, setEvents] = useState([]);
  const { user } = useContexts();

  useEffect(() => {
    const handleFach = async () => {
      const data = await axios.get(
        `http://localhost:3000/api/v1/events/get-event?email=${user?.email}`
      );
      setEvents(data.data);
      console.log(data.data);
    };
    handleFach();
  }, [user?.email]);
  return events;
};

export default useSingleEventData;
