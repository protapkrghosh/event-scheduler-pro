import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSinglePayments = (id) => {
  const { data: SinglePayments = null } = useQuery({
    queryKey: ["payments", id],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/payments/single-user-payments?paymentsId=${id}`
      );
      return res.data;
    },
  });

  return { SinglePayments };
};

export default useSinglePayments;
