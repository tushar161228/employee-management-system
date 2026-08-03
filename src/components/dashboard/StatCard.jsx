import React from "react";
import Card from "../common/Card";

export default function StatCard({ icon: Icon, label, value, iconBg = "#DBEAFE", iconColor = "#2563EB" }) {
  return (
    <Card style={{ flex: 1, display: "flex", alignItems: "center", gap: "12px" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "8px",
          backgroundColor: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={20} color={iconColor} />
      </div>
      <div>
        <p style={{ margin: 0, fontSize: "13px", color: "#6B7280" }}>{label}</p>
        <p style={{ margin: "2px 0 0", fontSize: "20px", fontWeight: 700, color: "#111827" }}>
          {value}
        </p>
      </div>
    </Card>
  );
}