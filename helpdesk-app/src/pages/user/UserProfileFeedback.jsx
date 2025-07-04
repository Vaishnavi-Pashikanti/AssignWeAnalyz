import React from "react";
import "../PagesCommon.css";

export default function UserProfileFeedback() {
  return (
    <div className="page-container">
      <h2>User - Profile & Feedback</h2>
      <p>View and manage your profile and feedback as a user.</p>
      <div className="feedback-section">
        <h3>Feedback History</h3>
        <p>See your submitted feedback and responses from support.</p>
        <h3>Submit New Feedback</h3>
        <textarea className="feedback-input" placeholder="Write your feedback here..." rows={4}></textarea>
        <button className="btn">Submit Feedback</button>
      </div>
    </div>
    );
}