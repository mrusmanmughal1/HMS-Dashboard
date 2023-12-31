import CabinTable from "../ui/CabinTable";
import Addcabin from "../Features/Cabins/Addcabin";
import CabinTableOperations from "../Features/Cabins/CabinTableOperations";

const Cabins = () => {
  return (
    <>
      <div>
        <div className="flex justify-between font-semibold p-1">
          <p className="text-4xl">All Cabins </p>
          <CabinTableOperations />
        </div>
        
        

        <CabinTable />
        <Addcabin />
      </div>
    </>
  );
};

export default Cabins;
