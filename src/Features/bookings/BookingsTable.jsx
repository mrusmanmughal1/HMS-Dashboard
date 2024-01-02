import React from "react";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import { useBookings } from "./useBookings";
import BookingsRow from "./BookingsRow";
import Pagination from "../../ui/Pagination";
import Loader from "../../ui/Loader";

const BookingsTable = () => {
  const { Bookings, count, isLoading } = useBookings();
  if (!Bookings) {
    <Empty tableName="Bookings" />;
  }
  return (
    <Table>
      <Table.Headers>
        <div>CABINS</div>
        <div>Guests</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
      </Table.Headers>
      {isLoading ? (
        <Loader />
      ) : (
        <Table.Body
          data={Bookings}
          render={(booking) => (
            <BookingsRow view={true} key={booking.id} booking={booking} />
          )}
        />
      )}
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
};

export default BookingsTable;
