import React, { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import logo from "../../assets/image.png";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.({ email, password, remember });
  };

  return (
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
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "24px",
        }}
      >
        <img
          src={logo}
          alt="Sutra Sync Technologies"
          style={{ width: "48px", height: "48px" }}
        />
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#111827",
              lineHeight: 1.1,
            }}
          >
            Sutra Sync
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#111827",
              lineHeight: 1.1,
            }}
          >
            Technologies
          </div>
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
        Welcome Back to Sutra Sync
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
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

        {/* Password */}
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

        {/* Forgot password */}
        <div style={{ textAlign: "right", marginTop: "8px" }}>
          <a
            href="#"
            style={{
              fontSize: "13px",
              color: "#1E3A8A",
              textDecoration: "none",
            }}
          >
            Forgot Password?
          </a>
        </div>

        {/* Sign In button */}
        <button
          type="submit"
          style={{
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
          }}
        >
          Sign In <ArrowRight size={16} />
        </button>

        {/* Remember me */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "16px",
            fontSize: "14px",
            color: "#374151",
          }}
        >
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          Remember Me
        </label>
      </form>

      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: "20px 0",
        }}
      >
        <div style={{ flex: 1, height: "1px", backgroundColor: "#E5E7EB" }} />
        <span style={{ fontSize: "13px", color: "#6B7280" }}>
          Or sign in with
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#E5E7EB" }} />
      </div>

      {/* Social buttons */}
      <div style={{ display: "flex", gap: "12px" }}>
        <button style={socialButtonStyle}>Microsoft</button>
        <button style={socialButtonStyle}>Google</button>
      </div>

      {/* Contact HR */}
      <p style={{ marginTop: "20px", fontSize: "13px", color: "#374151" }}>
        Don't have an account?{" "}
        <a
          href="#"
          style={{ color: "#1E3A8A", fontWeight: 600, textDecoration: "none" }}
        >
          Contact HR.
        </a>
      </p>
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

const socialButtonStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  border: "1px solid #E5E7EB",
  borderRadius: "8px",
  padding: "10px",
  fontSize: "14px",
  fontWeight: 500,
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
};
