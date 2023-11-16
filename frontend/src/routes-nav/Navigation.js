import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
            <Link to="/companies" className="nav-link">Companies</Link>
            <Link to="/jobs" className="nav-link">Jobs</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
        </ul>
      </nav>
    );
};

export default Navigation;
