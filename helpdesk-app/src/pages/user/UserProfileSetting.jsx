import React from "react";
import "../PagesCommon.css";

export default function UserProfileSetting() {
  return (
    <div className="page-container">
      <h2>User - Profile Setting</h2>
      <p>Manage your user profile settings here.</p>
      <div className="profile-section">
        <h3>Personal Information</h3>
        <p>Update your name, email, and contact details.</p>
        <h3>Preferences</h3>
        <p>Set your notification and privacy preferences.</p>
        <button className="btn">Save Changes</button>
      </div>
    </div>
  );    
}