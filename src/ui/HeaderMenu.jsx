import React from "react";
import { useUserHook } from "../Features/authentication/useUserHook";
import LogoutBtn from "./LogoutBtn";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import img from "../data/Nyumbani_Hotel_Logo.png";
const HeaderMenu = () => {
  const { data } = useUserHook();
  console.log(data);
  const navigate = useNavigate();
  return (
    <div className="flex  items-center gap-4">
     
      <div className="bg-gray-300 p-2 rounded-md">
        <img src={img} width={50} height={50} alt="" />
        <p className="text-xs">{data.email}</p>
      </div>
      <div className="">
      <button
        onClick={() => navigate("/account")}
        className=" text-2xl mx-4 text-green-400"
      >
        <CgProfile />
      </button>
      <LogoutBtn />
      </div>
    </div>
  );
};

export default HeaderMenu;
