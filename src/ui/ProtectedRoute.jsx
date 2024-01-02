import { useNavigate } from "react-router-dom";
import { useUserHook } from "../Features/authentication/useUserHook";
import Loader from "./Loader";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1. load the Authenticationn
  const { isLoading, isAuth } = useUserHook();
  // 2. Not Authentic then Redirect to login page

  if (!isAuth){
    navigate("/login");
  }

  // 3. while loading , show a spinner
  if (isLoading) return <Loader />;
  // 4.if authentic then show app

  if (isAuth) return children;
};

export default ProtectedRoute;
