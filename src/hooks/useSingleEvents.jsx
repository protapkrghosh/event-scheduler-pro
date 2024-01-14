import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingleEvents = (id) => {
  const { data: SingleEvent = null, refetch } = useQuery({
    queryKey: ["events", id],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/events/get-SingleEvents?id=${id}`
      );
      return res.data;
    },
  });

  return { SingleEvent, refetch };
};

export default useSingleEvents;
