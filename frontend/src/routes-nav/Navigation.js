import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isAuthenticated, username, handleLogout }) => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/companies" className="nav-link">Companies</Link>
        </li>
        <li className="nav-item">
          <Link to="/jobs" className="nav-link">Jobs</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">Welcome, {username}!</span>
            </li>
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/users/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/users/signup" className="nav-link">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
