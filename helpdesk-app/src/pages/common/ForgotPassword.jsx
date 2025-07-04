import React, { useState } from "react";
import "../PagesCommon.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setInfo("Password reset functionality is not implemented in this demo.");
  };

  return (
    <div className="page-container">
      <h2>Forgot Password</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <button className="btn" type="submit">Send Reset Link</button>
        {info && <div className="info">{info}</div>}
      </form>
      <div className="auth-links">
        <a href="/signin">Back to Sign In</a>
      </div>
    </div>
  );
}