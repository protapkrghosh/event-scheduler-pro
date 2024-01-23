import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllPayments = () => {
  const { data: allPayments = [] } = useQuery({
    queryKey: ["all-payments"],
    queryFn: async () => {
      const res = await axios.get(
        `https://lets-sheduleit-backend.vercel.app/api/v1/payments/all-payments`
      );
      return res.data;
    },
  });

  return { allPayments };
};

export default useAllPayments;
