import React, { useState } from "react";
import axios from "axios";
import "../PagesCommon.css";

export default function UserNewTicket() {
  const [form, setForm] = useState({
    date: "",
    name: "",
    department: "",
    subject: "",
    category: "",
    description: "",
    type: "",
    priority: "",
    notRobot: false,
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSuccess("");
    setError("");
    if (!form.notRobot) {
      setError("Please confirm you are not a robot.");
      return;
    }
    try {
      // Send ticket data to backend
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/tickets",
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess("Ticket submitted successfully!");
      setForm({
        date: "",
        name: "",
        department: "",
        subject: "",
        category: "",
        description: "",
        type: "",
        priority: "",
        notRobot: false,
      });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit ticket.");
    }
  };

  return (
    <div className="page-container">
      <h2>User - New Ticket</h2>
      <form className="new-ticket-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Ticket No.
            <input type="text" placeholder="Auto-generated" disabled />
          </label>
          <label>Date
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-row">
          <label>Name
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>Department
            <input type="text" name="department" value={form.department} onChange={handleChange} required />
          </label>
        </div>
        <label>Subject
          <input type="text" name="subject" value={form.subject} onChange={handleChange} required />
        </label>
        <div className="form-row">
          <label>Category
            <input type="text" name="category" value={form.category} onChange={handleChange} required />
          </label>
          <label>Description
            <textarea name="description" value={form.description} onChange={handleChange} rows={4} required />
          </label>
        </div>
        <div className="form-row">
          <label>Type
            <input type="text" name="type" value={form.type} onChange={handleChange} required />
          </label>
          <label>Priority
            <input type="text" name="priority" value={form.priority} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-row">
          <label>
            <input type="checkbox" name="notRobot" checked={form.notRobot} onChange={handleChange} /> I'm not a robot
          </label>
          <button className="btn" type="submit">Submit</button>
        </div>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </form>
      <div className="form-footer">
        <p>Note: Please ensure all fields are filled out correctly before submitting.</p>
      </div>
    </div>
  );
}