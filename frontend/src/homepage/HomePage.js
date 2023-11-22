import React from 'react';
import { useAuth } from '../hooks/AuthProvider';
import './HomePage.css';

const Homepage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="homepage-container">
      <h1 className="homepage-heading">Welcome to Jobly!</h1>
      <p className="homepage-description">
        {isAuthenticated
          ? 'Find the job that suits you best. Explore companies and job opportunities.'
          : 'Please log in or sign up to explore job opportunities.'}
      </p>
    </div>
  );
};

export default Homepage;
