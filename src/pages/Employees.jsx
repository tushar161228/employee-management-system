import AppLayout from "../components/layout/AppLayout";
import EmployeeTable from "../components/employees/EmployeeTable";
import { useUser } from "../context/UserContext";

function Employees() {
  const { user } = useUser();

  return (
    <AppLayout pageTitle="Employee Profiles" user={user}>
      <EmployeeTable />
    </AppLayout>
  );
}

export default Employees;
