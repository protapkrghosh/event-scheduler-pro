import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useContexts from "./useContexts";

const useSingleEventData = () => {
  const { user } = useContexts();

  const { data: events = [], refetch } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axios.get(
        `https://lets-sheduleit-backend.vercel.app/api/v1/events/get-event?email=${user?.email}`
      );
      return res.data;
    },
  });

  return { events, refetch };
};

export default useSingleEventData;
