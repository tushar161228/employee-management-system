import React, { useState, useEffect } from "react";
import Card from "../common/Card";
import EmployeeRow from "./EmployeeRow";
import SearchBar from "./SearchBar";
import AddEmployeeButton from "./AddEmployeeButton";
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

  useEffect(() => {
    setData(employees); // later: replace with real API call
  }, []);

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
            onClick={() => alert("Add New Employee clicked")}
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
              <EmployeeRow key={`${emp.id}-${i}`} employee={emp} />
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
