import Loader from "./Loader";
import CabinRow from "./CabinRow";
import { useCabins } from "../Features/Cabins/useCabins";
import { useParams, useSearchParams } from "react-router-dom";
import Table from "./Table";
const CabinTable = () => {
  const { cabinsData, isloading } = useCabins();
  //filter
  const [seachparam] = useSearchParams();
  let filterby = seachparam.get("discount") || "All";

  let filteredCabs;
  if (filterby === "All") filteredCabs = cabinsData;
  if (filterby === "no-discount")
    filteredCabs = cabinsData?.filter((val, i) => val.discount === 0);
  if (filterby === "with-discount")
    filteredCabs = cabinsData?.filter((val, i) => val.discount > 0);

  // sort By
  let sortBy = seachparam.get("sortBy") || "A-Z";
  const [field, direction] = sortBy.split("-");
  const mod = direction === "Z" ? 1 : -1;

  const sorted = filteredCabs?.sort((a, b) => a[field] - b[direction] * mod);
  

  if (isloading) return <Loader />;

  return (
    <div>
      <Table.Headers >
        <div>Image</div>
        <div>Cabin</div>
        <div>Guests</div>
        <div>Price</div>
        <div>Discount</div>


      </Table.Headers>
      {sorted?.map((cabin, id) => {
        return <CabinRow key={id} data={cabin} />;
      })}
    </div>
  );
};

export default CabinTable;
