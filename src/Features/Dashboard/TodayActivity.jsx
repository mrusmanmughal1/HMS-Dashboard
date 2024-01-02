import React from "react";
import { useTodayActivity } from "./useTodayactivity";

const TodayActivity = () => {
  const { data, isLoading } = useTodayActivity();
  return (
    <div className="p-5 bg-white rounded-2xl shadow-lg  my-4">
      <p className="text-2xl font-semibold">Today's Activity</p>
        { !data?.length ? <div className="p-5  font-mono font-semibold text-2xl text-center"> <p>No Activity For Today 🎇</p>
        
        <p className="text-slate-700 font-mono  text-3xl">Enjoy The day !</p></div> :6}

    </div>
  );
};

export default TodayActivity;
