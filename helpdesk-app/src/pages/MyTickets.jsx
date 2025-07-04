import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyTickets.css";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    axios.get(`${API}/api/tickets/my-tickets`)
      .then(res => setTickets(res.data))
      .catch(() => setTickets([]));
  }, []);

  return (
    <div className="my-tickets-container">
      <h2>My Tickets</h2>
      {tickets.length === 0 ? (
        <p className="no-tickets">No tickets found.</p>
      ) : (
        <ul className="ticket-list">
          {tickets.map(ticket => (
            <li key={ticket.id} className="ticket-card">
              <h3>{ticket.title}</h3>
              <p>{ticket.desc}</p>
              <span className="ticket-id">ID: {ticket.id}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}