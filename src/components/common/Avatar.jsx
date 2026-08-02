import React, { useState } from "react";
const SIZE_MAP = {
  sm: 32, // used in Employee table rows
  md: 44, // used in Navbar (top-right)
  lg: 56, // used in WelcomeBanner
};

function getInitials(name = "") {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export default function Avatar({ src, name = "", size = "md" }) {
  const [imgError, setImgError] = useState(false);
  const dimension = SIZE_MAP[size] || SIZE_MAP.md;

  const baseStyle = {
    width: dimension,
    height: dimension,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flexShrink: 0,
    backgroundColor: "#E5E7EB",
    color: "#374151",
    fontWeight: 600,
    fontSize: dimension / 2.5,
  };

  if (!src || imgError) {
    return (
      <div style={baseStyle} title={name}>
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div style={baseStyle}>
      <img
        src={src}
        alt={name || "avatar"}
        onError={() => setImgError(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
