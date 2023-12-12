import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
const Sidebar = () => {
  const [index, setindex] = useState(0);
  return (
    <div className="h-screen row-span-full ">
      <div className="pt-12  pb-3 text-center font-semibold  ">
        {" "}
        <span className="text-3xl text-orange-600">HOTEL-</span>
        <span className="text-2xl text-red-950">SYSTEM</span>
      </div>
      <hr />
      <nav>
        <ul className="py-10 text-xl font-semibol">
          <li className="toplist">
            <NavLink
              to="/dashboard"
              className={`sideList ${index == 0 ? "bg-slate-100 " : null}`}
              onClick={() => setindex(0)}
            >
              <HiOutlineHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li className="toplist">
            <NavLink
              to="/bookings"
              className={`sideList ${index == 1 ? "bg-slate-100 " : null}`}
              onClick={() => setindex(1)}
            >
              <HiOutlineCalendarDays />
              <span>Bookings</span>
            </NavLink>
          </li>
          <li className="toplist">
            <NavLink
              to="/cabins"
              className={`sideList ${index == 2 ? "bg-slate-100 " : null}`}
              onClick={() => setindex(2)}
            >
              <HiOutlineHomeModern />
              <span>Cabins</span>
            </NavLink>
          </li>
          <li className="toplist">
            <NavLink
              to="/users"
              className={`sideList ${index == 3 ? "bg-slate-100 " : null}`}
              onClick={() => setindex(3)}
            >
              <HiOutlineUsers />
              <span>Users</span>
            </NavLink>
          </li>
          <li className="toplist">
            <NavLink
              to="/settings"
              className={`sideList ${index == 4 ? "bg-slate-100 " : null}`}
              onClick={() => setindex(4)}
            >
              <HiOutlineCog6Tooth />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
