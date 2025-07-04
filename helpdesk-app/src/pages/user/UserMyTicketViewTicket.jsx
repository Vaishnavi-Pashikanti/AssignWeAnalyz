import React from "react";
import "../PagesCommon.css";

export default function UserMyTicketViewTicket() {
  return (
    <div className="page-container">
      <h2>User - My Ticket / View Ticket</h2>
      <div className="ticket-details">
        <h3>Ticket #12345</h3>
        <p><strong>Status:</strong> Open</p>
        <p><strong>Issue:</strong> Unable to access account</p>
        <p><strong>Description:</strong> I am unable to log in with my credentials. Please assist.</p>
        <p><strong>Submitted on:</strong> 2023-10-01</p>
        <button className="btn">Back to My Tickets</button>
        <button className="btn">Edit Ticket</button>
        <button className="btn">Close Ticket</button>   
        </div>
        <div className="comments-section">
        <h3>Comments</h3>
        <div className="comment">
            <p><strong>Admin:</strong> We are looking into your issue and will get back to you shortly.</p>
            <p className="comment-date">2023-10-02</p>
        </div>
        <div className="comment">
            <p><strong>User:</strong> Thank you for the update. Please let me know if you need any more information.</p>
            <p className="comment-date">2023-10-03</p>
        </div>
        <textarea placeholder="Add a comment..." className="comment-input"></textarea>
        <button className="btn">Submit Comment</button>
      </div>
    </div>
  );
}