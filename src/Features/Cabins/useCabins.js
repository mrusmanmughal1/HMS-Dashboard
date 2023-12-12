import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export const useCabins = ()=>{
    const {
        isloading,
        data: cabinsData
      } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
      });

    return {cabinsData, isloading}
}