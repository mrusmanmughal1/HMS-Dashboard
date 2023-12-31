import React from "react";
import BookingsTable from "../Features/bookings/BookingsTable";
import BookingTableOperations from "../Features/bookings/BookingTableOperations";

const Bookings = () => {
  return (
    <>
      <div className="flex justify-between font-semibold p-1">
        <h1 className="text-4xl">All Bookings </h1>
        <BookingTableOperations/>
      </div>

      <BookingsTable/>
    </>
  );
};

export default Bookings;
