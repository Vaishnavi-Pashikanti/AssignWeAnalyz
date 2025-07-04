import React from "react";
import "../PagesCommon.css";

export default function AdminDashboard() {
  // Example stats, replace with real data as needed
  const stats = [
    { label: "Total Tickets", value: 12, color: "#3d5afe" },
    { label: "Total Solved", value: 8, color: "#00c853" },
    { label: "Total Awaiting Approval", value: 2, color: "#ff5252" },
    { label: "Total in Progress", value: 2, color: "#ffd600" }
  ];

  return (
    <div className="page-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-cards">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="dashboard-card"
            style={{
              background: stat.color,
              color: stat.color === "#ffd600" ? "#232946" : "#fff",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.10)"
            }}
          >
            <div className="dashboard-card-label">{stat.label}</div>
            <div className="dashboard-card-value">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}