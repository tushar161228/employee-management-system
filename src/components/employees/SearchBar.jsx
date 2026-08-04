import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        padding: "8px 12px",
        width: "260px",
      }}
    >
      <Search size={16} color="#9CA3AF" />
      <input
        type="text"
        placeholder="Search employees by name, ID..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          fontSize: "14px",
          width: "100%",
        }}
      />
    </div>
  );
}
