import React from "react";
import { Link } from "react-router-dom";
import css from "../Dashboard/Dashboard.module.css";
import Divider from "../Divider";

function RoleAndRegionSearch({ name, surname, company, job, region }) {
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
          <p> {region} </p>
        </Link>
      </div>
      <Divider />
    </>
  );
}

export default RoleAndRegionSearch;
