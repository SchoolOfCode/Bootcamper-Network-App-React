import React from "react";
import css from "./BootcampersPage.module.css";

import { Link } from "react-router-dom";

// THIS IS INDIVIDUAL Bootcampers AFTER CLICKING ON THE COMPANY PAGES

function Bootcamper({
  bootcamper_id,
  photo_url,
  first_name,
  surname,
  company_name,
  job_title,
}) {
  return (
    <Link to={`/profiles/${bootcamper_id}`}>
      <div className={css.companyContainer}>
        <div className={css.imageWrapper}>
          <img src={photo_url} alt="profile" className={css.companyLogo} />
        </div>
        <div className={css.infoWrapper}>
          <h3 className={css.companyName}>
            {/* {" "} */}
            {first_name} {surname}
          </h3>
          <p className={css.companyData}> {company_name}</p>
          <p className={css.companyData}> {job_title}</p>
        </div>
      </div>
    </Link>
  );
}

export default Bootcamper;
