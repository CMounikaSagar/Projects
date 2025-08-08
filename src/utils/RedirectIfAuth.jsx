// CORRECTED - src/utils/RedirectIfAuth.js

import React from 'react';
// Import the Navigate component
import { Navigate } from 'react-router-dom';

const RedirectIfAuth = ({ isAuthenticated, children }) => {
    if (isAuthenticated) {
        // RETURN the <Navigate> component.
        return <Navigate to="/" replace />;
    }

    return children;
}

export default RedirectIfAuth;