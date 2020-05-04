import React from "react";
import css from "../CompaniesPage/CompaniesPage.module.css";
import morecss from "../MeetUp/Meetup.module.css";

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
          <span>School of Code's Website: </span>
          <a href="https://www.schoolofcode.com/">Go Here</a>
        </p>
        <hr />
        <p>
          <span>School of Code's Stack Overflow: </span>
          <a href="https://stackoverflow.com/c/school-of-code/questions">
            Go Here
          </a>
        </p>
        <hr />
        <p>
          <span>School of Code's Slack: </span>
          <a href="https://schoolofcodebootcamp.slack.com">Go Here</a>
        </p>
        <hr />
        <p>
          <span>School of Code's LinkedIn: </span>
          <a href="https://www.linkedin.com/school/school-of-code/">Go Here</a>
        </p>
      </div>
    </>
  );
}

export default UsefulLinks;
