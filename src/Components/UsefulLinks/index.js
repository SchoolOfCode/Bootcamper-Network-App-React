import React from "react";
import css from "./usefulLinks.module.css"
import Divider from "../Divider";
import webPic from "./web.jpg"
import stackPic from "./stack.png"
import slackPic from "./slack.png"
import linkedInPic from "./linkedin.png"

function UsefulLinks() {
  return (
    <>
      <div className={css.header}>
        <h2 className={css.h2}> Useful Links</h2>
        <small className={css.subheader}>
          Some links we think might be useful to any bootcampers, past or
          present.
        </small>
      </div>
      <div className={css.bigContainer}>
        <p className={css.extraData}>
<img height="25px"  alt="" src={webPic}/>
          <span> <a className={css.linkText} href="https://www.schoolofcode.com/"> School of Code Website </a> </span>
          
        </p>
        {/* <Divider /> */}
        <p className={css.extraData}>
        <img height="25px" alt="" src={stackPic}/>
          <span> <a className={css.linkText} href="https://stackoverflow.com/c/school-of-code/questions"> School of Code Stack Overflow </a></span>
        </p>
        {/* <Divider /> */}
        <p className={css.extraData}>
        <img height="25px" alt="" src={slackPic}/>
          <span> <a className={css.linkText} href="https://schoolofcodebootcamp.slack.com"> School of Code Slack </a> </span>
          
        </p>
        {/* <Divider /> */}
        <p className={css.extraData}>
        <img height="25px" alt="" src={linkedInPic}/>
          <span> <a className={css.linkText} href="https://schoolofcodebootcamp.slack.com"> School of Code LinkedIn </a> </span>
          
        </p>
      </div>
    </>
  );
}

export default UsefulLinks;
