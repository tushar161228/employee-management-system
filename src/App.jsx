import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Performance from "./pages/Performance";
import Compliance from "./pages/Compliance";
import Recruitment from "./pages/Recruitment";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;