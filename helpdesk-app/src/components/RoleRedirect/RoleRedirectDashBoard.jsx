import React from "react";
import { Navigate } from "react-router-dom";

export default function RoleRedirect() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/signin" replace />;
  if (user.role === "admin") return <Navigate to="/admin/dashboard" replace />;
  if (user.role === "user") return <Navigate to="/user/dashboard" replace />;
  return <Navigate to="/signin" replace />;
}