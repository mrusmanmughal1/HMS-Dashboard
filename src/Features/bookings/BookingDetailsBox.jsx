import React from "react";
import { GiWoodCabin } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { formatDistanceFromNow, subtractDates } from "../../helpers/helper";
import { useCheckIn } from "./useCheckin";
const BookingDetailsBox = ({ booking }) => {
  console.log(booking, "lolo");
  const {
    id,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    status,
    isPaid,
    hasBreakFast,
    totalPrice,
    extraPrice,
    cabins: { name },
    guests: { fullName: GuestName, email, nationalID },
  } = booking[0];
  const start = formatDistanceFromNow(startDate);
  const date = subtractDates(startDate);
  const end = endDate.slice(0, 10);

  return (
    <div className="rounded-md p-4">
      <div className="bg-purple-800 flex py-4 justify-between items-center text-white font-semibold">
        <div className=" flex items-center gap-4 px-4">
          <GiWoodCabin className="text-4xl" /> {numNights} nights in Cabin {id}
        </div>
        <div className="px-8">
          {startDate.slice(0, 10)} - ( {start} ) - {end}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-4 bg-white font-semibold">
        <p className=" items-center text-2xl gap-3">
          Name : <span className="uppercase">{GuestName} </span> 
          <span className="text-sm"> (+{numGuests - 1}  guests) </span>
        </p>
        <p> Email: {email} </p>
        <p> National ID : {nationalID}</p>
        <p className="flex items-center gap-3 py-4">
          {hasBreakFast ? (
            <FaCheckCircle className="text-green-400" />
          ) : (
            <MdCancel className="text-red-400" />
          )}
          Breakfast Included ?{" "}
          <span
            className={`px-4 ${
              hasBreakFast ? "text-green-600" : " text-red-600"
            }`}
          >
            {" "}
            {hasBreakFast ? " Yes" : "No"}
          </span>
        </p>
      </div>

      <div
        className={` ${
          isPaid ? "bg-green-500 text-white" : "bg-yellow-400 text-red-700"
        } px-4 py-4  flex justify-around items-center  font-semibold `}
      >
        <div>💰 Total Price </div>
        <div>
          {" "}
          ${totalPrice} ( ${cabinPrice} cabin + ${extraPrice} breakfast ){" "}
        </div>
        <div>{isPaid ? "PAID" : "WILL PAY AT PREORITY"} </div>
      </div>
      <div className="text-end  bg-white p-4 text-gray-500 font-semibold text-sm">
        Booking on {created_at.slice(0, 10)}
      </div>
    </div>
  );
};

export default BookingDetailsBox;
