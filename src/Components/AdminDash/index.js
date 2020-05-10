import React, { useState, useEffect } from "react";
import css from "./admindash.module.css";
import { URL } from "../../config";
import { Divider } from "@material-ui/core";

function AdminDash() {
  const [jobSatisfactionData, setjobSatisfactionData] = useState([]);
  const [newJobData, setNewJobData] = useState([]);

  useEffect(() => {
    async function getJobSatisfactionData() {
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
    getJobSatisfactionData();
  }, []);
  useEffect(() => {
    async function getNewJobData() {
      try {
        const res = await fetch(`${URL}/bootcampers/newjob`);
        const data = await res.json();
        if (data.payload) {
          setNewJobData(data.payload);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getNewJobData();
  }, []);

  return (
    <>
      <div className={css.otherContainer}>
        <h4 className={css.adminHeader}>
          {" "}
          Bootcampers with a Job Satisfaction rating less than 3:
        </h4>
        {jobSatisfactionData.map((item) => {
          return (
            <>
              <img src={item.photo_url} className={css.profilePic} alt="" />
              <p className={css.name}>
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
      <div className={css.otherContainer}>
        <h4 className={css.adminHeader}> Bootcampers Who Want a new Job: </h4>
        {newJobData.map((item) => {
          return (
            <>
              <img src={item.photo_url} className={css.profilePic} alt="" />
              <p className={css.name}>
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
    </>
  );
}

export default AdminDash;
