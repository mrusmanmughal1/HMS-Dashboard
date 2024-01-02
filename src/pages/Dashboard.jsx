import React from "react";
import DashboardLayout from "../Features/Dashboard/DashboardLayout";
import DashboardFilter from "../Features/Dashboard/DashboardFilter";

const Dashboard = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold">Dashboard</p>
      <DashboardFilter/>
      </div>
      <DashboardLayout />
    </div>
  );
};

export default Dashboard;
