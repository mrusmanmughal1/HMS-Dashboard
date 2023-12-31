import React from "react";
import log from "../data/Nyumbani_Hotel_Logo.png";
const SiteLogo = () => {
  return (
    <div className="flex justify-center">
      <img src={log} alt="Logo" width={200} />
    </div>
  );
};

export default SiteLogo;
