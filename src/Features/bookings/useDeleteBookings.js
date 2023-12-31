import {
    QueryClient,
    useMutation,
    useQueryClient,
  } from "@tanstack/react-query";
  import { getDeleteBooking } from "../../services/apiBookings";
  import { useNavigate, useParams } from "react-router-dom";
  import toast from "react-hot-toast";
  
  export const useDeleteBookings = () => {
  const nav=  useNavigate()
    const queryClient = useQueryClient();
    const { bookingID } = useParams();
  
    
    const { mutate: deleteBooking, isLoading } = useMutation({
      mutationFn: () => getDeleteBooking(bookingID),
      onSuccess: () => {
        toast.success(`Booking # ${bookingID} is Successfully  Deleted`);
        queryClient.invalidateQueries({
            querykey:["Bookings"]}
        );
            nav('/bookings')
      },
    });
    return { deleteBooking, loading:isLoading };
  };
  