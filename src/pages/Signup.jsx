import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import logo from "../assets/image.png";
import { useAuth } from "../context/AuthContext";
import { useUser } from "../context/UserContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      name,
      role: "Employee",
      photoUrl: "",
    });
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
      <div
        style={{
          width: "400px",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={logo}
            alt="Sutra Sync Technologies"
            style={{ width: "56px", height: "56px", marginBottom: "8px" }}
          />
          <div style={{ fontWeight: 700, fontSize: "20px", color: "#111827" }}>
            Sutra Sync Technologies
          </div>
        </div>

        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "24px",
          }}
        >
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={inputWrapperStyle}>
            <User size={18} color="#6B7280" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ ...inputWrapperStyle, marginTop: "12px" }}>
            <Mail size={18} color="#6B7280" />
            <input
              type="email"
              placeholder="Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ ...inputWrapperStyle, marginTop: "12px" }}>
            <Lock size={18} color="#6B7280" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "20px",
              backgroundColor: "#1E3A8A",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            Sign Up <ArrowRight size={16} />
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "13px", color: "#374151" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#1E3A8A",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputWrapperStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  border: "1px solid #E5E7EB",
  borderRadius: "8px",
  padding: "12px",
};
const inputStyle = {
  border: "none",
  outline: "none",
  fontSize: "14px",
  width: "100%",
};
