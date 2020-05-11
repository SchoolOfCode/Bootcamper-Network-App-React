import React from "react";
import { Link } from "react-router-dom";
import css from "../Dashboard/Dashboard.module.css";
import Divider from "../Divider";

function RoleAndRegionSearch({ name, surname, company, job, region, id, pic }) {
  return (
    <>
      <div className={css.searchResult}>
        <Link to={`/profiles/${id}`} className={css.link}>
          <img
            src={pic}
            style={{
              width: 40,
              height: 40,
              borderRadius: "100%",
              display: "inline-block",
              marginRight: 10,
              marginTop: 10,
            }}
            alt="profile pic"
          />
          <p
            style={{
              display: "inline",
              marginBlockStart: 0,
              marginBlockEnd: 0,
              position: "relative",
              top: -10,
            }}
          >
            {name} {surname}
          </p>
        </Link>
        <Link to={`/company/${company}`} className={css.link}>
          <p
            style={{
              position: "relative",
              top: -20,
              left: 50,
              color: "#ACB0CB",
              marginBlockEnd: 0,
            }}
          >
            {company}
          </p>
          <p
            style={{
              position: "relative",
              top: -20,
              left: 50,
              color: "#ACB0CB",
              marginBlockEnd: 0,
              marginBlockStart: 0,
            }}
          >
            {job}
          </p>
          <p
            style={{
              position: "relative",
              top: -20,
              left: 50,
              color: "#ACB0CB",
              marginBlockEnd: 0,
              marginBlockStart: 0,
            }}
          >
            {region}
          </p>
        </Link>
      </div>
      <Divider />
    </>
  );
}

export default RoleAndRegionSearch;
