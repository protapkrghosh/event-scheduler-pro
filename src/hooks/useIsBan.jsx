import { useQuery } from "@tanstack/react-query";
import useContexts from "./useContexts";
import axios from "axios";

const useIsBan = () => {
  const { user } = useContexts();

  const { data: isBans = false, refetch } = useQuery({
    queryKey: ["isBans"],
    queryFn: async () => {
      const res = await axios.get(
        `https://lets-sheduleit-backend.vercel.appapi/v1/users/get-isBan?email=${user?.email}`
      );
      return res.data;
    },
  });

  return { isBans, refetch };
};

export default useIsBan;
