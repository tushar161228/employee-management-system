import React from "react";
import Avatar from "../common/Avatar";
import { getShortDate, getFullDate } from "../../utils/formatDate";


export default function WelcomeBanner({ user }) {
  const shortDate = getShortDate();
  const fullDate = getFullDate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Avatar src={user?.photoUrl} name={user?.name} size="lg" />
        <div>
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#111827" }}>
            Welcome back, {user?.name}!
          </h2>
          <p style={{ margin: "4px 0 0", fontSize: "14px", color: "#6B7280" }}>
            {shortDate}
          </p>
        </div>
      </div>

      <div style={{ fontSize: "14px", color: "#374151" }}>{fullDate}</div>
    </div>
  );
}