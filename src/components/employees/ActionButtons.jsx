import React from "react";
import { Pencil, Eye, XCircle } from "lucide-react";

export default function ActionButtons({ onEdit, onView, onDeactivate }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px" }}>
      <button
        onClick={onEdit}
        style={{ display: "flex", alignItems: "center", gap: "4px", background: "none", border: "none", color: "#374151", cursor: "pointer" }}
      >
        <Pencil size={14} /> Edit
      </button>

      <button
        onClick={onView}
        style={{ display: "flex", alignItems: "center", gap: "4px", background: "none", border: "none", color: "#374151", cursor: "pointer" }}
      >
        <Eye size={14} /> View
      </button>

      <button
        onClick={onDeactivate}
        style={{ display: "flex", alignItems: "center", gap: "4px", background: "none", border: "none", color: "#DC2626", cursor: "pointer" }}
      >
        <XCircle size={14} /> Deactivate
      </button>
    </div>
  );
}