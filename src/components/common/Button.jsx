import React from "react";

const variants = {
  primary: { bg: "#2563EB", color: "#FFFFFF", border: "none" },
  secondary: { bg: "#FFFFFF", color: "#374151", border: "1px solid #E5E7EB" },
  danger: { bg: "#DC2626", color: "#FFFFFF", border: "none" },
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  style = {},
}) {
  const { bg, color, border } = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: disabled ? "#9CA3AF" : bg,
        color,
        border,
        borderRadius: "8px",
        padding: "10px 16px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        ...style,
      }}
    >
      {children}
    </button>
  );
}
