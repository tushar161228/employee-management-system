import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "../common/Avatar";
import { User, Settings, LogOut, ChevronDown } from "lucide-react";

export default function Navbar({ pageTitle = "Dashboard", user, onLogout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
        position: "relative",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#111827" }}>
        {pageTitle}
      </h2>

      <div ref={menuRef} style={{ position: "relative" }}>
        {/* Clickable profile trigger */}
        <div
          onClick={() => setOpen(!open)}
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
        >
          <Avatar src={user?.photoUrl} name={user?.name} size="md" />
          <span style={{ fontSize: "14px", color: "#111827" }}>
            {user?.name} {user?.role && <span style={{ color: "#6B7280" }}>({user.role})</span>}
          </span>
          <ChevronDown size={16} color="#6B7280" />
        </div>

        {/* Dropdown menu */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "44px",
              right: 0,
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              width: "180px",
              zIndex: 10,
              overflow: "hidden",
            }}
          >
            <Link to="/profile" style={menuItemStyle}>
              <User size={16} /> My Profile
            </Link>
            <Link to="/settings" style={menuItemStyle}>
              <Settings size={16} /> Settings
            </Link>
            <button
              onClick={onLogout}
              style={{ ...menuItemStyle, border: "none", background: "none", width: "100%", cursor: "pointer", color: "#DC2626" }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const menuItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 14px",
  fontSize: "14px",
  color: "#374151",
  textDecoration: "none",
  borderBottom: "1px solid #F3F4F6",
};