import React, { useState, useEffect } from "react";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import websiteLogo from "../../images/web.svg";
import { URL } from "../../config";
import css from "./CompaniesPage.module.css";

import { useParams } from "react-router-dom";

// THIS IS INDIVIDUAL COMPANIES AFTER CLICKING ON THE COMPANY PAGES
console.log("url ", URL);
function IndividualCompany() {
  const [individualCompanyData, setIndividualCompanyData] = useState([]);
  const { companyname } = useParams();
  useEffect(() => {
    async function getIndividualCompany() {
      const res = await fetch(`${URL}/companies?companyname=${companyname}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      console.log(data.payload[0]);
      setIndividualCompanyData(data.payload[0]);
    }
    getIndividualCompany();
  }, [companyname]);
  const {
    company_name,
    description,
    logo,
    address,
    postcode,
    website,
    twitter,
    linkedin,
  } = individualCompanyData;
  return (
    <div className={css.bigContainer}>
      <div className={css.companyContainer}>
        <img src={logo} alt="company logo" className={css.companyLogo} />
        <h2> {company_name} </h2>
      </div>
      <div className={css.extraData}>
        <div className={css.iconWrapper}>
          <img
            src={twitterLogo}
            alt="twitter logo"
            className={css.icons}
            onClick={() => window.location.assign(twitter)}
          />
          <img
            src={linkedinLogo}
            alt="linkedin logo"
            className={css.icons}
            onClick={() => window.location.assign(linkedin)}
          />
          <img
            src={websiteLogo}
            alt="website logo"
            className={css.icons}
            onClick={() => window.location.assign(website)}
          />
        </div>
        <p>
          <span>{description}</span>
        </p>
        <p>
          <span>Address: </span>
          {address}, {postcode}
        </p>
      </div>
      <div className={css.extraData}>
        <h3> Bootcampers Who Work Here:</h3>
        <p> insert some examples here</p>
      </div>
    </div>
  );
}

export default IndividualCompany;
