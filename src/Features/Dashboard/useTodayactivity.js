import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodayActivity } from "../../services/apiBookings";

export const useTodayActivity = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["today-activity"],
    queryFn: getTodayActivity,
  });

  return { data, isLoading };
};
