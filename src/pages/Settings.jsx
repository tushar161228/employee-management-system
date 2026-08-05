import React, { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/common/Card";
import Avatar from "../components/common/Avatar";
import Button from "../components/common/Button";
import { useUser } from "../context/UserContext";

export default function Settings() {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...user, name, role });
    alert("Profile updated!");
  };

  return (
    <AppLayout pageTitle="Settings" user={user}>
      <Card style={{ maxWidth: "480px", marginTop: "16px" }}>
        <h3
          style={{
            marginTop: 0,
            marginBottom: "20px",
            fontSize: "18px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Profile Settings
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <Avatar src={user.photoUrl} name={user.name} size="lg" />
          <div>
            <p style={{ margin: 0, fontSize: "14px", color: "#6B7280" }}>
              Profile Photo
            </p>
            <p
              style={{ margin: "2px 0 0", fontSize: "13px", color: "#9CA3AF" }}
            >
              Upload feature coming soon
            </p>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <label style={{ ...labelStyle, marginTop: "16px" }}>
            Role / Title
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={inputStyle}
          />

          <div style={{ marginTop: "24px" }}>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </div>
        </form>
      </Card>
    </AppLayout>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "13px",
  color: "#374151",
  marginBottom: "6px",
  fontWeight: 600,
};

const inputStyle = {
  width: "100%",
  border: "1px solid #E5E7EB",
  borderRadius: "8px",
  padding: "10px 12px",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};
