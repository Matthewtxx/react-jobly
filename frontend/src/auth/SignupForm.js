import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import './Form.css';

function SignupForm() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Call the signup function from the AuthProvider
      await signup(values);
  
      // Redirect to login page after successful signup
      navigate("/users/login");
    } catch (error) {
      console.error("Signup error:", error.message);
  
      // Check if it's a duplicate username error
      if (error.message.includes("Duplicate username")) {
        // Handle duplicate username error
        console.error("Duplicate username error:", error.message);
      } else {
        // Handle other errors 
        console.error("Other signup error:", error.message);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          {/** username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              onChange={handleInput}
              className="form-control"
            />
          </div>
          {/** email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={handleInput}
              className="form-control"
            />
          </div>
          {/** password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleInput}
              className="form-control"
            />
          </div>
          {/** firstName */}
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              onChange={handleInput}
              className="form-control"
            />
          </div>
          {/** lastName */}
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success btn-submit">
            Signup
          </button>
          <br />
          <Link to="/users/login" className="btn btn-default btn-link">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
