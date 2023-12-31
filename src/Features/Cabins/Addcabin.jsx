import Model from "../../ui/Model";
import CabinsForm from "./CabinsForm";

const Addcabin = () => {
  return (
    <Model>
      <Model.Open open='cabins-forum'>
        <button className="px-5 py-2 rounded-md bg-green-500 my-5 font-semibold text-white " > Add Cabins </button>
      </Model.Open>
      <Model.Window  name='cabins-forum'>
        <CabinsForm  />
      </Model.Window>
    </Model>
  );
};


export default Addcabin;
