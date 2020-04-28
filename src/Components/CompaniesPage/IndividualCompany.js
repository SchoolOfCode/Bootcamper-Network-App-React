import React, { useState, useEffect } from "react";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import websiteLogo from "../../images/web.svg";

import { URL } from "../../config";

import { useParams } from "react-router-dom";
import "./CompaniesPage.css";

// THIS IS INDIVIDUAL COMPANIES AFTER CLICKING ON THE COMPANY PAGES
console.log("url ", URL);
function IndividualCompany() {
  const [individualCompanyData, setIndividualCompanyData] = useState([]);
  const { companyid } = useParams();
  useEffect(() => {
    async function getIndividualCompany() {
      const res = await fetch(`${URL}/companies/${companyid}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      console.log(data.payload);
      setIndividualCompanyData(data.payload[0]);
    }
    getIndividualCompany();
  }, []);
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
    <div className="bigContainer">
      <div className="companyContainer">
        <img src={logo} alt="company logo" className="companyLogo" />
        <h2> {company_name} </h2>
      </div>
      <div className="extraData">
        <div className="iconWrapper">
          <img
            src={twitterLogo}
            alt="twitter logo"
            className="icons"
            onClick={() => window.location.assign(twitter)}
          />
          <img
            src={linkedinLogo}
            alt="linkedin logo"
            className="icons"
            onClick={() => window.location.assign(linkedin)}
          />
          <img
            src={websiteLogo}
            alt="website logo"
            className="icons"
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
      <div className="extraData">
        <h3> Bootcampers Who Work Here:</h3>
        <p> insert some examples here</p>
      </div>
    </div>
  );
}

export default IndividualCompany;
