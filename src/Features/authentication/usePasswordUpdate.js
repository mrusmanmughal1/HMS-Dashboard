import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../services/apiAuth";
import toast from "react-hot-toast";

export const usePasswordUpdate = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: ({email,password})=>updatePassword({email , password }),
    onSuccess: () => {
      toast.success("Your Password is Successfully Updated");
    },
    onError: (err) => toast.error(err.message),
  });
  return { mutate, isLoading };
};
