import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="sidebar">
      <ul>
        {user?.role === "admin" && (
          <>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/database">Database</Link></li>
            <li><Link to="/admin/setting">Setting</Link></li>
            <li><Link to="/admin/user-log-history">User Log History</Link></li>
            <li><Link to="/admin/profile-feedback">Profile & Feedback</Link></li>
          </>
        )}
        {user?.role === "user" && (
          <>
            <li><Link to="/user/dashboard">Dashboard</Link></li>
            <li><Link to="/user/my-ticket">My Tickets</Link></li>
            <li><Link to="/user/new-ticket">New Ticket</Link></li>
            <li><Link to="/user/profile-feedback">Profile & Feedback</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}