import React from "react";
import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import Sortby from "../../ui/Sortby";

const BookingTableOperations = () => {
  return (
    <TableOperations>
      <div className="flex items-center gap-8">
        <Filter
          fieldName="status"
          options={[
            {
              label: "All",
              value: "All",
            },
            {
              label: "Check In",
              value: "check-in",
            },
            {
              label: "Check Out",
              value: "check-out",
            },
            {
              label: "Unconfirmed",
              value: "unconfirmed",
            },
          ]}
        />

        <Sortby
          options={[
            { label: "A-Z", value: "A-Z" },
            { label: "Z-A", value: "Z-A" },
            { label: "Low-High", value: "Low-High" },
            { label: "Hight-low", value: "Hight-low" },
          ]}
        />
      </div>
    </TableOperations>
  );
};

export default BookingTableOperations;
