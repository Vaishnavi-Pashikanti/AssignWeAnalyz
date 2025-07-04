import React from "react";
import "../PagesCommon.css";

export default function UserMyTicket() {
  return (
    <div className="page-container">
      <h2>User - My Ticket</h2>
      <p>View and manage your submitted tickets here.</p>
        <div className="ticket-list">
            <div className="ticket-item">
                <h3>Ticket #12345</h3>
                <p>Status: Open</p>
                <p>Issue: Unable to access account</p>
                <p>Submitted on: 2023-10-01</p>
                <button className="btn">View Details</button>
            </div>
            <div className="ticket-item">
                <h3>Ticket #12346</h3>
                <p>Status: Closed</p>
                <p>Issue: Password reset request</p>
                <p>Submitted on: 2023-09-28</p>
                <button className="btn">View Details</button>
            </div>
            <div className="ticket-item">
                <h3>Ticket #12347</h3>
                <p>Status: In Progress</p>
                <p>Issue: Unable to reset password</p>
                <p>Submitted on: 2023-09-25</p>
                <button className="btn">View Details</button>
            </div>
        </div>
    </div>
    );
}