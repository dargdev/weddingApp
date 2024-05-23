// src/auth/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [invited, setInvited] = useState(null);

  const authenticate = (phone) => {
    // List of authorized phone numbers
    const authorizedNumbers = ['0998726121', '0982826033']; // Add the authorized phone numbers here

    if (authorizedNumbers.includes(phone)) {
      setIsAuthenticated(true);
      setInvited(phone);
    } else {
      alert('Phone number not authorized');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, invited, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
