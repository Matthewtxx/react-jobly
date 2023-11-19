import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import JoblyApi from "../api/api";
import './CompanyDetail.css'

const CompanyDetail = () => {
  const { handle } = useParams(); 
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await JoblyApi.getCompany(handle);
        setCompany(companyData);
      } catch (error) {
        console.error('Error fetching company:', error);
      }
    };

    fetchCompany();
  }, [handle]); 

  if (!company) {
    return <p>Loading...</p>;
  }

  return (
    <div className="company-detail">
      <h2 className="company-name">{company.name}</h2>
      <p className="company-description">{company.description}</p>
    </div>
  );
};

export default CompanyDetail;
