import React from "react";
const statusStyles = {
  Active: { bg: "#DCFCE7", text: "#166534" },
  "On Leave": { bg: "#FEF3C7", text: "#92400E" },
  Approved: { bg: "#DCFCE7", text: "#166534" },
  Pending: { bg: "#FEF3C7", text: "#92400E" },
  Rejected: { bg: "#FEE2E2", text: "#991B1B" },
  Paid: { bg: "#DCFCE7", text: "#166534" },
  Completed: { bg: "#DCFCE7", text: "#166534" },
  Applied: { bg: "#E0E7FF", text: "#3730A3" },
  Screening: { bg: "#FEF3C7", text: "#92400E" },
  Interview: { bg: "#DBEAFE", text: "#1E40AF" },
  Offer: { bg: "#DCFCE7", text: "#166534" },
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