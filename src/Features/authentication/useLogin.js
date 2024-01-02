import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  const query = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      toast.success("Welcome To Dashboard !");
      navigate("/dashboard", { replace: true });
      query.setQueryData(['user'] , user.user)
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
};
