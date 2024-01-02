import React from "react";
import { useRecentBookings } from "./useRecentBookings";
import Loader from "../../ui/Loader";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import SalesChart from "./SalesChart";
import TodayActivity from "./TodayActivity";
const DashboardLayout = () => {
  const { data, isLoading } = useRecentBookings();

  const { data: stays, isLoading: isLoading2  , confirmedStays ,numDay} = useRecentStays();
  console.log(data, numDay , confirmedStays);

  if (isLoading) return <Loader />;
  return (
    <div>
      <Stats confirmedStays={confirmedStays} bookings={data} />
      <TodayActivity/>
      <SalesChart bookings={data} numDay={numDay}/>
    </div>
  );
};

export default DashboardLayout;
