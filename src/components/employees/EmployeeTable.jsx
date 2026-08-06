import React, { useState, useEffect } from "react";
import Card from "../common/Card";
import EmployeeRow from "./EmployeeRow";
import SearchBar from "./SearchBar";
import AddEmployeeButton from "./AddEmployeeButton";
import AddEmployeeModal from "./AddEmployeeModal";
import { employees } from "../../services/mockData";

const headers = [
  "Photo",
  "Name",
  "Employee ID",
  "Department",
  "Role",
  "Location",
  "Status",
  "Actions",
];

export default function EmployeeTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [modalMode, setModalMode] = useState(null); // "add" | "edit" | "view" | null
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    setData(employees);
  }, []);

  const handleSave = (employee) => {
    if (modalMode === "edit") {
      setData((prev) => prev.map((e) => (e.id === employee.id ? employee : e)));
    } else {
      setData((prev) => [...prev, employee]);
    }
  };

  const handleDeactivate = (employee) => {
    setData((prev) =>
      prev.map((e) =>
        e.id === employee.id ? { ...e, status: "On Leave" } : e,
      ),
    );
  };

  const filteredData = data.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.id.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={{ marginTop: "24px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
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
          Employee Directory Overview
        </h3>
        <div style={{ display: "flex", gap: "12px" }}>
          <SearchBar value={search} onChange={setSearch} />
          <AddEmployeeButton
            onClick={() => {
              setSelectedEmployee(null);
              setModalMode("add");
            }}
          />
        </div>
      </div>

      <Card style={{ padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr
              style={{
                backgroundColor: "#F9FAFB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              {headers.map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: "left",
                    padding: "12px 8px",
                    fontSize: "13px",
                    color: "#6B7280",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((emp, i) => (
              <EmployeeRow
                key={`${emp.id}-${i}`}
                employee={emp}
                onEdit={() => {
                  setSelectedEmployee(emp);
                  setModalMode("edit");
                }}
                onView={() => {
                  setSelectedEmployee(emp);
                  setModalMode("view");
                }}
                onDeactivate={() => handleDeactivate(emp)}
              />
            ))}
          </tbody>
        </table>
      </Card>

      {modalMode && (
        <AddEmployeeModal
          onClose={() => setModalMode(null)}
          onSave={handleSave}
          initialData={selectedEmployee}
          readOnly={modalMode === "view"}
        />
      )}
    </div>
  );
}
