import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { DeleteCabin } from "../../services/apiCabins";

export const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isloading, mutate: deleteCabinApi } = useMutation({
    mutationFn: DeleteCabin,
    onSuccess: () => {
      toast.success("Successfully Deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err);
    },
  });
  return { isloading, deleteCabinApi };
};
