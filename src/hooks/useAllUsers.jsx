import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllUsers = () => {
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["all-user"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/users/all-user`
      );
      return res.data;
    },
  });

  return { allUser, refetch };
};

export default useAllUsers;
