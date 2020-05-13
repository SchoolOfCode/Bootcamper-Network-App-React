import React, { useState, useEffect } from "react";
import css from "./admindash.module.css";
import { URL } from "../../config";
import { Divider } from "@material-ui/core";

function AdminDash() {
  const [jobSatisfactionData, setjobSatisfactionData] = useState([]);
  const [newJobData, setNewJobData] = useState([]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState("Send");
  const [toggleDisplay, setToggleDisplay] = useState(false);

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

  function showDisplay() {
    setToggleDisplay(!toggleDisplay);
  }

  return (
    <div className={css.dash}>
      <h2 className={css.adminHeader} style={{ color: "#ffffff" }}>
        Admin Dash
      </h2>
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
        <button className={css.saveButton} onClick={handleClick}>
          {sent}
        </button>
      </div>
      <button className={css.toggleButton} onClick={showDisplay}>
        Toggle Job Satisfaction/New Jobs
      </button>
      {toggleDisplay ? (
        <>
          <h4 className={css.adminHeader}>
            Bootcampers with a Job Satisfaction rating of 3 or less:
          </h4>
          {jobSatisfactionData.map((item) => {
            return (
              <div className={css.companyContainer}>
                <img src={item.photo_url} className={css.profilePic} alt="" />
                <p className={css.name}>
                  {item.first_name} {item.surname}
                </p>
                <li className={css.listItem}>
                  <span className={css.subheaders}>Cohort</span> <br />
                  <p className={css.content}> {item.cohort_num}</p>
                </li>
                <li className={css.listItem}>
                  <span className={css.subheaders}>Company Name</span>
                  <br />
                  <p className={css.content}>{item.company_name}</p>
                </li>
                <li className={css.listItem}>
                  <span className={css.subheaders}>Job Satisfaction </span>
                  <br />
                  <p className={css.content}>{item.job_satisfaction}</p>
                </li>
                <li className={css.listItem}>
                  <span className={css.subheaders}>Salary </span>
                  <br />
                  <p className={css.content}>£{item.salary}</p>
                </li>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h4 className={css.adminHeader}> Bootcampers who want a new job: </h4>
          {newJobData.map((item) => {
            return (
              <div className={css.companyContainer}>
                <img src={item.photo_url} className={css.profilePic} alt="" />
                <p className={css.name}>
                  {item.first_name} {item.surname}
                </p>
                <li className={css.listItem}>
                  <span className={css.subheaders}>Cohort</span> <br />
                  <p className={css.content}> {item.cohort_num}</p>
                </li>
                <li className={css.listItem}>
                  <span className={css.subheaders}>Company Name</span>
                  <br />
                  <p className={css.content}>{item.company_name}</p>
                </li>
                <li className={css.listItem}>
                  <span className={css.subheaders}>Job Satisfaction </span>
                  <br />
                  <p className={css.content}>{item.job_satisfaction}</p>
                </li>
                <li className={css.listItem}>
                  <span className={css.subheaders}>Salary </span>
                  <br />
                  <p className={css.content}>£{item.salary}</p>
                </li>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default AdminDash;
