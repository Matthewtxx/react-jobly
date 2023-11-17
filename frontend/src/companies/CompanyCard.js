// CompanyCard.js
import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
  return (
    <div>
      <h3>
        <Link to={`/companies/${company.handle}`}>{company.name}</Link>
      </h3>
      <p>{company.description}</p>
    </div>
  );
};

export default CompanyCard;
