import React, { useState, useEffect } from "react";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import websiteLogo from "../../images/web.svg";
import { URL } from "../../config";
import css from "./IndividualCompany.module.css";
import BootcampersWorkingHere from "./BootcampersWorkingHere";
import GoogleMaps from "../GoogleMaps";
import { useParams } from "react-router-dom";

// THIS IS INDIVIDUAL COMPANIES AFTER CLICKING ON THE COMPANY PAGES

function IndividualCompany() {
  const [individualCompanyData, setIndividualCompanyData] = useState([]);
  const { companyname } = useParams();
  useEffect(() => {
    async function getIndividualCompany() {
      const res = await fetch(`${URL}/companies?companyname=${companyname}`);
      const data = await res.json();
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
    <>
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
        <div className={css.bigContainer}>
      <div className={css.companyContainer}>
        <div className={css.imageWrapper}>
          <img src={logo} alt="company logo" className={css.companyLogo} />
        </div>
        <h2 className={css.companyTitle}> {company_name} </h2>
      </div>
      <div className={css.extraData}>
       
        <p>
          <span>{description}</span>
        </p>
       
      </div>
      <div className={css.extraData}>
        <BootcampersWorkingHere companyname={companyname} />
      </div>
      
      <div className={css.extraData}>Address: 
      <p>
      {address}, {postcode}
      </p>
      <div>{postcode && <GoogleMaps className={css.theMap} postcode={postcode} />}</div>
      
      </div>
          
       
      
    </div>
    </>
  );
}

export default IndividualCompany;
