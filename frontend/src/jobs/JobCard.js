// JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.companyName}</p>
      <p>{job.salary}</p>
    </div>
  );
};

export default JobCard;
