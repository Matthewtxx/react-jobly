// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure you are importing Route and Routes
import AppRoutes from "../src/routes-nav/Routes";
import { AuthProvider } from "./hooks/AuthProvider";
import JoblyApi from "./api/api";

const App = () => {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (username, password) => {
    try {
      const userToken = await JoblyApi.login(username, password);
      setToken(userToken);
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
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const fetchCurrentUser = async () => {
    try {
      if (token) {
        const user = await JoblyApi.getUserProfile();
        setCurrentUser(user);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, [token]);

  return (
    <Router>
      <AuthProvider>
        <AppRoutes
          token={token}
          login={login}
          logout={logout}
          signup={signup}
          currentUser={currentUser}
        />
      </AuthProvider>
    </Router>
  );
};

export default App;
