import React from "react";
import "../PagesCommon.css";

export default function UserDashboard() {
  return (
    <div className="page-container">
      <h2>User - Dashboard</h2>
      <p>Welcome to your dashboard. View your ticket activity and updates here.</p>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Your Tickets</h3>
          <p>View and manage your support tickets.</p>
          <button className="btn">View Tickets</button>
        </div>
        <div className="dashboard-card">
          <h3>Recent Activity</h3>
          <p>Check your recent activity and updates on tickets.</p>
          <button className="btn">View Activity</button>
        </div>
        <div className="dashboard-card">
          <h3>Profile Settings</h3>
          <p>Update your profile information and preferences.</p>
            <button className="btn">Edit Profile</button>
        </div>
      </div>
        <div className="dashboard-footer">
            <p>&copy; 2023 Helpdesk App. All rights reserved.</p>
        </div>
    </div>
  );
}