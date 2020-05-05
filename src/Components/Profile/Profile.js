import React, { useState, useEffect, useContext } from "react";
import css from "./Profile.module.css";
import TeamData from "./TeamData";
import { Link } from "react-router-dom";

import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import pencil from "../../images/pencil.png";

import webLogo from "../../images/web.svg";

import { useParams } from "react-router-dom";
import { URL } from "../../config";

function Profile({ uid }) {
  const [profileData, setProfileData] = useState([]);
  const { firstname } = useParams();

  useEffect(() => {
    async function getProfileData() {
      const res = await fetch(`${URL}/bootcampers?uid=${uid}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      // console.log(data.payload[0]);
      setProfileData(data.payload[0]);
    }
    getProfileData();
  }, []);

  const ProfileContext = React.createContext(profileData);

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
    company_id,
    company_name,
    start_date,
    salary,
    previous_roles,
    job_satisfaction,
    new_job,
    photourl,
  } = profileData;
  const [sliderValue, setSliderValue] = useState(job_satisfaction);
  const [option, setOption] = useState(new_job);
  // USE WHAT JODIE SHOWED ME ABOUT LINKS TO PUT LINK AROUND THE PENCIL
  return (
    <>
      <div className={css.info}>
        <div className={css.pencilcontainer}>
          <Link to="/profileEdit">
            <img src={pencil} alt="edit pencil" className={css.pencil} />
          </Link>
        </div>

        <img src={photourl} alt="Profile Pic" className={css.profilePic} />
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
            <span>Current Role: </span>
          </li>
          <Link to={`/company/${company_name}`}>
            <li>{company_name}</li>
          </Link>

          <li>{start_date}</li>
          <li>{salary}</li>
        </ul>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <span>Previous Roles: </span>
          {previous_roles &&
            previous_roles.map((item) => {
              return <li> {item}</li>;
            })}
        </ul>
      </div>
      <TeamData
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        option={option}
        setOption={setOption}
      />
    </>
  );
}

export default Profile;
