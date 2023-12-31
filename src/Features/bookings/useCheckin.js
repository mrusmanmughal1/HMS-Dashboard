import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { getUpdateCheckin } from "../../services/apiBookings";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export const useCheckIn = () => {
  const queryClient = useQueryClient();
  const { bookingID } = useParams();

  const obj = {
    status: "check-in",
    isPaid: true,
  };
  const { mutate: checkin, isLoading } = useMutation({
    mutationFn: () => getUpdateCheckin(bookingID, obj),
    onSuccess: () => {
      toast.success(`Booking # ${bookingID} is Successfully  Check in!`);
      queryClient.invalidateQueries({ active: true });
    },
  });
  return { checkin, isLoading };
};
