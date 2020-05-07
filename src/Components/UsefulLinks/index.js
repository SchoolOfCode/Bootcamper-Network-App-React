import React from "react";
import css from "../CompaniesPage/CompaniesPage.module.css";
import morecss from "../MeetUp/Meetup.module.css";
import Divider from "../Divider";
import webPic from "./web.png"
import stackPic from "./stack.png"
import slackPic from "./slack.png"
import linkedInPic from "./linkedin.png"

function UsefulLinks() {
  return (
    <>
      <div className={morecss.header}>
        <h2 className={morecss.h2}> Useful Links</h2>
        <small>
          Some links we think might be useful to any bootcampers, past or
          present.
        </small>
      </div>
      <div className={css.bigContainer}>
        <p>
<img height="25px" marginLeft="10px" alt="" src={webPic}/>
          <span> <a href="https://www.schoolofcode.com/"> School of Code's Website </a> </span>
          
        </p>
        <Divider />
        <p>
        <img height="25px" alt="" src={stackPic}/>
          <span> <a href="https://stackoverflow.com/c/school-of-code/questions"> School of Code's Stack Overflow </a></span>
        </p>
        <Divider />
        <p>
        <img height="25px" alt="" src={slackPic}/>
          <span> <a href="https://schoolofcodebootcamp.slack.com"> School of Code's Slack </a> </span>
          
        </p>
        <Divider />
        <p>
        <img height="25px" alt="" src={linkedInPic}/>
          <span> <a href="https://schoolofcodebootcamp.slack.com"> School of Code's LinkedIn </a> </span>
          
        </p>
      </div>
    </>
  );
}

export default UsefulLinks;
