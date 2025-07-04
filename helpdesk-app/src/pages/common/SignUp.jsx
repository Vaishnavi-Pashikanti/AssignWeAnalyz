import React, { useState } from "react";
import axios from "axios";
import "../PagesCommon.css";

export default function SignUp() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const API = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await axios.post(`${API}/api/auth/signup`, form);
      setSuccess("Account created! You can now sign in.");
    } catch (err) {
      setError(err.response?.data?.message || "Sign up failed");
    }
  };

  return (
    <div className="page-container">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input name="username" value={form.username} onChange={handleChange} required />
        </label>
        <label>
          Password
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>
        <button className="btn" type="submit">Sign Up</button>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
      </form>
      <div className="auth-links">
        <a href="/signin">Already have an account? Sign In</a>
      </div>
    </div>
  );
}