// src/auth/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [invited, setInvited] = useState(null);

  useEffect(() => {
    // Check localStorage for stored session
    const storedSession = JSON.parse(localStorage.getItem('session'));
    if (storedSession && storedSession.invited) {
      setIsAuthenticated(true);
      setInvited(storedSession.invited);
    }
  }, []);

  const authenticate = (phone) => {
    // List of authorized phone numbers
    const authorizedNumbers = ['0998726121', '0982826033']; // Add the authorized phone numbers here

    if (authorizedNumbers.includes(phone)) {
      setIsAuthenticated(true);
      setInvited(phone);
      localStorage.setItem('session', JSON.stringify({ invited: phone }));
    } else {
      alert('Phone number not authorized');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setInvited(null);
    localStorage.removeItem('session');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, invited, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
