import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import {
  getBookingbyDate,
} from "../../services/apiBookings";

export function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDay = !searchParams.get("Last")
    ? 7
    : Number(searchParams.get("Last"));
  const queryDate = subDays(new Date(), numDay).toISOString();

  const { data, isLoading } = useQuery({
    queryKey: ["stays", `last-${numDay}`],
    queryFn: () => getBookingbyDate(queryDate),
  });

  const confirmedStays = data?.filter(
    (val) => val.status === "check-out" || val.status === "check-in"
  );

  return { data, isLoading, confirmedStays ,numDay };
}
