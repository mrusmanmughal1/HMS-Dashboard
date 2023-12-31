import React, {  createContext } from "react";

const MenuContext = createContext();

//provider
const Menus = ({ children }) => {
  return <MenuContext.Provider value={3}>{children}</MenuContext.Provider>;
};

const Button = ({ children }) => {
  return <button>{children}</button>;
};

Menus.Button = Button;

export default Menus;
