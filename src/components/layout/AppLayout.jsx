import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default function AppLayout({ pageTitle, activePath, user, onLogout, children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar activePath={activePath} />
      <div style={{ flex: 1, minHeight: "100vh", backgroundColor: "#F9FAFB" }}>
        <Navbar pageTitle={pageTitle} user={user} onLogout={onLogout} />
        <div style={{ padding: "24px" }}>{children}</div>
      </div>
    </div>
  );
}