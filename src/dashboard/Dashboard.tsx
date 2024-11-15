import { Routes, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import UserDetails from "./UserDetails";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <DashboardHeader />

      <main>
        <Sidebar />

        <Routes>
          {/* <Route path="/" element={<DashboardContent />} /> */}

          {/* <Route path="/UserDetails" element={<UserDetails />} /> */}

          <Route path="/" element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
