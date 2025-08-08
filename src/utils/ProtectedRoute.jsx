// CORRECTED - src/utils/ProtectedRoute.js

import React from 'react';
// Import the Navigate component, not the useNavigate hook
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // RETURN the <Navigate> component. This is how you redirect declaratively.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the children.
  return children;
};

export default ProtectedRoute;