import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDatabase from "./pages/admin/AdminDatabase";
import AdminSetting from "./pages/admin/AdminSetting";
import AdminUserLogHistory from "./pages/admin/AdminUserLogHistory";
import AdminProfileSetting from "./pages/admin/AdminProfileSetting";
import AdminProfileFeedback from "./pages/admin/AdminProfileFeedback";
import UserDashboard from "./pages/user/UserDashboard";
import UserMyTicket from "./pages/user/UserMyTicket";
import UserMyTicketViewTicket from "./pages/user/UserMyTicketViewTicket";
import UserNewTicket from "./pages/user/UserNewTicket";
import UserProfileSetting from "./pages/user/UserProfileSetting";
import UserProfileFeedback from "./pages/user/UserProfileFeedback";
import SignIn from "./pages/common/SignIn";
import SignUp from "./pages/common/SignUp";
import ForgotPassword from "./pages/common/ForgotPassword";
import GuidelineTemplate from "./pages/common/GuidelineTemplate";
import RoleRedirectDashBoard from "./components/RoleRedirect/RoleRedirectDashBoard";
import RoleRedirectNewtickets from "./components/RoleRedirect/RoleRedirectNewtickets";
import RoleRedirectMyTickets from "./components/RoleRedirect/RoleRedirectMyTickets";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <main className="main-content">
        <Routes>
          {/* Admin (no protection) */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/database" element={<AdminDatabase />} />
          <Route path="/admin/setting" element={<AdminSetting />} />
          <Route path="/admin/user-log-history" element={<AdminUserLogHistory />} />
          <Route path="/admin/profile-setting" element={<AdminProfileSetting />} />
          <Route path="/admin/profile-feedback" element={<AdminProfileFeedback />} />
          
          {/* User (no protection) */}
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/my-ticket" element={<UserMyTicket />} />
          <Route path="/user/my-ticket/view" element={<UserMyTicketViewTicket />} />
          <Route path="/user/new-ticket" element={<UserNewTicket />} />
          <Route path="/user/profile-setting" element={<UserProfileSetting />} />
          <Route path="/user/profile-feedback" element={<UserProfileFeedback />} />
          
          {/* Auth & Common */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/guideline" element={<GuidelineTemplate />} />

          {/* Default redirects */}
          <Route path="/" element={<RoleRedirectDashBoard />} />
          <Route path="/new-ticket" element={<RoleRedirectNewtickets />} />
          <Route path="/my-tickets" element={<RoleRedirectMyTickets />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
