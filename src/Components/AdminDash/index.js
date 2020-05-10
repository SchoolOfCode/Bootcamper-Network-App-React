import React, { useState, useEffect } from "react";
import css from "./admindash.module.css";
import { URL } from "../../config";
import { Divider } from "@material-ui/core";

function AdminDash() {
  const [jobSatisfactionData, setjobSatisfactionData] = useState([]);
  const [newJobData, setNewJobData] = useState([]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState("Send");

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

  async function handleClick() {
    const res = await fetch(`${URL}/dashboard`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        message,
      }),
    });
    console.log(message);
    setMessage("");
    setSent("Sent");
  }

  return (
    <>
      <div className={css.otherContainer}>
        <h4 className={css.adminHeader}> Broadcast a message: </h4>
        <textarea
          className={css.inputs}
          placeholder="Enter a message to show on the dashboard..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className={css.button} onClick={handleClick}>
          {sent}
        </button>
      </div>
      <div className={css.otherContainer}>
        <h4 className={css.adminHeader}>
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
