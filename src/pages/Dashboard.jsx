import AppLayout from "../components/layout/AppLayout";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatCardGrid from "../components/dashboard/StatCardGrid";

function Dashboard() {
  return (
    <AppLayout
      pageTitle="Dashboard"
      activePath="/dashboard"
      user={{ name: "Shiv Kumar", role: "Co-Founder", photoUrl: "" }}
      onLogout={() => alert("Logout clicked")}
    >
      <WelcomeBanner user={{ name: "Shiv Kumar", photoUrl: "" }} />
      <StatCardGrid />
    </AppLayout>
  );
}

export default Dashboard;