import { useQuery } from "@tanstack/react-query";
import useContexts from "./useContexts";
import axios from "axios";

// help to fech the isAdmin data

const useAdmin = () => {
  const { user } = useContexts();

  const { data: isAdmin = false, refetch } = useQuery({
    queryKey: ["isAdmins"],
    queryFn: async () => {
      const res = await axios.get(
        `https://lets-sheduleit-backend.vercel.app/api/v1/users/get-isAdmin?email=${user?.email}`
      );
      return res.data;
    },
  });

  return { isAdmin, refetch };
};

export default useAdmin;
