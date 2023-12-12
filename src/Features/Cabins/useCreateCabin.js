import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export const useCreateCabin = ()=>{
    const queryClient = useQueryClient();
    //Create
    const { isloading: isCreating, mutate: createcabin } = useMutation({
      mutationFn: CreateCabin,
      onSuccess: () => {
        toast.success("New Cabin Created !");
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        });
      },
      onError: (err) => toast.error(err.message),
    });
    return { isCreating , createcabin}
}