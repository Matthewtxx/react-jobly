// AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import JoblyApi from "../api/api";
import useLocalStorage from './useLocalStorage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage("token");

  const isAuthenticated = !!currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const userData = await JoblyApi.getUserProfile();
          setCurrentUser(userData);
        } catch (error) {
          console.error("Authentication check failed:", error);
        }
      }
    };

    fetchUserData();
  }, [token]);

  const login = async (username, password) => {
    try {
      const userToken = await JoblyApi.login(username, password);
      setToken(userToken);
      JoblyApi.setToken(userToken);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  const signup = async (userData) => {
    try {
      const userToken = await JoblyApi.register(userData);
      setToken(userToken);
      JoblyApi.setToken(userToken);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, token, login, logout, signup, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
