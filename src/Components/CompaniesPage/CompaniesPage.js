import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CompaniesPage.css";
import Company from "./Company";
import { URL } from "../../config";

// THIS ONE IS ALL THE COMPANIES

function CompaniesPage() {
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    async function getCompanies() {
      const res = await fetch(`${URL}/companies`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      console.log(data.payload);
      setCompanyData(data.payload);
    }
    getCompanies();
  }, []);
  return (
    <>
      <div className="header">
        <h2> Companies </h2>
        <small>
          Our bootcampers have gone on to work at these tech companies. Click
          the company to find out more.
        </small>
      </div>
      <div className="bigContainer">
        {companyData.map((item) => {
          return (
            <Company
              companyData={companyData}
              company_id={item.company_id}
              logo={item.logo}
              company_name={item.company_name}
              address={item.address}
            />
          );
        })}
      </div>
    </>
  );
}

export default CompaniesPage;
