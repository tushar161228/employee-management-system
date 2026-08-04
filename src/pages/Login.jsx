import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    console.log("Login attempt:", credentials);
    // later: call real auth API here
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EFF3F8",
      }}
    >
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}
