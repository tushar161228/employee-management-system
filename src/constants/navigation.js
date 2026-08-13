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

export const NAV_ITEMS = [
  { label: "Dashboard", icon: Home, path: "/dashboard" },
  { label: "Employee Profiles", icon: Users, path: "/employees" },
  { label: "Leave Management", icon: CalendarDays, path: "/leave" },
  { label: "Payroll & Expenses", icon: Wallet, path: "/payroll" },
  { label: "Performance Reviews", icon: TrendingUp, path: "/performance" },
  { label: "Compliance & Training", icon: ShieldCheck, path: "/compliance" },
  { label: "Recruitment", icon: UserPlus, path: "/recruitment" },
  { label: "Settings", icon: SettingsIcon, path: "/settings" },
];