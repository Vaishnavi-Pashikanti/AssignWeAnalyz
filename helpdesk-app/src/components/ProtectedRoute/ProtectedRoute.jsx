import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles }) {
  const user = JSON.parse(localStorage.getItem("user")); // { role: "admin" } or { role: "user" }
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/signin" replace />;
  }
  return children;
}