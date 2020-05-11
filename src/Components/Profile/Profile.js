import React, { useState, useEffect } from "react";
import css from "./Profile.module.css";
import TeamData from "./TeamData";
import { Link } from "react-router-dom";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import pencil from "../../images/pencil.png";
import emailLogo from "../../images/email.png";
import webLogo from "../../images/web.svg";

import { URL } from "../../config";

const socialLinks = [
  { name: "twitter", src: twitterLogo },
  { name: "linkedin", src: linkedinLogo },
  { name: "github", src: githubLogo },
  { name: "web", src: webLogo },
  /*  { name: "email", src: emailLogo }  */
];

function Profile({ uid }) {
  const [profileData, setProfileData] = useState({});
  const [sliderValue, setSliderValue] = useState();
  const [option, setOption] = useState("");

  useEffect(() => {
    async function getProfileData() {
      try {
        const res = await fetch(`${URL}/bootcampers?uid=${uid}`);
        const data = await res.json();
        if (data.payload[0]) {
          setProfileData(data.payload[0]);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getProfileData();
  }, []);

  const {
    bootcamper_id,
    company_id,
    email,
    first_name,
    surname,
    region,
    cohort_num,
    aboutme,
    company_name,
    start_date,
    salary,
    previous_roles,
    photo_url,
    job_title,
    job_satisfaction,
    new_job,
  } = profileData;

  return (
    <>
      <div className={css.info}>
        <div className={css.pencilcontainer}>
          <Link to="/profileEdit">
            <img src={pencil} alt="edit pencil" className={css.pencil} />
          </Link>
        </div>
        <img src={photo_url} alt="Profile Pic" className={css.profilePic} />
        <h2>
          {first_name} {surname}
        </h2>
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
            {start_date?.substring(0, 10).split("-").reverse().join("-")}
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
              const { jobTitle, company } = JSON.parse(item); //JSON.parse(item);
              return (
                <li>
                  {jobTitle} at {company}
                </li>
              );
            })}
        </ul>
      </div>
      <TeamData
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        option={option}
        setOption={setOption}
        id={bootcamper_id}
        job_satisfaction={job_satisfaction}
        new_job={new_job}
        cohort_num={cohort_num}
        company_id={company_id}
      />
    </>
  );
}

export default Profile;
