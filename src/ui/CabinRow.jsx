import { MdDeleteSweep } from "react-icons/md";
import CabinsForm from "../Features/Cabins/CabinsForm";
import { FaEdit } from "react-icons/fa";
import Model from "./Model";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteCabin } from "../Features/Cabins/useDeleteCabin";
const CabinRow = ({ data }) => {
  const { isLoading, deleteCabinApi } = useDeleteCabin();

  const { id, name, maxCapacity, discount, regularPrice, image } = data;
  return (
    <div>
      <ul className="flex gap-20  font-semibold p-4 bg-slate-100">
        <li>
          <img src={image}  className="w-80 border"   alt="img" />
        </li>
        <li className=" text-center w-80">{name}</li>
        <li className=" w-80 text-center">{maxCapacity}</li>
        <li className=" w-96 text-center">Rs .{regularPrice}</li>
        <li className=" w-80 text-center">{discount}</li>
        <li className="text-gray-600 flex gap-1 items-center">
          <Model>
            <Model.Open open="delete">
              <MdDeleteSweep className="hover:text-red-600 text-xl " />
            </Model.Open>
            <Model.Window name="delete">
              <ConfirmDelete id={id} loading={isLoading} Callback={deleteCabinApi} />
            </Model.Window>

            <Model.Open open="edit">
              <FaEdit className="hover:text-green-600 text-lg  " />
            </Model.Open>
            <Model.Window name="edit">
              <CabinsForm EditCab={data} />
            </Model.Window>
          </Model>
        </li>
      </ul>
    </div>
  );
};

export default CabinRow;
