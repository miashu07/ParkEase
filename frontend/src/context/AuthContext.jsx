// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect, useRef, useMemo } from 'react';
import { authService } from '../services/auth';
import api from '../services/api';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const sessionTimeoutRef = useRef(null);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAdmin(false);
    if (sessionTimeoutRef.current) {
      clearTimeout(sessionTimeoutRef.current);
    }
    sessionTimeoutRef.current = null;
    toast.success('Logged out successfully');
  };

  const handleSessionTimeout = () => {
    logout();
    toast.error('Session expired due to inactivity. Please log in again.');
  };

  const resetSessionTimeout = (minutes = 15) => {
    if (sessionTimeoutRef.current) {
      clearTimeout(sessionTimeoutRef.current);
    }

    if (localStorage.getItem('token')) {
      sessionTimeoutRef.current = setTimeout(() => {
        handleSessionTimeout();
      }, minutes * 60 * 1000);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');

      if (token && userData) {
        try {
          await api.get('/user/zones');
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
          setIsAdmin(parsedUser.role === 'ROLE_ADMIN');
          resetSessionTimeout(15);
        } catch (error) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
          setIsAdmin(false);
        }
      }
      setLoading(false);
    };

    checkAuth();

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click', 'keydown'];
    const handler = () => resetSessionTimeout(15);
    events.forEach(event => document.addEventListener(event, handler, true));

    return () => {
      events.forEach(event => document.removeEventListener(event, handler, true));
      if (sessionTimeoutRef.current) clearTimeout(sessionTimeoutRef.current);
    };
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);
      const { token, role, email: userEmail, name } = response;
      const userData = { email: userEmail, name, role };

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));

      setUser(userData);
      setIsAdmin(role === 'ROLE_ADMIN');
      resetSessionTimeout(15);

      toast.success('Login successful!');
      return { success: true, isAdmin: role === 'ROLE_ADMIN' };
    } catch (error) {
      toast.error(error.message || 'Login failed');
      return { success: false };
    }
  };

  const register = async (userData) => {
    try {
      await authService.register(userData);
      toast.success('Registration successful! Please login.');
      return { success: true };
    } catch (error) {
      toast.error(error.message || 'Registration failed');
      return { success: false };
    }
  };

  const value = React.useMemo(() => ({
    user,
    isAdmin,
    loading,
    login,
    register,
    logout,
  }), [user, isAdmin, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};