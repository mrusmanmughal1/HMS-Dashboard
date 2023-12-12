import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export const useEditCabin = ()=>{
    const queryClient = useQueryClient();

    //edit
  const { isloading: isEditing, mutate: editCB } = useMutation({
    mutationFn: ({ newcabin, id }) => CreateCabin(newcabin, id),
    onSuccess: () => {
      toast.success("  Cabin Updated !");
      
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return {isEditing , editCB}
}