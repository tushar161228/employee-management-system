import React from "react";
import Avatar from "../common/Avatar";
import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

const cellStyle = { padding: "12px 8px", fontSize: "14px", color: "#374151" };

export default function EmployeeRow({ employee }) {
  return (
    <tr style={{ borderBottom: "1px solid #F3F4F6" }}>
      <td style={cellStyle}>
        <Avatar src={employee.photoUrl} name={employee.name} size="sm" />
      </td>
      <td style={{ ...cellStyle, color: "#2563EB", fontWeight: 500 }}>
        {employee.name}
      </td>
      <td style={cellStyle}>{employee.id}</td>
      <td style={cellStyle}>{employee.department}</td>
      <td style={cellStyle}>{employee.role}</td>
      <td style={cellStyle}>{employee.location}</td>
      <td style={cellStyle}>
        <StatusBadge status={employee.status} />
      </td>
      <td style={cellStyle}>
        <ActionButtons
          onEdit={() => alert(`Edit ${employee.name}`)}
          onView={() => alert(`View ${employee.name}`)}
          onDeactivate={() => alert(`Deactivate ${employee.name}`)}
        />
      </td>
    </tr>
  );
}
