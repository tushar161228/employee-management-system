import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setUser } = useUser();

  const handleLogin = ({ name }) => {
    setUser((prev) => ({
      ...prev,
      name,
      photoUrl: "",
    }));
    login();
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
