import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { getUpdateCheckin } from "../../services/apiBookings";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export const useCheckout = () => {
  const queryClient = useQueryClient();
  const { bookingID } = useParams();

  const obj = {
    status: "check-out",
  };
  const { mutate: checkOut, isLoading } = useMutation({
    mutationFn: () => getUpdateCheckin(bookingID, obj),
    onSuccess: () => {
      toast.success(`Booking # ${bookingID} is Successfully  Check Out!`);
      queryClient.invalidateQueries({ active: true });
    },
  });
  return { checkOut, isLoading };
};
