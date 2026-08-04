import AppLayout from "../components/layout/AppLayout";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatCardGrid from "../components/dashboard/StatCardGrid";
import EmployeeTable from "../components/employees/EmployeeTable";

function Dashboard() {
  return (
    <AppLayout
      pageTitle="Dashboard"
      user={{ name: "Shiv Kumar", role: "Co-Founder", photoUrl: "" }}
      onLogout={() => alert("Logout clicked")}
    >
      <WelcomeBanner user={{ name: "Shiv Kumar", photoUrl: "" }} />
      <StatCardGrid />
      <EmployeeTable />
    </AppLayout>
  );
}

export default Dashboard;
