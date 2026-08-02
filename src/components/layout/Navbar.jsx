import React from "react";
import Avatar from "../common/Avatar";
export default function Navbar({ pageTitle = "Dashboard", user, onLogout }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        {pageTitle}
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar src={user?.photoUrl} name={user?.name} size="md" />
        <span style={{ fontSize: "14px", color: "#111827" }}>
          {user?.name}{" "}
          {user?.role && (
            <span style={{ color: "#6B7280" }}>({user.role})</span>
          )}
        </span>

        <span style={{ color: "#D1D5DB" }}>|</span>

        <button
          onClick={onLogout}
          style={{
            background: "none",
            border: "none",
            color: "#2563EB",
            fontSize: "14px",
            cursor: "pointer",
            padding: 0,
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
