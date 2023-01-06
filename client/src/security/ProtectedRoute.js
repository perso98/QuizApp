import { Outlet, Navigate } from "react-router-dom";
import React from "react";

function ProtectedRoute() {
  const username = localStorage.getItem("username");
  return !username ? <Navigate to="/" replace /> : <Outlet />;
}

export default ProtectedRoute;
