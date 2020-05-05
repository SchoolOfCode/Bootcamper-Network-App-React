import React, { useState, useEffect, useContext } from "react";
import css from "./Profile.module.css";
import TeamData from "./TeamData";
import { Link } from "react-router-dom";

import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import pencil from "../../images/pencil.png";

import webLogo from "../../images/web.svg";

import { URL } from "../../config";


const socialLinks = [
  { name: 'twitter', src: twitterLogo },
  { name: 'linkedin', src: linkedinLogo },
  { name: 'github', src: githubLogo },
  { name: 'web', src: webLogo }
]

function Profile({ uid }) {

  const [profileData, setProfileData] = useState({});
  const [sliderValue, setSliderValue] = useState(1);
  const [option, setOption] = useState();
 


  useEffect(() => {
    async function getProfileData() {
      const res = await fetch(`${URL}/bootcampers?uid=${uid}`);
      const data = await res.json();
      if (data.payload[0]) {
        setProfileData(data.payload[0]);
      }
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
        {socialLinks.map(link => <img
          key={link.name}
          src={link.src}
          alt={`${link.name} logo`}
          className={css.icons}
          onClick={() => window.location.assign(profileData[link.name])}
        />)}
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
              console.log(item)
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
