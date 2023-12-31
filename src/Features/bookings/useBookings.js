import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/GlobalConstants";

export const useBookings = () => {
  const queryClient = useQueryClient();
  const [seachparam] = useSearchParams();

  const filterValue = seachparam?.get("status");
  //filter
  const filters =
    !filterValue || filterValue === "All"
      ? null
      : { field: "status", value: filterValue };

  //pagination
  const page = !seachparam.get("page") ? 1 : Number(seachparam.get("page"));

  const { isLoading, data: { data: Bookings, count } = {} } = useQuery({
    queryKey: ["Bookings", filters, page],
    queryFn: () => getBookings({ filters, page }),
  });

  //presfecthing next
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["Bookings", filters, page + 1],
      queryFn: () => getBookings({ filters, page: page + 1 }),
    });

  //presfecthing Previous
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["Bookings", filters, page - 1],
      queryFn: () => getBookings({ filters, page: page - 1 }),
    });

  return { Bookings, isLoading, count };
};
