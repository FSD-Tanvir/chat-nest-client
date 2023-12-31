import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar/>
      <div className="flex-1  md:ml-64">
        <div >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
