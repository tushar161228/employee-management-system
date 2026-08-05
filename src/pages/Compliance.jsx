import React from "react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/common/Card";
import { ShieldCheck } from "lucide-react";
import { useUser } from "../context/UserContext";

export default function Compliance() {
  const { user } = useUser();
  return (
    <AppLayout pageTitle="Compliance & Training" user={user}>
      <Card style={{ marginTop: "16px", textAlign: "center", padding: "48px" }}>
        <ShieldCheck
          size={40}
          color="#2563EB"
          style={{ marginBottom: "12px" }}
        />
        <h3 style={{ margin: 0, fontSize: "18px", color: "#111827" }}>
          Compliance & Training
        </h3>
        <p style={{ marginTop: "8px", fontSize: "14px", color: "#6B7280" }}>
          This module is under development.
        </p>
      </Card>
    </AppLayout>
  );
}
