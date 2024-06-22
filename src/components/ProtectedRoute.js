// src/components/ProtectedRoute.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <Component /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
