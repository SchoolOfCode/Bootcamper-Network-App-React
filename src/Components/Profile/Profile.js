import React, { useState } from "react";
import css from "./Profile.module.css";
import TeamData from "./TeamData";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import profilePic from "../../images/jodie.jpg";

const dummyData = {
  name: "Jodie Neville",
  region: "Birmingham",
  cohort: 3,
  about:
    "About Me I was on the School of Codes 3rd Cohort and am based in Birmingham.",
  twitter: "https://twitter.com/JodieNeville",
  linkedin: "https://www.linkedin.com/in/jlneville/",
  github: "https://github.com/nevillejodie",
  title: "Full Stack Developer",
  company: "Google",
  timeInRole: "8 Years",
  salary: "£50,000",
  prevRoles: ["QA Engineer - The Economist", "Higher Education Stuff"],
};

function Profile() {
  const {
    name,
    region,
    cohort,
    about,
    twitter,
    linkedin,
    github,
    title,
    company,
    timeInRole,
    salary,
    prevRoles,
  } = dummyData;
  const [sliderValue, setSliderValue] = useState(3);
  const [option, setOption] = useState("");

  return (
    <>
      <div className={css.info}>
        <img src={profilePic} alt="Profile Pic" className={css.profilePic} />
        <h2> {name} </h2>
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
      </div>
      <div className={css.profileContainer}>
        <ul>
          <li>
            <span>Region: </span>
            {region}
          </li>
          <li>
            <span>Cohort: </span>
            {cohort}
          </li>
          <li>
            <span>About Me: </span>
            {about}
          </li>
        </ul>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <li>
            <span>Current Role: </span>
          </li>
          <li>{title}</li>
          <li>{company}</li>
          <li>{timeInRole}</li>
          <li>{salary}</li>
        </ul>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <span>Previous Roles: </span>
          {prevRoles.map((item) => {
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
