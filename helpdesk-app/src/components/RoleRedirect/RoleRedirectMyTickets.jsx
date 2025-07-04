import React from "react";
import { Navigate } from "react-router-dom";

export default function RoleMyTicketsRedirect() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/signin" replace />;
  if (user.role === "admin") return <Navigate to="/admin/my-tickets" replace />;
  if (user.role === "user") return <Navigate to="/user/my-ticket" replace />;
  return <Navigate to="/signin" replace />;
}