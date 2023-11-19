// JobCard.js
import React from 'react';
import './JobCard.css'; // Import the CSS file

const JobCard = ({ job }) => {
  return (
    <div className="job-card-container">
      <div className="job-card">
        <h3 className="job-title">{job.title}</h3>
        <p className="job-company">{job.companyName}</p>
        <p className="job-salary">{job.salary}</p>
      </div>
    </div>
  );
};

export default JobCard;
