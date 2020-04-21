import React from "react";
import "./Profile.css";

const twitter = require("../../images/twitter-logo.png");
const linkedin = require("../../images/linkedin.png");
const github = require("../../images/github.png");

const dummyData = {
  name: "Jodie Neville",
  region: "Birmingham",
  cohort: 3,
  about:
    "About Me I was on the School of Codes 3rd Cohort and am based in Birmingham.",
  twitter: "https://twitter.com/JodieNeville",
  linkedin: "https://www.linkedin.com/in/jlneville/",
  github: "https://github.com/nevillejodie",
};

function Profile() {
  return (
    <>
      <div className="info">
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
      <div className="profileContainer"></div>
    </>
  );
}

export default Profile;
