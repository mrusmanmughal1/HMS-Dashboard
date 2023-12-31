import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
function AppLayout() {
    return (
        <div className="grid grid-rows-[auto,1fr] grid-cols-[26rem,1fr] h-screen"  >
        <Sidebar />
        <Header/>
        <div className="bg-slate-50 px-10 py-5 overflow-scroll">
          <Outlet />
        </div>
        </div>
    );
  }
  
  export default AppLayout;