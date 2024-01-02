import { PAGE_SIZE } from "../utils/GlobalConstants";

const { default: supabase } = require("./supabase");

export const getCabins = async ({ filters, page }) => {
  console.log((filters.field, filters.value))
  let query =  supabase.from("cabins").select("*");

  if (filters !== null && filters.value === "no-discount")  query = query.eq(filters.field,0 );
  if (filters !== null && filters.value === "with-discount")  query = query.gt(filters.field,0 );
  if (filters !== null && filters.value === "All")  query =  supabase.from("cabins").select("*");
  


  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error.message);
  }
  return data;
};

export const totalCabins = async () => {
  const { data: total, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("could not deleted");
  }
  return total;
};

export const DeleteCabin = async (id) => {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("could not deleted");
  }
  return data;
};

export const CreateCabin = async (newCabin, id) => {
  let query = supabase.from("cabins");
  if (!id) query = query.insert([newCabin]).select();
  if (id) query = query.update([newCabin]).eq("id", id).select();
  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("could not created");
  }
  return data;
};
