import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";

const CompanyDetail = ({ match }) => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      const companyData = await JoblyApi.getCompany(match.params.handle);
      setCompany(companyData);
    };

    fetchCompany();
  }, [match.params.handle]);

  if (!company) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      {/* Add more company details as needed */}
    </div>
  );
};

export default CompanyDetail;
