const { default: supabase } = require("./supabase");

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error("facing error ");
  }
  return data;
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
  if (!id) 
   query= query.insert([newCabin]).select();
  if (id) 
    query = query.update([newCabin]).eq("id", id).select();
    const { data, error } = await query.select();
  
  if (error) {
    console.error(error);
    throw new Error("could not created");
  }
  return data;
};
