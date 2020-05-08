import React, { useState, useEffect } from "react";
import css from "../Dashboard/Dashboard.module.css";
import { URL } from "../../config";

function AdminDash() {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    async function getProfileData() {
      try {
        const res = await fetch(`${URL}/bootcampers/jobsatisfaction`);
        const data = await res.json();
        if (data.payload[0]) {
          setProfileData(data.payload[0]);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getProfileData();
  }, []);

  const {
    bootcamper_id,
    first_name,
    surname,
    region,
    cohort_num,
    aboutme,
    company_name,
    start_date,
    salary,
    previous_roles,
    photo_url,
    job_title,
    job_satisfaction,
    new_job,
  } = profileData;

  return (
    <div className={css.dash}>
      <div className={css.container}></div>
    </div>
  );
}

export default AdminDash;
