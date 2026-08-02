import React from "react";
import logo from "../../assets/image.png";
import {
  Home,
  Users,
  CalendarDays,
  Wallet,
  TrendingUp,
  ShieldCheck,
  UserPlus,
  Settings as SettingsIcon,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home, path: "/dashboard" },
  { label: "Employee Profiles", icon: Users, path: "/employees" },
  { label: "Leave Management", icon: CalendarDays, path: "/leave" },
  { label: "Payroll & Expenses", icon: Wallet, path: "/payroll" },
  { label: "Performance Reviews", icon: TrendingUp, path: "/performance" },
  { label: "Compliance & Training", icon: ShieldCheck, path: "/compliance" },
  { label: "Recruitment", icon: UserPlus, path: "/recruitment" },
  { label: "Settings", icon: SettingsIcon, path: "/settings" },
];

export default function Sidebar({ activePath = "/dashboard" }) {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#FFFFFF",
        borderRight: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        padding: "20px 12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "0 12px 24px",
        }}
      >
        <img
          src={logo}
          alt="Sutra Sync Technologies"
          style={{ width: "50px", height: "50px" }}
        />
        <span style={{ fontWeight: 700, fontSize: "18px", color: "#111827" }}>
          Sutra Sync Technologies
        </span>
      </div>

      {/* Nav Items */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {navItems.map(({ label, icon: Icon, path }) => {
          const isActive = path === activePath;
          return (
            <div
              key={path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: isActive ? "#2563EB" : "transparent",
                color: isActive ? "#FFFFFF" : "#374151",
                fontWeight: isActive ? 600 : 500,
                fontSize: "14px",
              }}
            >
              <Icon size={18} />
              {label}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
