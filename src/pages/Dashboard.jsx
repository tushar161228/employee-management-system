import AppLayout from "../components/layout/AppLayout";
function Dashboard() {
  return (
    <AppLayout
      pageTitle="Dashboard"
      activePath="/dashboard"
      user={{ name: "Shiv Kumar", role: "Co-Founder", photoUrl: "" }}
      onLogout={() => alert("Logout clicked")}
    >
      <div>Welcome Admin</div>
    </AppLayout>
  );
}
export default Dashboard;