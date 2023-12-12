import React, {  useState } from "react";
import CabinTable from "../ui/CabinTable";
import CabinsForm from "../Features/Cabins/CabinsForm";

const Cabins = () => {
  const [form, setform] = useState(false)
  return (
    <>
      <div>
        <div className="flex justify-between font-semibold p-3">
          <p className="text-4xl">All Cabins </p>
          <p>sorting </p>
        </div>
        <ul className="flex gap-32 font-semibold p-4 uppercase">
          <li>Image</li>
          <li>Cabins</li>
          <li>Capacity </li>
          <li>Price</li>
          <li>Discount</li>
        </ul>

        <CabinTable />
        <button className="px-5 py-2 rounded-md bg-green-500 my-5 font-semibold " onClick={()=>setform(!form)}>Add New Cabin</button>
      {form && <CabinsForm/>}
      </div>
    </>
  );
};

export default Cabins;
