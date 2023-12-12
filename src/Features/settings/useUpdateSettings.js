import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings } from "../../services/apiSettings";
import toast from "react-hot-toast";

export const useUpdateSettings = () => {
  const query = useQueryClient();
  const { isloading :load, mutate } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      toast.success("Settings Updated");
      query.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { load, mutate };
};
