import React, { useState } from "react";
import axios from "axios";
import "./NewTicket.css";

export default function NewTicket() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [success, setSuccess] = useState(false);
  const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/tickets`, {
        title,
        desc,
      });
      setSuccess(true);
      setTitle("");
      setDesc("");
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      alert("Failed to submit ticket.");
    }
  };

  return (
    <div className="new-ticket-container">
      <h2>Submit a New Ticket</h2>
      <form className="new-ticket-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description
          <textarea
            value={desc}
            onChange={e => setDesc(e.target.value)}
            required
            rows={4}
          />
        </label>
        <button type="submit">
          Submit Ticket
        </button>
        {success && <div className="ticket-success">Ticket submitted!</div>}
      </form>
    </div>
  );
}