import React from "react";
import css from "./usefulLinks.module.css"
/* import Divider from "../Divider"; */
import webPic from "./web.jpg"
import stackPic from "./stack.jpg"
import slackPic from "./slack.png"
import linkedInPic from "./linkedin.png"

function UsefulLinks() {
  return (
    <>
      <div className={css.header}>
        <h2 className={css.h2}> Useful Links</h2>
        <p className={css.subheader}>
          Links to School of Code sites we think might be useful to any bootcampers, past or
          present.
        </p>
      </div>
      <div className={css.bigContainer}>
        <p className={css.extraData}>

           <a className={css.linkText} href="https://www.schoolofcode.com/"> <img height="45px" alt="" src={webPic}/> </a> 
          
        </p>
        {/* <Divider /> */}
        <p className={css.extraData}>
        
          <span> <a className={css.linkText} href="https://stackoverflow.com/c/school-of-code/questions"> <img height="35px" alt="" src="https://cdn.sstatic.net/Sites/stackoverflow/company/Img/logos/so/so-logo.png?v=9c558ec15d8a"/> </a></span>
        </p>
        {/* <Divider /> */}
        <p className={css.extraData}>
        
          <span> <a className={css.linkText} href="https://schoolofcodebootcamp.slack.com"> <img height="45px" alt="" src={slackPic}/> </a> </span>
          
        </p>
        {/* <Divider /> */}
        <p className={css.extraData}>
          <span> <a className={css.linkText} href="https://schoolofcodebootcamp.slack.com"> <img height="45px" alt="" src={linkedInPic}/> </a> </span>
          
        </p>
      </div>
    </>
  );
}

export default UsefulLinks;
