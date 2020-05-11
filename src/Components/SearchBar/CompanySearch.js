import React from "react";
import Divider from "../Divider";
import css from "../Dashboard/Dashboard.module.css";

function CompanySearch({ name, address }) {
  return (
    <div className={css.searchResult}>
      <p>{name}</p>
      <p
        style={{
          color: "#ACB0CB",
        }}
      >
        {address}
      </p>

      <Divider />
    </div>
  );
}

export default CompanySearch;
