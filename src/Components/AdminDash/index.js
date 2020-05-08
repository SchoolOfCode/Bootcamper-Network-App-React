import React, { useState, useEffect } from "react";
import css from "./admindash.module.css";
import { URL } from "../../config";
import { Divider } from "@material-ui/core";

function AdminDash() {
  const [jobSatisfactionData, setjobSatisfactionData] = useState([]);

  useEffect(() => {
    async function getJobSatisfactoionData() {
      try {
        const res = await fetch(`${URL}/bootcampers/jobsatisfaction`);
        const data = await res.json();
        if (data.payload) {
          setjobSatisfactionData(data.payload);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getJobSatisfactoionData();
  }, []);

  //   const {
  //     first_name,
  //     surname,
  //     cohort_num,
  //     company_name,
  //     salary,
  //     photo_url,
  //     job_title,
  //     job_satisfaction,
  //     new_job,
  //   } = jobSatisfactionData;

  return (
    <div className={css.otherContainer}>
      <h3> Bootcampers with a Job Satisfaction rating less than 3:</h3>
      {jobSatisfactionData.map((item) => {
        return (
          <>
            <img src={item.photo_url} className={css.profilePic} alt="" />
            <p className={css.listItem}>
              {item.first_name} {item.surname}
            </p>
            <li className={css.listItem}>
              <span>Cohort: </span>
              {item.cohort_num}
            </li>
            <li className={css.listItem}>
              <span>Company Name:</span>
              {item.company_name}
            </li>
            <li className={css.listItem}>
              <span>Job Satisfaction: </span>
              {item.job_satisfaction}
            </li>
            <Divider />
          </>
        );
      })}
    </div>
  );
}

export default AdminDash;
