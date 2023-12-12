import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useGetSettings } from "../Features/settings/useSetting";
import Loader from "../ui/Loader";
import { useUpdateSettings } from "../Features/settings/useUpdateSettings";
const Settings = () => {
  const [SettingValue, setsetingData] = useState({
    max :null,
    min:null,
    guest:null,
    BFprice:null
  })
  const { max, min , guest , BFprice}=SettingValue
  const { handleSubmit } = useForm();
  const { data, isloading } = useGetSettings();
  const { minBookingLength, maxBookingLength, maxGuestLength, breakfastPrice } =
    data?.at(0) || {};
  const { mutate, load: isloadingUpdate } = useUpdateSettings();

  const handleChange = (e) => {
    setsetingData(
       {...SettingValue , [e.target.name]:e.target.value})
       }
  if (isloading || isloadingUpdate) {
    return <Loader />;
  }
  const onsubmit = (d) => {
    mutate({
      minBookingLength:min ?? minBookingLength,
      maxBookingLength:max ?? maxBookingLength,
      maxGuestLength:guest ?? maxGuestLength ,
      breakfastPrice : BFprice ?? breakfastPrice
    })
  };
  return (
    <div className="bg-white p-5">
      <p className="text-3xl font-semibold pb-4">Settings</p>
      <div className="">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="w-1/2">
            {" "}
            <div className="flex justify-between items-center font-semibold px-10 m-3">
              <p>Minimum Booking Length</p>
              <div>
                <input
                  type="text"
                  className=" rounded-md border px-5 py-3"
                  name="max"
                  defaultValue={minBookingLength || ""}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="flex justify-between items-center font-semibold px-10 m-3">
              <p>Maximum Booking Length </p>
              <div>
                <input
                  type="text"
                  className=" rounded-md border px-5 py-3"
                  name="min"
                  onChange={(e) => handleChange(e)}
                  defaultValue={maxBookingLength || ""}
                />
              </div>
            </div>
            <div className="flex justify-between items-center font-semibold px-10 m-3">
              <p>Maximum Guests </p>
              <div>
                <input
                  type="text"
                  className=" rounded-md border px-5 py-3"
                  onChange={(e) => handleChange(e)}
                  name="guest"
                  defaultValue={maxGuestLength || ""}
                />
              </div>
            </div>
            <div className="flex justify-between items-center font-semibold px-10 m-3">
              <p>Break-Fast Price </p>
              <div>
                <input
                  type="text"
                  defaultValue={breakfastPrice || ""}
                  onChange={(e) => handleChange(e)}
                  name="BFprice"
                  className=" rounded-md border px-5 py-3"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                className="px-3 py-2 bg-green-500 rounded-md"
                onClick={onsubmit}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
