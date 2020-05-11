import React from "react";
import Divider from "../Divider";
import css from "../Dashboard/Dashboard.module.css";

function BootcamperSearch({ name, surname, pic, region, id }) {
  return (
    <div className={css.searchResult}>
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
        value={id}
      >
        {name} {surname}
      </p>
      <p
        style={{
          position: "relative",
          top: -20,
          left: 50,
          color: "#ACB0CB",
          marginBlockEnd: 0,
        }}
      >
        {region}
      </p>

      <Divider />
    </div>
  );
}

export default BootcamperSearch;
