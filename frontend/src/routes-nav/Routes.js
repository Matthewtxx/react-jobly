//Routes.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../hooks/AuthProvider";
import Homepage from "../homepage/HomePage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profiles/ProfileForm";
import Navigation from "./Navigation";

const AppRoutes = ({ token, login, signup, logout, currentUser }) => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation currentUser={currentUser} logout={logout} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/users/login" element={<LoginForm login={login} />} />
        <Route path="/users/signup" element={<SignupForm signup={signup} />} />
        {/* PrivateRoute for authenticated user */}
        <Route path="/profile" element={<ProfileForm />} token={token} />
        {/* Redirect to homepage if no matching route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
