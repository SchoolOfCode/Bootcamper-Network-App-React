import React from "react";

function CompanySearch({ name, address }) {
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>

      <hr style={{ width: "80%" }} />
    </div>
  );
}

export default CompanySearch;
