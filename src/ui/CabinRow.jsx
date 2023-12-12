import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { DeleteCabin } from "../services/apiCabins";
import toast from "react-hot-toast";
import CabinsForm from "../Features/Cabins/CabinsForm";
import { FaEdit } from "react-icons/fa";
import { useDeleteCabin } from "../Features/Cabins/useDeleteCabin";
const CabinRow = ({ cabin }) => {
  const [show, setshow] = useState(false)
  const { id, name, maxCapacity, discount, regularPrice, image } = cabin;
 const  { isloading, deleteCabinApi }=useDeleteCabin()
  return (
    <div>
      <ul className="flex gap-32 font-semibold p-4 bg-slate-100">
        <li>
          <img src={image} width={75}   className="border" alt="img" />
        </li>
        <li className="w-14">{name}</li>
        <li className="w-14">{maxCapacity}</li>
        <li className="w-14">Rs .{regularPrice}</li>
        <li className="w-14">{discount}</li>
        <li className="text-gray-600 flex gap-4 items-center ">
          {" "}
          <MdDeleteSweep className="hover:text-red-600 text-3xl " onClick={() => deleteCabinApi(id)} disabled={isloading} />{" "} 
        <FaEdit className="hover:text-green-600 text-2xl  " onClick={()=>setshow(!show)}/>

        </li>
       
      </ul>
      {show && <CabinsForm setshow={setshow} EditCab={cabin}/>}
    </div>
  );
};

export default CabinRow;
