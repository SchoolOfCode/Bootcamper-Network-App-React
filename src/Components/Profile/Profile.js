import React, { useState } from "react";
import "./Profile.css";
import TeamData from "./TeamData";

const twitter = require("../../images/twitter-logo.png");
const linkedin = require("../../images/linkedin.png");
const github = require("../../images/github.png");
const profilePic = require("../../images/jodie.jpg");

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
  prevRoles: {
    1: "QA Engineer - The Economist",
    2: "Higher Education Stuff",
  },
};

function Profile() {
  const [sliderValue, setSliderValue] = useState(3);
  const [option, setOption] = useState("");
  return (
    <>
      <div className="info">
        <img src={profilePic} alt="Profile Pic" className="profilePic" />
        <h2> {dummyData.name} </h2>
        <img
          src={twitter}
          alt="twitter logo"
          className="icons"
          onClick={() => window.location.assign(dummyData.twitter)}
        />
        <img
          src={linkedin}
          alt="linkedin logo"
          className="icons"
          onClick={() => window.location.assign(dummyData.linkedin)}
        />
        <img
          src={github}
          alt="github logo"
          className="icons"
          onClick={() => window.location.assign(dummyData.github)}
        />
      </div>
      <div className="profileContainer">
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>Region: </span>
            {dummyData.region}
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Cohort: </span>
            {dummyData.cohort}
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>About Me: </span>
            {dummyData.about}
          </li>
        </ul>
      </div>
      <div className="profileContainer">
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>Current Role: </span>
          </li>
          <li>{dummyData.title}</li>
          <li>{dummyData.company}</li>
          <li>{dummyData.timeInRole}</li>
          <li>{dummyData.salary}</li>
        </ul>
      </div>
      <div className="profileContainer">
        <ul>
          <li>
            <span style={{ fontWeight: "bold" }}>Previous Roles: </span>
          </li>
          <li>{dummyData.prevRoles[1]}</li>
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
