import React, { useState, useEffect } from "react";
import css from "./Profile.module.css";

//images
import twitterLogo from "../../images/twitter3.png";
import linkedinLogo from "../../images/linkedin3.png";
import githubLogo from "../../images/github3.png";
import webLogo from "../../images/web3.png";
import emailLogo from "../../images/mail3.png";
import leftarrow from "../../images/leftarrow.png";

import { useParams } from "react-router-dom";
import { URL } from "../../config";
import { Link } from "react-router-dom";

const socialLinks = [
  { name: "twitter", src: twitterLogo },
  { name: "linkedin", src: linkedinLogo },
  { name: "github", src: githubLogo },
  { name: "web", src: webLogo },
  /*  { name: "email", src: emailLogo }  */
];

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
    email,
    company_name,
    start_date,
    salary,
    previous_roles,
    photo_url,
    job_title,
  } = profileData;

  return (
    <>
      <div>
        <Link to="/bootcampers">
          <img src={leftarrow} alt="back arrow" className={css.leftarrow} />
        </Link>
      </div>
      <div>
        <div className={css.info}>
          <img src={photo_url} alt="Profile Pic" className={css.profilePic} />
          <h2 className={css.name}>
            {first_name} {surname}
          </h2>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        {socialLinks.map((link) => {
          return (
            <img
              key={link.name}
              src={link.src}
              alt={`${link.name} logo`}
              className={css.icons}
              onClick={() => window.open(profileData[link.name])}
            />
          );
        })}
        <a href={`mailto:${email}`}>
          <img className={css.icons} alt="" src={emailLogo}></img>
        </a>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <li>
            <span className={css.subheaders}>Region: </span> <br />
            {region}
          </li>
          <li>
            <span className={css.subheaders}>Cohort: </span> <br />
            {cohort_num}
          </li>
          <li>
            <span className={css.subheaders}>About Me: </span> <br />
            {aboutme}
          </li>
        </ul>
      </div>

      <div className={css.profileContainer}>
        <ul>
          <li>
            <span className={css.subheaders}>Company Name: </span> <br />
            <Link to={`/company/${company_name}`}>{company_name}</Link>
          </li>
          <li>
            <span className={css.subheaders}>Job Role: </span> <br />
            {job_title}
          </li>
          <li>
            <span className={css.subheaders}>Start Date: </span> <br />
            {start_date?.substring(0, 10).split("-").reverse().join("-")}
          </li>
          <li>
            <span className={css.subheaders}>Salary: </span> <br />£{salary}
          </li>
        </ul>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <span className={css.subheaders}>Previous Roles: </span> <br />
          {previous_roles &&
            previous_roles.map((item) => {
              const { jobTitle, company } = JSON.parse(item); //JSON.parse(item);
              return (
                <li>
                  {jobTitle} at {company}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default OtherProfiles;
