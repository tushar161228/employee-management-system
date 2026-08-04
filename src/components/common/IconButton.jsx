import React from "react";

export default function IconButton({
  icon: Icon,
  label,
  onClick,
  color = "#374151",
  size = 14,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        background: "none",
        border: "none",
        color,
        fontSize: "13px",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <Icon size={size} />
      {label}
    </button>
  );
}
