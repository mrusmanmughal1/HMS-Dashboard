import Loader from "../../ui/Loader";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import {  useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";
import Pagination from "../../ui/Pagination";
import { useQuery } from "@tanstack/react-query";
import { totalCabins } from "../../services/apiCabins";
const CabinTable = () => {
  const [seachparam] = useSearchParams();


  const {data } = useQuery({
    queryKey:['total'],
    queryFn:totalCabins
  })
  const { cabinsData, isloading  } = useCabins();
  //filter
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
      <Table.Footer>

      <Pagination count={data?.length} />
      </Table.Footer>
    </div>
  );
};

export default CabinTable;
