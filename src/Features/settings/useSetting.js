import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export const useGetSettings = () => {
  const { isloading, data } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isloading, data };
};
