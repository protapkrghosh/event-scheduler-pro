import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllProUser = () => {
  const { data: allProUser = [] } = useQuery({
    queryKey: ["all-pro-user"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/users/get-all-pro-user`
      );
      return res.data;
    },
  });

  return { allProUser };
};

export default useAllProUser;
