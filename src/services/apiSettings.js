import supabase from "./supabase";

//Get Settings
export const getSettings = async () => {
  let { data: settings, error } = await supabase.from("settings").select("*");
  if(error) {
    console.log(error)
    throw new error(error.message)
  }
  return  settings;
 
};

//update Settings
export const updateSettings = async (NewSettings) => {
  console.log(NewSettings)
  const { data, error } = await supabase
    .from("settings")
    .update( NewSettings )
    .eq("id", 1)
    .single();
    if(error) {
      console.log(error)
      throw new error(error.message)
    }
  return  data ;
};
