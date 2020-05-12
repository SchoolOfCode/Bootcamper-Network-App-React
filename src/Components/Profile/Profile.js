import React, { useState, useEffect } from "react";
import css from "./Profile.module.css";
import TeamData from "./TeamData";
import { Link } from "react-router-dom";
import twitterLogo from "../../images/twitter3.png";
import linkedinLogo from "../../images/linkedin3.png";
import githubLogo from "../../images/github3.png";
import pencil from "../../images/pencil.png";
import emailLogo from "../../images/mail3.png";
import webLogo from "../../images/web3.png";

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
      <div>
        <Link to="/profileEdit">
          <img src={pencil} alt="edit pencil" className={css.pencil} />
        </Link>

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
