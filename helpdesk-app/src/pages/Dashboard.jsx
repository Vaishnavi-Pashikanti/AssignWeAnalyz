import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

export default function Dashboard() {
  const [ticketCount, setTicketCount] = useState(0);
  const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios.get(`${API}/api/tickets`)
      .then(res => setTicketCount(res.data.length))
      .catch(() => setTicketCount(0));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <span className="dashboard-card-title">Total Tickets</span>
          <span className="dashboard-card-value">{ticketCount}</span>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-title">Open Tickets</span>
          <span className="dashboard-card-value">{ticketCount}</span>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-title">Closed Tickets</span>
          <span className="dashboard-card-value">0</span>
        </div>
      </div>
    </div>
  );
}