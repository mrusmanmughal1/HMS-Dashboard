import React from "react";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className=" px-5 py-4 bg-slate-100 font-semibold uppercase flex justify-end">
      <HeaderMenu/>
    </div>
  );
};

export default Header;
