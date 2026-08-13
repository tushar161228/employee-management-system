import React, { useState, useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/common/Card";
import StatusBadge from "../components/employees/StatusBadge";
import { useUser } from "../context/UserContext";
import { complianceTrainings } from "../services/mockData";

export default function Compliance() {
  const { user } = useUser();
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    setTrainings(complianceTrainings);
  }, []);

  return (
    <AppLayout pageTitle="Compliance & Training" user={user}>
      <h3 style={{ marginTop: "16px", fontSize: "18px", fontWeight: 700, color: "#111827" }}>
        Assigned Trainings
      </h3>

      <Card style={{ padding: 0, overflow: "hidden", marginTop: "12px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
              {["Training", "Assigned To", "Due Date", "Status"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "12px 8px", fontSize: "13px", color: "#6B7280" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trainings.map((t) => (
              <tr key={t.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td style={cellStyle}>{t.title}</td>
                <td style={cellStyle}>{t.assignedTo}</td>
                <td style={cellStyle}>{t.dueDate}</td>
                <td style={cellStyle}><StatusBadge status={t.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppLayout>
  );
}

const cellStyle = { padding: "12px 8px", fontSize: "14px", color: "#374151" };