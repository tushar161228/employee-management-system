import React, { useState, useEffect } from "react";
import { Users, Briefcase, ClipboardList, CheckCircle } from "lucide-react";
import StatCard from "./StatCard";
import { dashboardStats } from "../../services/mockData";

export default function StatCardGrid() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    // Later, replace this line with a real API call:
    // getDashboardStats().then(setStats);
    setStats(dashboardStats);
  }, []);

  if (!stats) {
    return (
      <p style={{ marginTop: "16px", color: "#6B7280" }}>Loading stats...</p>
    );
  }

  const cardData = [
    { icon: Users, label: "Total Employees", value: stats.totalEmployees },
    { icon: Briefcase, label: "Active Projects", value: stats.activeProjects },
    {
      icon: ClipboardList,
      label: "Pending Requests",
      value: stats.pendingRequests,
    },
    {
      icon: CheckCircle,
      label: "Overall Attendance",
      value: stats.overallAttendance,
    },
  ];

  return (
    <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
      {cardData.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
