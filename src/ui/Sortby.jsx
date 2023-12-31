import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sortby = ({ options }) => {
  const [searchparams, setsearchparams] = useSearchParams();

  const handleChange = (e) => {
    searchparams.set("sortBy", e.target.value);
    setsearchparams(searchparams);
  };
  return (
    <div>
      <div className="text-black">
        <span>Sort By : </span>
        <select  onChange={(e) => handleChange(e)} className="px-2">
          {options.map((val) => {
            return (

              <option key={val.value} >{val.label}</option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Sortby;
