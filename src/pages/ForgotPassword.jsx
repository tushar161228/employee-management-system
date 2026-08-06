import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import logo from "../assets/image.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset requested for:", email);
    setSubmitted(true);
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

        {!submitted ? (
          <>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              Reset Your Password
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#6B7280",
                marginBottom: "20px",
              }}
            >
              Enter your work email and we'll send you a reset link.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={inputWrapperStyle}>
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

              <button type="submit" style={buttonStyle}>
                Send Reset Link <ArrowRight size={16} />
              </button>
            </form>
          </>
        ) : (
          <>
            <CheckCircle
              size={40}
              color="#16A34A"
              style={{ marginBottom: "12px" }}
            />
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              Check Your Email
            </h2>
            <p style={{ fontSize: "13px", color: "#6B7280" }}>
              We've sent a password reset link to <strong>{email}</strong>
            </p>
          </>
        )}

        <p style={{ marginTop: "20px", fontSize: "13px", color: "#374151" }}>
          <Link
            to="/login"
            style={{
              color: "#1E3A8A",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Back to Sign In
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
const buttonStyle = {
  width: "100%",
  marginTop: "16px",
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
};
