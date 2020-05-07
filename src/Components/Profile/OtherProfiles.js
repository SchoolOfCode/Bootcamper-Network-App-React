import React, { useState, useEffect } from "react";
import css from "./Profile.module.css";
import TeamData from "./TeamData";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import webLogo from "../../images/web.svg";

import { useParams } from "react-router-dom";
import { URL } from "../../config";
import { Link } from "react-router-dom";

function OtherProfiles() {
  const [profileData, setProfileData] = useState([]);
  const { bootcamperid } = useParams();
  useEffect(() => {
    async function getProfileData() {
      const res = await fetch(`${URL}/bootcampers/id/${bootcamperid}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      setProfileData(data.payload[0]);
    }
    getProfileData();
  }, []);
  const {
    first_name,
    surname,
    region,
    cohort_num,
    aboutme,
    twitter,
    linkedin,
    github,
    portfolio,
    company_name,
    start_date,
    salary,
    previous_roles,
    photo_url,
    job_title,
  } = profileData;

  return (
    <>
      <div className={css.info}>
        <img src={photo_url} alt="Profile Pic" className={css.profilePic} />

        <h2>
          {first_name} {surname}
        </h2>
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
          src={githubLogo}
          alt="github logo"
          className={css.icons}
          onClick={() => window.location.assign(github)}
        />
        <img
          src={webLogo}
          alt="web logo"
          className={css.icons}
          onClick={() => window.location.assign(portfolio)}
        />
      </div>
      <div className={css.profileContainer}>
        <ul>
          <li>
            <span>Region: </span>
            {region}
          </li>
          <li>
            <span>Cohort: </span>
            {cohort_num}
          </li>
          <li>
            <span>About Me: </span>
            {aboutme}
          </li>
        </ul>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <li>
            <span>Current Role </span>
          </li>
          <li>
            <span>Company Name: </span>
            <Link to={`/company/${company_name}`}>{company_name}</Link>
          </li>
          <li>
            <span>Job Role: </span>
            {job_title}
          </li>
          <li>
            <span>Start Date: </span>
            {start_date?.substring(0, 9).split("-").reverse().join("-")}
          </li>
          <li>
            <span>Salary: </span>£{salary}
          </li>
        </ul>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <span>Previous Roles: </span>
          {previous_roles &&
            previous_roles.map((item) => {
              const { jobTitle, company } = JSON.parse(item);
              return (
                <li>
                  - {jobTitle} at {company}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default OtherProfiles;
