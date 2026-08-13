import React, { useState, useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/common/Card";
import StatusBadge from "../components/employees/StatusBadge";
import { useUser } from "../context/UserContext";
import { recruitmentPipeline } from "../services/mockData";

export default function Recruitment() {
  const { user } = useUser();
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    setCandidates(recruitmentPipeline);
  }, []);

  return (
    <AppLayout pageTitle="Recruitment" user={user}>
      <h3
        style={{
          marginTop: "16px",
          fontSize: "18px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        Candidate Pipeline
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
              {["Candidate", "Role", "Stage", "Applied On"].map((h) => (
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
              ))}
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td style={cellStyle}>{c.candidateName}</td>
                <td style={cellStyle}>{c.role}</td>
                <td style={cellStyle}>
                  <StatusBadge status={c.stage} />
                </td>
                <td style={cellStyle}>{c.appliedOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppLayout>
  );
}

const cellStyle = { padding: "12px 8px", fontSize: "14px", color: "#374151" };
