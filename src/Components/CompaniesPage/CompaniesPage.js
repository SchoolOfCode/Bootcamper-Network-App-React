import React, { useState, useEffect } from "react";
import css from "./CompaniesPage.module.css";
// import { Link, useParams } from "react-router-dom";
import Company from "./Company";
import { URL } from "../../config";

// THIS ONE IS ALL THE COMPANIES

function CompaniesPage() {
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    async function getCompanies() {
      const res = await fetch(`${URL}/companies`);
      const data = await res.json();
      console.log(data.payload);
      setCompanyData(data.payload);
    }
    getCompanies();
  }, []);
  return (
    <>
      <div className={css.header}>
        <h2> Companies </h2>
        <small>
          Our bootcampers have gone on to work at these tech companies. Click
          the company to find out more.
        </small>
      </div>
      <div className={css.bigContainer}>
        {companyData.map((item) => {
          return (
            <Company
              key={item.company_id}
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
