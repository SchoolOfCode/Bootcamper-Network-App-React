import React from "react";
import Divider from "../Divider";

function CompanySearch({ name, address }) {
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>

      <Divider />
    </div>
  );
}

export default CompanySearch;
