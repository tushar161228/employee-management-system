import React, { useState, useEffect } from "react";
import AppLayout from "../components/layout/AppLayout";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Avatar from "../components/common/Avatar";
import StatusBadge from "../components/employees/StatusBadge";
import { Megaphone, Pencil, Trash2, Plus } from "lucide-react";
import { useUser } from "../context/UserContext";
import {
  leaveBalance,
  leaveRequests,
  announcements,
} from "../services/mockData";

export default function Leave() {
  const { user } = useUser();
  const [requests, setRequests] = useState([]);

  const [announcementList, setAnnouncementList] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [showAnnouncementForm, setShowAnnouncementForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setAnnouncementList(announcements);
  }, []);

  useEffect(() => {
    setRequests(leaveRequests);
  }, []);

  const resetForm = () => {
    setNewTitle("");
    setNewBody("");
    setEditingId(null);
    setShowAnnouncementForm(false);
  };

  const handlePostAnnouncement = (e) => {
    e.preventDefault();
    if (editingId) {
      setAnnouncementList((prev) =>
        prev.map((a) =>
          a.id === editingId ? { ...a, title: newTitle, body: newBody } : a,
        ),
      );
    } else {
      const newAnnouncement = {
        id: `A${Date.now()}`,
        title: newTitle,
        body: newBody,
      };
      setAnnouncementList((prev) => [newAnnouncement, ...prev]);
    }
    resetForm();
  };

  const handleEdit = (announcement) => {
    setNewTitle(announcement.title);
    setNewBody(announcement.body);
    setEditingId(announcement.id);
    setShowAnnouncementForm(true);
  };

  const handleDelete = (id) => {
    setAnnouncementList((prev) => prev.filter((a) => a.id !== id));
  };

  const handleDecision = (id, status) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r)),
    );
  };

  const pendingCount = requests.filter((r) => r.status === "Pending").length;

  return (
    <AppLayout pageTitle="Leave Management" user={user}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "16px",
          alignItems: "stretch",
        }}
      >
        {/* Leave Balance */}
        <div
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h3 style={sectionTitleStyle}>My Leave Balance</h3>
          <div style={{ display: "flex", gap: "16px" }}>
            <BalanceCard
              label="Casual Leave (CL)"
              used={leaveBalance.casual.used}
              total={leaveBalance.casual.total}
            />
            <BalanceCard
              label="Sick Leave (SL)"
              used={leaveBalance.sick.used}
              total={leaveBalance.sick.total}
            />
            <BalanceCard
              label="Earned Leave (EL)"
              used={leaveBalance.earned.used}
              total={leaveBalance.earned.total}
            />
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <Button
              variant="primary"
              onClick={() => alert("Open Request Leave form")}
            >
              Request New Leave
            </Button>
            <Button
              variant="secondary"
              onClick={() => alert("Show request history")}
            >
              View Request History
            </Button>
          </div>
        </div>

        {/* Announcements */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "1px solid #D1D5DB",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
            padding: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Megaphone size={18} color="#1E3A8A" />
              <h4
                style={{
                  margin: 0,
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "#111827",
                }}
              >
                HR Announcements
              </h4>
            </div>
            <button
              onClick={() => {
                if (showAnnouncementForm) resetForm();
                else setShowAnnouncementForm(true);
              }}
              style={newButtonStyle}
            >
              {showAnnouncementForm ? (
                "Cancel"
              ) : (
                <>
                  <Plus size={14} /> New
                </>
              )}
            </button>
          </div>

          {showAnnouncementForm && (
            <form
              onSubmit={handlePostAnnouncement}
              style={{
                marginBottom: "16px",
                paddingBottom: "16px",
                borderBottom: "1px dashed #D1D5DB",
              }}
            >
              <input
                type="text"
                placeholder="Announcement title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
                style={announcementInputStyle}
              />
              <textarea
                placeholder="Details..."
                value={newBody}
                onChange={(e) => setNewBody(e.target.value)}
                required
                rows={3}
                style={{
                  ...announcementInputStyle,
                  marginTop: "8px",
                  resize: "none",
                }}
              />
              <Button
                type="submit"
                variant="primary"
                style={{
                  marginTop: "10px",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                {editingId ? "Update Announcement" : "Post Announcement"}
              </Button>
            </form>
          )}

          {announcementList.length === 0 ? (
            <p style={{ fontSize: "13px", color: "#9CA3AF" }}>
              No announcements yet.
            </p>
          ) : (
            announcementList.map((a) => (
              <div
                key={a.id}
                style={{
                  marginBottom: "12px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid #F3F4F6",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "8px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "13.5px",
                      fontWeight: 700,
                      color: "#111827",
                    }}
                  >
                    {a.title}
                  </p>
                  <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                    <button
                      onClick={() => handleEdit(a)}
                      style={iconBtnStyle("#2563EB")}
                      title="Edit"
                    >
                      <Pencil size={13} />
                    </button>
                    <button
                      onClick={() => handleDelete(a.id)}
                      style={iconBtnStyle("#DC2626")}
                      title="Delete"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "12.5px",
                    color: "#4B5563",
                    fontWeight: 500,
                  }}
                >
                  {a.body}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pending Approvals */}
      <h3 style={{ ...sectionTitleStyle, marginTop: "28px" }}>
        Pending Leave Approvals ({pendingCount})
      </h3>

      <Card
        style={{
          padding: 0,
          overflow: "hidden",
          marginTop: "12px",
          border: "1px solid #D1D5DB",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr
              style={{
                backgroundColor: "#F9FAFB",
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              {[
                "Employee",
                "Dept",
                "Leave Type",
                "From - To",
                "Days",
                "Reason",
                "Status",
                "Actions",
              ].map((h) => (
                <th key={h} style={theadStyle}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <tr key={r.id} style={{ borderBottom: "1px solid #F3F4F6" }}>
                <td
                  style={{
                    ...cellStyle,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Avatar src={r.photoUrl} name={r.employeeName} size="sm" />
                  <span style={{ color: "#1E3A8A", fontWeight: 700 }}>
                    {r.employeeName}
                  </span>
                </td>
                <td style={cellStyle}>{r.department}</td>
                <td style={cellStyle}>{r.type}</td>
                <td style={cellStyle}>
                  {r.from} - {r.to}
                </td>
                <td style={{ ...cellStyle, fontWeight: 700 }}>{r.days}</td>
                <td style={cellStyle}>{r.reason}</td>
                <td style={cellStyle}>
                  <StatusBadge status={r.status} />
                </td>
                <td style={cellStyle}>
                  {r.status === "Pending" ? (
                    <div style={{ display: "flex", gap: "10px" }}>
                      <button
                        onClick={() => handleDecision(r.id, "Approved")}
                        style={actionBtnStyle("#16A34A")}
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDecision(r.id, "Rejected")}
                        style={actionBtnStyle("#DC2626")}
                      >
                        Decline
                      </button>
                    </div>
                  ) : (
                    <span style={{ color: "#9CA3AF", fontSize: "13px" }}>
                      —
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </AppLayout>
  );
}

function BalanceCard({ label, used, total }) {
  const percent = Math.min((used / total) * 100, 100);
  return (
    <Card style={{ flex: 1, border: "1px solid #D1D5DB" }}>
      <p
        style={{
          margin: 0,
          fontSize: "13px",
          color: "#6B7280",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      <p
        style={{
          margin: "4px 0 8px",
          fontSize: "26px",
          fontWeight: 800,
          color: "#111827",
        }}
      >
        {total - used}
      </p>
      <p
        style={{
          margin: "0 0 8px",
          fontSize: "12px",
          color: "#9CA3AF",
          fontWeight: 500,
        }}
      >
        {used} Days Used / {total} Total
      </p>
      <div
        style={{
          height: "6px",
          backgroundColor: "#E5E7EB",
          borderRadius: "999px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            height: "100%",
            backgroundColor: "#1E3A8A",
          }}
        />
      </div>
    </Card>
  );
}

const sectionTitleStyle = {
  margin: 0,
  fontSize: "16px",
  fontWeight: 800,
  color: "#111827",
};

const theadStyle = {
  textAlign: "left",
  padding: "12px 8px",
  fontSize: "13px",
  color: "#6B7280",
  fontWeight: 700,
};

const cellStyle = {
  padding: "12px 8px",
  fontSize: "14px",
  color: "#374151",
  fontWeight: 500,
};

const actionBtnStyle = (color) => ({
  background: "none",
  border: "none",
  color,
  fontSize: "13px",
  fontWeight: 700,
  cursor: "pointer",
});

const iconBtnStyle = (color) => ({
  background: "none",
  border: "none",
  color,
  cursor: "pointer",
  padding: "2px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const newButtonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  backgroundColor: "#1E3A8A",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "6px",
  padding: "6px 12px",
  fontSize: "12.5px",
  fontWeight: 700,
  cursor: "pointer",
};

const announcementInputStyle = {
  width: "100%",
  border: "1px solid #D1D5DB",
  borderRadius: "6px",
  padding: "9px 12px",
  fontSize: "13px",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
  fontWeight: 500,
};
