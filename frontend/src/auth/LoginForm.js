import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import './Form.css';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await login(formData.username, formData.password);
      // Redirect or perform additional actions after successful login
      navigate('/');
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, e.g., display an error message
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success btn-submit">
            Login
          </button>
          <br />
          <Link to="/users/signup" className="btn btn-default btn-link">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
