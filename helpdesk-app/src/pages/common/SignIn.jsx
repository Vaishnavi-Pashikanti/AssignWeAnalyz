import React, { useState } from "react";
import "../PagesCommon.css";

export default function SignIn() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [role, setRole] = useState("user"); // default to user

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set dummy user info
    const dummyUser = {
      username: form.username,
      role: role, // from the selected radio button
    };
    localStorage.setItem("user", JSON.stringify(dummyUser));

    // Redirect
    if (role === "admin") {
      window.location.href = "/admin/dashboard";
    } else {
      window.location.href = "/user/dashboard";
    }
  };

  return (
    <div className="page-container">
      <h2>Sign In</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>

        <div className="role-select">
          <label>
            <input
              type="radio"
              name="role"
              value="user"
              checked={role === "user"}
              onChange={handleRoleChange}
            />
            User
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={role === "admin"}
              onChange={handleRoleChange}
            />
            Admin
          </label>
        </div>

        <button className="btn" type="submit">
          Sign In
        </button>
      </form>

      <div className="auth-links">
        <a href="/signup">Don't have an account? Sign Up</a>
        <br />
        <a href="/forgot-password">Forgot password?</a>
      </div>
    </div>
  );
}
