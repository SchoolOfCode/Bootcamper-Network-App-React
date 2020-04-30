import React from "react";
import css from "./CompaniesPage.module.css";

import { Link } from "react-router-dom";

// THIS IS INDIVIDUAL COMPANIES AFTER CLICKING ON THE COMPANY PAGES

function Company({ logo, company_name, address, company_id }) {
  return (
    <Link to={`/company/${company_name}`}>
      <div className={css.companyContainer}>
        <img src={logo} alt="company logo" className={css.companyLogo} />
        <h3> {company_name} </h3>
        <p> {address}</p>
      </div>
    </Link>
  );
}

export default Company;
