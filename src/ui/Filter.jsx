import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = ({ fieldName, options }) => {
  const [seachparam, setsearchparam] = useSearchParams();
  const handleClick = (value) => {
    seachparam.set(fieldName, value) ;
    if(seachparam.get("page")){
      seachparam.set("page" , 1)
    }

    setsearchparam(seachparam);
  };
  const paramValue = seachparam.get(fieldName) || "All";

  return (
    <div className="bg-white py-2 rounded-md flex px-4  gap-3 ">
      {options.map((val, i) => {
        return (
          <button
          key={i}
            className={`cabinsFilterBtn ${
              paramValue === val.value ? "bg-black text-white" : ""
            } `}
            onClick={() => handleClick(val.value)}
          >
            {val.label}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
