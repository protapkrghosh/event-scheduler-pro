import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllSchedule = () => {
  const { data: allEvents = [], refetch } = useQuery({
    queryKey: ["all-events"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/events/get-all-event`
      );
      return res.data;
    },
  });

  return { allEvents, refetch };
};

export default useAllSchedule;
