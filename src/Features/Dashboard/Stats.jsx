import React from "react";
import State from "./State";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { SiBitcoincash } from "react-icons/si";
import { FaCalendarDay } from "react-icons/fa6";
import { MdAppRegistration } from "react-icons/md";

const Stats = ({ confirmedStays, bookings }) => {
  const length = bookings?.length;
  const sales = bookings?.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const check = confirmedStays?.length;
  const occ = confirmedStays?.reduce((acc, curr) => acc + curr.numNights, 0);
  return (
    <div className="flex justify-evenly my-8">
      <State
        title="Bookings"
        color="bg-green-300"
        icon={<BsFillSuitcaseLgFill className="text-green-800" />}
        value={length}
      />
      <State
        title="Sales"
        color="bg-red-300"
        icon={<SiBitcoincash className="text-red-800" />}
        value={sales + "$"}
      />
      <State
        title="Check In's"
        color="bg-indigo-300"
        icon={<FaCalendarDay className="text-indigo-800" />}
        value={check}
      />
      <State
        title="Occupancy Rate"
        color="bg-yellow-300"
        icon={<MdAppRegistration className="text-yellow-800" />}
        value={occ}
      />
    </div>
  );
};

export default Stats;
