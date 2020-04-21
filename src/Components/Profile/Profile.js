import React from "react";
import "./Profile.css";

const dummyData = {
  name: "Jodie Neville",
  region: "Birmingham",
  cohort: 3,
  about:
    "About Me I was on the School of Codes 3rd Cohort and am based in Birmingham.",
};

function Profile() {
  return (
    <>
      <div className="info">
        <h2> {dummyData.name} </h2>
      </div>
      <div className="profileContainer"></div>
    </>
  );
}

export default Profile;
