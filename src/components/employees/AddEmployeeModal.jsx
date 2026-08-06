import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Button from "../common/Button";

export default function AddEmployeeModal({
  onClose,
  onSave,
  initialData,
  readOnly = false,
}) {
  const [form, setForm] = useState(
    initialData || {
      name: "",
      id: "",
      department: "",
      role: "",
      location: "",
      status: "Active",
    },
  );

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, photoUrl: form.photoUrl || "" });
    onClose();
  };

  const title = readOnly
    ? "Employee Details"
    : initialData
      ? "Edit Employee"
      : "Add New Employee";

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "18px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <X size={20} color="#6B7280" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <Field
            label="Full Name"
            value={form.name}
            onChange={handleChange("name")}
            required
            disabled={readOnly}
          />
          <Field
            label="Employee ID"
            value={form.id}
            onChange={handleChange("id")}
            required
            disabled={readOnly}
          />
          <Field
            label="Department"
            value={form.department}
            onChange={handleChange("department")}
            required
            disabled={readOnly}
          />
          <Field
            label="Role"
            value={form.role}
            onChange={handleChange("role")}
            required
            disabled={readOnly}
          />
          <Field
            label="Location"
            value={form.location}
            onChange={handleChange("location")}
            required
            disabled={readOnly}
          />

          <label style={labelStyle}>Status</label>
          <select
            value={form.status}
            onChange={handleChange("status")}
            disabled={readOnly}
            style={inputStyle}
          >
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
          </select>

          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            {!readOnly && (
              <Button type="submit" variant="primary">
                {initialData ? "Save Changes" : "Add Employee"}
              </Button>
            )}
            <Button type="button" variant="secondary" onClick={onClose}>
              {readOnly ? "Close" : "Cancel"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, required, disabled }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={labelStyle}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        style={{
          ...inputStyle,
          backgroundColor: disabled ? "#F9FAFB" : "#FFFFFF",
        }}
      />
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 100,
};

const modalStyle = {
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
  padding: "24px",
  width: "420px",
  maxHeight: "90vh",
  overflowY: "auto",
};

const labelStyle = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: "#374151",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  border: "1px solid #E5E7EB",
  borderRadius: "8px",
  padding: "10px 12px",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};
