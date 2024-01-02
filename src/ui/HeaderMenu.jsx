import React from "react";
import { useUserHook } from "../Features/authentication/useUserHook";
import LogoutBtn from "./LogoutBtn";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img from "../data/Nyumbani_Hotel_Logo.png";
const HeaderMenu = () => {
  const { data } = useUserHook();
  const navigate = useNavigate();
  return (
    <div className="flex  items-center gap-4">
     
      <div className="bg-gray-200 p-2 flex items-center rounded-md">
        <img src={img} width={50} height={50} alt="" />
        <p className="text-xs">{data.email}</p>
      </div>
      <div className="">
      <button
        onClick={() => navigate("/account")}
        className=" text-xl mx-4 text-gray-400 hover:text-gray-300"
      >
        <FaUser />
      </button>
      <LogoutBtn />
      </div>
    </div>
  );
};

export default HeaderMenu;
