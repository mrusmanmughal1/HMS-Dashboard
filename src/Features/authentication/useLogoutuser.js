import { useMutation } from "@tanstack/react-query";
import { getUserLogOut } from "../../services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const useLogoutuser = () => {
  const navigate = useNavigate();
  const query = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: getUserLogOut,
    onSuccess: () => {
      query.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
};
