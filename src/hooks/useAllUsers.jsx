import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUsers = () => {
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["all-user"],
    queryFn: async () => {
      const res = await axios.get(
        `https://lets-sheduleit-backend.vercel.app/api/v1/users/all-user`
      );
      return res.data;
    },
  });

  return { allUser, refetch };
};

export default useAllUsers;
