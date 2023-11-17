// JobList.js
import React, { useState, useEffect } from 'react';
import JoblyApi from '../api/api';
import JobCard from './JobCard';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobs = await JoblyApi.getJobs();
        setJobs(jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
  
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h2 className="heading">Job List</h2>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
