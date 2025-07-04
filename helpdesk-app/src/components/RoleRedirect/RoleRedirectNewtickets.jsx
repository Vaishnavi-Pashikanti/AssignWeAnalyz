import React from "react";
import { Navigate } from "react-router-dom";

export default function RoleNewTicketRedirect() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/signin" replace />;
  if (user.role === "admin") return <Navigate to="/admin/new-ticket" replace />;
  if (user.role === "user") return <Navigate to="/user/new-ticket" replace />;
  return <Navigate to="/signin" replace />;
}