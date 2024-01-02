import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookingbyDate } from "../../services/apiBookings";

export function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDay = !searchParams.get("Last")
    ? 7
    : Number(searchParams.get("Last"));
  const queryDate = subDays(new Date(), numDay).toISOString();

  const { data, isLoading } = useQuery({
    queryKey: ["bookings", `last-${numDay}`],
    queryFn: () => getBookingbyDate(queryDate),
  });

  return {data , isLoading}
}
