import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../homepage/HomePage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobList from "../jobs/JobList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../profiles/ProfileForm";
import Navigation from "./Navigation";

const AppRoutes = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<ProfileForm />} />
        {/* Redirect to homepage if no matching route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
