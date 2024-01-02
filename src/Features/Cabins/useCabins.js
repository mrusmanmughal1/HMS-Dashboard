import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/GlobalConstants";

export const useCabins = () => {
  const queryClient = useQueryClient();
  const [seachparam] = useSearchParams();

  const filterValue = seachparam?.get("discount");
  //filter
  const filters =
    !filterValue 
      ? "All"
      : { field: "discount", value: filterValue };

  //pagination
  const page = !seachparam.get("page") ? 1 : Number(seachparam.get("page"));
  const { isloading, data: cabinsData} = useQuery({
    queryKey: ["cabins",filters,page],
    queryFn: ()=>getCabins({filters,page}),
  });
  //presfecthing next
  const pageCount = Math.ceil(cabinsData?.length / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["cabins", filters, page + 1],
      queryFn: () => getCabins({ filters, page: page + 1 }),
    });

  //presfecthing Previous
  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["cabins", filters, page - 1],
      queryFn: () => getCabins({ filters, page: page - 1 }),
    });

  return { cabinsData, isloading  };
};
