import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardContent from "./DashboardContent";
import UserDetails from "./Userdetails";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <DashboardHeader />

      <main>
        <Sidebar />
        <DashboardContent />
      </main>
    </div>
  );
};

export default Dashboard;
