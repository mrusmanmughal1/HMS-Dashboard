import { MdDelete, MdEdit } from "react-icons/md";
import CabinsForm from "../Cabins/CabinsForm";
import { BiShowAlt } from "react-icons/bi";
import Model from "../../ui/Model";
import Deletecabin from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import { useNavigate } from "react-router-dom";
const BookingsRow = ({ booking, view }) => {
  const {
    bookings: id,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    status,
    totalPrice,
    cabins: { name: cabinName },
    guests: { fullName: GuestName, email },
  } = booking;

  const navigate = useNavigate();
  const bookingStatus =
    status === "unconfirmed" ? "bg-blue-400 " : "bg-green-400";
  return (
    <Table.Row>
      <ul class="flex  items-center  p-4 bg-slate-100 ">
        <li className="w-32 font-semibold">{cabinName}</li>
        <li className=" w-56    ">
          <p className="font-semibold">{GuestName}</p>
          <p>{email}</p>
        </li>
        <li className="w-44">{startDate}</li>
        <li className="w-48 flex">
          <p
            className={` ${bookingStatus}  text-white rounded-md  px-2   font-semibold`}
          >
            {status}
          </p>
        </li>
        <li className="    w-44  font-semibold ps-8">{totalPrice}</li>
        <li className="text-gray-600   flex   items-center">
          {view && (
            <BiShowAlt
              className="hover:text-gray-400 "
              onClick={() => navigate(`/bookings/${booking.id}`)}
            />
          )}
          {status === "unconfirmed" ? (
            <MdEdit
              className="hover:text-gray-400"
              onClick={() => navigate(`/bookings/check-in/${booking.id}`)}
            />
          ) : null}
        </li>
      </ul>
    </Table.Row>
  );
};

export default BookingsRow;
