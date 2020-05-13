import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import leftarrow from "../../images/leftarrow.png";
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
      <div>
        <Link to="/companies">
          <img src={leftarrow} alt="back arrow" className={css.leftarrow} />
        </Link>
      </div>
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
          <p className={css.desc}>{description}</p>
        </div>
        <div className={css.extraData}>
          <BootcampersWorkingHere companyname={companyname} />
        </div>

        <div className={css.mapHolder}>
          <p className={css.subheading}>Address:</p>
          <p className={css.addresstext}>
            {address}, {postcode}
          </p>
          {postcode && <GoogleMaps postcode={postcode} />}
        </div>
      </div>
    </>
  );
}

export default IndividualCompany;
