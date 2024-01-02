import React from "react";
import { IoIosLogOut } from "react-icons/io";
import MiniLoader from "./MiniLoader";
import { useLogoutuser } from "../Features/authentication/useLogoutuser";
const LogoutBtn = () => {
  const { mutate, isLoading } = useLogoutuser();

  if (isLoading) return <MiniLoader />;
  return (
    <>
      <button onClick={mutate}>
        <IoIosLogOut className="hover:text-gray-400 text-2xl" />
      </button>
    </>
  );
};

export default LogoutBtn;
