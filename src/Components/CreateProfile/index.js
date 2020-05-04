import React, { useState, useEffect, useReducer } from "react";
import "firebase/auth";
import { onAuthStateChanged } from "../firebase";
import firebase from "firebase/app";
import { URL } from "../../config";
import css from "../CreateCompanies/CreateCompanies.module.css";
import { Link } from "react-router-dom";
import PreviousRoles from "./previousRoles.js";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import websiteLogo from "../../images/web.svg";

const initialState = {
  first_name: "",
  surname: "",
  aboutme: "",
  job_title: "",
  company_id: 0,
  salary: "",
  start_date: "",
  previous_roles: [],
  cohort_num: 0,
  region: "",
  job_satisfaction: "",
  new_job: "",
  twitter: "",
  github: "",
  portfolio: "",
  linkedIn: "",
};

function reducer(state, action) {
  // console.log(action.type);
  switch (action.type) {
    case "first_name":
      return state.first_name === action.payload
        ? state
        : { ...state, first_name: action.payload };
    case "surname":
      return state.surname === action.payload
        ? state
        : { ...state, surname: action.payload };
    case "aboutme":
      return state.aboutme === action.payload
        ? state
        : { ...state, aboutme: action.payload };
    case "job_title":
      return state.job_title === action.payload
        ? state
        : { ...state, job_title: action.payload };
    case "company_id":
      return state.company_id === action.payload
        ? state
        : { ...state, company_id: action.payload };
    case "salary":
      return state.salary === action.payload
        ? state
        : { ...state, salary: action.payload };
    case "start_date":
      return state.start_date === action.payload
        ? state
        : { ...state, start_date: action.payload };
    case "previous_roles":
      return state.previous_roles === action.payload
        ? state
        : { ...state, previous_roles: action.payload };
    case "cohort_num":
      return state.cohort_num === action.payload
        ? state
        : { ...state, cohort_num: action.payload };
    case "region":
      return state.region === action.payload
        ? state
        : { ...state, region: action.payload };
    case "job_satisfaction":
      return state.job_satisfaction === action.payload
        ? state
        : { ...state, job_satisfaction: action.payload };
    case "new_job":
      return state.new_job === action.payload
        ? state
        : { ...state, new_job: action.payload };
    case "twitter":
      return state.twitter === action.payload
        ? state
        : { ...state, twitter: action.payload };
    case "github":
      return state.github === action.payload
        ? state
        : { ...state, github: action.payload };
    case "portfolio":
      return state.portfolio === action.payload
        ? state
        : { ...state, portfolio: action.payload };
    case "linkedIn":
      return state.linkedIn === action.payload
        ? state
        : { ...state, linkedIn: action.payload };
    default:
      throw new Error();
  }
}

function ProfileInputs({ uid, photourl, email }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  function handleClick(e) {
    const {
      first_name,
      surname,
      aboutme,
      job_title,
      company_id,
      salary,
      start_date,
      previous_roles,
      cohort_num,
      region,
      job_satisfaction,
      new_job,
      twitter,
      github,
      portfolio,
      linkedIn,
    } = state;
    console.log(previous_roles);
    e.preventDefault();
    fetch(`${URL}/bootcampers`, {
      method: "POST",
      body: JSON.stringify({
        uid,
        email,
        photourl,
        first_name,
        surname,
        aboutme,
        job_title,
        company_id,
        salary,
        start_date,
        previous_roles,
        cohort_num,
        region,
        job_satisfaction,
        new_job,
        twitter,
        github,
        portfolio,
        linkedIn,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <div className={css.wrapper}>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>First Name:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="First Name"
            name="first_name"
            value={state.first_name}
            onChange={(event) => {
              dispatch({
                type: "first_name",
                payload: event.target.value,
              });
            }}
          />
          <label>Surname:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="Surname"
            name="surname"
            value={state.surname}
            onChange={(event) => {
              dispatch({
                type: "surname",
                payload: event.target.value,
              });
            }}
          />
          <label>About Me:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="About Me"
            name="aboutme"
            value={state.aboutme}
            onChange={(event) => {
              dispatch({
                type: "aboutme",
                payload: event.target.value,
              });
            }}
          />
          <label>Job Title:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="Job Title"
            name="job_title"
            value={state.job_title}
            onChange={(event) => {
              dispatch({
                type: "job_title",
                payload: event.target.value,
              });
            }}
          />
          <label>Companies:</label>
          <p className={css.linktext}>
            If your company doesn't already exist, add it
            <Link to="/companyEdit">here</Link>
          </p>
          <input
            className={css.inputs}
            type="text"
            placeholder="Companies"
            name="company_id"
            value={state.company_id}
            onChange={(event) => {
              dispatch({
                type: "company_id",
                payload: event.target.value,
              });
            }}
          />
          <label>Salary:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="Salary"
            name="salary"
            value={state.salary}
            onChange={(event) => {
              dispatch({
                type: "salary",
                payload: event.target.value,
              });
            }}
          />
          <label>Start Date:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="Start Date"
            name="start_date"
            value={state.start_date}
            onChange={(event) => {
              dispatch({
                type: "start_date",
                payload: event.target.value,
              });
            }}
          />
          <label>Previous Roles:</label>
          <PreviousRoles
            onChange={(values) => {
              dispatch({
                type: "previous_roles",
                payload: values,
              });
            }}
          />
          <label>Cohort Number:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="Cohort Number"
            name="cohort_num"
            value={state.cohort_num}
            onChange={(event) => {
              dispatch({
                type: "cohort_num",
                payload: event.target.value,
              });
            }}
          />
          <label>Region:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="Region"
            name="region"
            value={state.region}
            onChange={(event) => {
              dispatch({
                type: "region",
                payload: event.target.value,
              });
            }}
          />
          <label>Job Satisfaction:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="Job Satisfaction"
            name="job_satisfaction"
            value={state.job_satisfaction}
            onChange={(event) => {
              dispatch({
                type: "job_satisfaction",
                payload: event.target.value,
              });
            }}
          />
          <label>New Job:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="New Job"
            name="new_job"
            value={state.new_job}
            onChange={(event) => {
              dispatch({
                type: "new_job",
                payload: event.target.value,
              });
            }}
          />
          <div>
            <img src={websiteLogo} alt="website logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="Portfolio"
              name="portfolio"
              value={state.website}
              onChange={(event) => {
                dispatch({
                  type: "portfolio",
                  payload: event.target.value,
                });
              }}
            />
          </div>
          <div>
            <img src={twitterLogo} alt="twitter logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="twitter"
              name="twitter"
              value={state.twitter}
              onChange={(event) => {
                dispatch({
                  type: "twitter",
                  payload: event.target.value,
                });
              }}
            />
          </div>
          <div>
            <img src={linkedinLogo} alt="linkedIn logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="linkedIn"
              name="linkedIn"
              value={state.linkedIn}
              onChange={(event) => {
                dispatch({
                  type: "linkedIn",
                  payload: event.target.value,
                });
              }}
            />
          </div>
          <div>
            <img src={githubLogo} alt="github logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="github"
              name="GitHub"
              value={state.github}
              onChange={(event) => {
                dispatch({
                  type: "github",
                  payload: event.target.value,
                });
              }}
            />
          </div>
        </form>
      </div>
      <button onClick={handleClick} className={css.button}>
        Save
      </button>
    </>
  );
}

export default ProfileInputs;
