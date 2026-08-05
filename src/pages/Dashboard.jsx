import AppLayout from "../components/layout/AppLayout";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatCardGrid from "../components/dashboard/StatCardGrid";
import EmployeeTable from "../components/employees/EmployeeTable";
import { useUser } from "../context/UserContext";

function Dashboard() {
  const { user } = useUser();

  return (
    <AppLayout pageTitle="Dashboard" user={user}>
      <WelcomeBanner user={user} />
      <StatCardGrid />
      <EmployeeTable />
    </AppLayout>
  );
}

export default Dashboard;
