import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup } from "../../services/apiAuth";
export function useSignup() {
  const { mutate: signupcall, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { signupcall, isLoading };
}
