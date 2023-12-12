import Loader from "./Loader";
import CabinRow from "./CabinRow";
import {useCabins} from "../Features/Cabins/useCabins"
const CabinTable = () => {
 const {cabinsData, isloading} = useCabins()
  
  if (isloading) return <Loader />;
  return (
    <div>
      {cabinsData?.map((cabin, id) => {
        return <CabinRow key={id} cabin={cabin}  />;
      })}
    </div>
  );
};

export default CabinTable;
