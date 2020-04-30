import React from "react";
import { Link } from "react-router-dom";
import css from "../Dashboard/Dashboard.module.css";

function RoleAndRegionSearch({ name, surname, company, job }) {
  return (
    <>
      <div>
        <Link to={`/profile/${name}`} className={css.link}>
          <p>
            {name} {surname}
          </p>
        </Link>
        <Link to={`/company/${company}`} className={css.link}>
          <p>{company}</p>
          <p>{job}</p>
        </Link>
      </div>
      <hr style={{ width: "80%" }} />
    </>
  );
}

export default RoleAndRegionSearch;
