import React from "react";
import { Plus } from "lucide-react";

export default function AddEmployeeButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        backgroundColor: "#2563EB",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "8px",
        padding: "10px 16px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      Add New Employee <Plus size={16} />
    </button>
  );
}
