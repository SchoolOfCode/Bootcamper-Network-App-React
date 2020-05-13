import React, { useState, useEffect } from "react";
import css from "./BootcampersPage.module.css";
// import { Link, useParams } from "react-router-dom";
import Bootcamper from "./Bootcamper";
import { URL } from "../../config";

// THIS ONE IS ALL THE Bootcampers

function BootcampersPage() {
  const [bootcamperData, setBootcamperData] = useState([]);

  useEffect(() => {
    async function getBootcamperData() {
      const res = await fetch(`${URL}/bootcampers`);
      const data = await res.json();
      setBootcamperData(data.payload);
    }
    getBootcamperData();
  }, []);

  return (
    <>
      <div className={css.header}>
        <h2 className={css.title}> Bootcampers </h2>
        <small className={css.subheader}>
          Our wonderful bootcampers, past and present.
        </small>
      </div>
      <div className={css.bigContainer}>
        {bootcamperData.map((item) => {
          return (
            <Bootcamper
              key={item.bootcamper_id}
              bootcamperData={bootcamperData}
              bootcamper_id={item.bootcamper_id}
              photo_url={item.photo_url}
              first_name={item.first_name}
              surname={item.surname}
              company_name={item.company_name}
              job_title={item.job_title}
            />
          );
        })}
      </div>
    </>
  );
}

export default BootcampersPage;
