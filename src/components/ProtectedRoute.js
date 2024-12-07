import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const loggedIn = localStorage.getItem('loggedIn');

  return loggedIn ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
