import { IoCaretBack } from "react-icons/io5";
import { useBooking } from "./useBooking";
import Loader from "../../ui/Loader";
import BookingDetailsBox from "./BookingDetailsBox";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckIn } from "./useCheckin";
import { useCheckout } from "./useCheckout";
import { useDeleteBookings } from "./useDeleteBookings";
import Model from "../../ui/Model";
import ConfirmDelete from "../../ui/ConfirmDelete";

const BookingsDetails = () => {
  const { data, isLoading } = useBooking();
  const moveBack = useMoveBack();
  const { checkin } = useCheckIn();
  const { checkOut } = useCheckout();
  const { deleteBooking, loading } = useDeleteBookings();

  if (isLoading) return <Loader />;
  console.log(data);

  const { status, id } = data[0];

  return (
    <div>
      <div className="flex  pt-4 pb-8 justify-between">
        <h1 className="text-2xl font-semibold">
          Booking # {id}
          <span
            className={` ${
              status === "confirmed" || status === "check-in"
                ? "bg-green-300"
                : "bg-blue-300"
            } px-4 mx-4 py-1 text-xs rounded-full uppercase `}
          >
            {status}
          </span>
        </h1>
        <button
          onClick={() => moveBack()}
          className="flex items-center hover:bg-blue-400 hover:rounded-md hover:text-white px-2 gap-1 text-blue-400"
        >
          {" "}
          <IoCaretBack /> Back{" "}
        </button>
      </div>
      <BookingDetailsBox booking={data} />
      <div className="flex gap-2 justify-end my-4">
        {status === "unconfirmed" && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md border font-semibold disabled:text-white disabled:bg-gray-300"
            onClick={() => checkin()}
            disabled={status === "check-in"}
          >
            Check In Booking #{id}
          </button>
        )}
        {status === "check-in" && (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md border font-semibold disabled:text-white disabled:bg-gray-300"
            onClick={() => checkOut()}
          >
            {" "}
            Check out{" "}
          </button>
        )}
        {status === "check-out" && (
          <>
          <Model>
            <Model.Open open="deleteBooking">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md border font-semibold disabled:text-white disabled:bg-gray-300">
                Delete Bookings
              </button>
            </Model.Open>
            <Model.Window name="deleteBooking">
              <ConfirmDelete
                id={id}
                loading={loading}
                Callback={deleteBooking}
              />
            </Model.Window>
          </Model>
          </>
        )}

        <button
          className="bg-white px-4 py-2 rounded-md border font-semibold"
          onClick={() => moveBack()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default BookingsDetails;
