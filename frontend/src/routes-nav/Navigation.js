import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import JobList from '../jobs/JobList';

const Navigation = () => {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
            <Link to="/companies" className="nav-link">Companies</Link>
            <Link to="/jobs" component={JobList} className="nav-link">Jobs</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link">Signup</Link>
            <Link to="/profile" className="nav-link">Profile</Link>
        </ul>
      </nav>
    );
};

export default Navigation;
