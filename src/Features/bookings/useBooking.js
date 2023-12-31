import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export const useBooking = () => {
  const { bookingID } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["Booking"],
    queryFn: () => getBooking(bookingID),
  });

  return { isLoading, data };
};
