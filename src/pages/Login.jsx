import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (credentials) => {
    console.log("Login attempt:", credentials);
    login(); // marks user as authenticated
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
