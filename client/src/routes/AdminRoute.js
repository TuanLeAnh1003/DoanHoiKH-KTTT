import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminRoute({ children }) {
  return localStorage.getItem("role") === "true" ? children : <Navigate to="/" />;
}

export default AdminRoute;