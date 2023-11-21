// CompanyCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <h3 className="company-name">
        <Link to={`/companies/${company.handle}`}>{company.name}</Link>
      </h3>
      <p className="company-description">{company.description}</p>
    </div>
  );
};

export default CompanyCard;
