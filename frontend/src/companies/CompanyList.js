// CompanyList.js
import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api/api";
import './CompanyList.css';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const companies = await (searchTerm
          ? JoblyApi.searchCompanies(searchTerm)
          : JoblyApi.getCompanies());
        setCompanies(companies);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container"> 
      <h2 className="heading">Companies</h2> 
      <input
        type="text"
        placeholder="Search companies..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div>
        {companies.map((company) => (
          <CompanyCard key={company.handle} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompanyList;
