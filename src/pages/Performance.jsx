import React, { useState, useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/common/Card";
import StatusBadge from "../components/employees/StatusBadge";
import { useUser } from "../context/UserContext";
import { performanceReviews } from "../services/mockData";

export default function Performance() {
  const { user } = useUser();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(performanceReviews);
  }, []);

  return (
    <AppLayout pageTitle="Performance Reviews" user={user}>
      <h3
        style={{
          marginTop: "16px",
          fontSize: "18px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Review Cycle — Q2 2026
      </h3>

      <Card style={{ padding: 0, overflow: "hidden", marginTop: "12px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr
              style={{
                backgroundColor: "#F9FAFB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              {["Employee", "Department", "Rating", "Cycle", "Status"].map(
                (h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: "left",
                      padding: "12px 8px",
                      fontSize: "13px",
                      color: "#6B7280",
                    }}
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <tr key={r.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td style={cellStyle}>{r.employeeName}</td>
                <td style={cellStyle}>{r.department}</td>
                <td style={cellStyle}>{r.rating ? `${r.rating} / 5` : "—"}</td>
                <td style={cellStyle}>{r.cycle}</td>
                <td style={cellStyle}>
                  <StatusBadge status={r.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppLayout>
  );
}

const cellStyle = { padding: "12px 8px", fontSize: "14px", color: "#374151" };
