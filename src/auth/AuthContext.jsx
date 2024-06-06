// src/auth/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { guests } from '../utils/guests';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    // Check localStorage for stored session
    const storedSession = JSON.parse(localStorage.getItem('session'));
    if (storedSession && storedSession.invited) {
      const guest = guests.find(guest => guest.phone === storedSession.invited);
      setIsAuthenticated(true);
      setGuest(guest);
    }
  }, []);

  const authenticate = phone => {
    // List of authorized phone numbers
    const guest = guests.find(guest => guest.phone === phone);

    if (guest) {
      setIsAuthenticated(true);
      setGuest(guest);
      localStorage.setItem('session', JSON.stringify({ invited: phone }));
    } else {
      alert('Phone number not authorized');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setGuest(null);
    localStorage.removeItem('session');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, guest, authenticate, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
