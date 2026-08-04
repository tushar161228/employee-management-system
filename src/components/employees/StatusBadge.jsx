import React from "react";
const statusStyles = {
  Active: { bg: "#DCFCE7", text: "#166534" },
  "On Leave": { bg: "#FEF3C7", text: "#92400E" },
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] || { bg: "#E5E7EB", text: "#374151" };

  return (
    <span
      style={{
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 600,
        backgroundColor: style.bg,
        color: style.text,
      }}
    >
      {status}
    </span>
  );
}