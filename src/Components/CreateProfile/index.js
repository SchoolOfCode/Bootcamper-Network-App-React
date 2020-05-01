import React, { useState, useReducer } from "react";
import { URL } from "../../config";
import css from "../CreateProfile/createprof.module.css";
import { Link } from "react-router-dom";
import PreviousRoles from "./previousRoles.js";

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
  console.log(action.type)
  switch (action.type) {
    case "first_name":
      return state.first_name === action.payload ? state : { ...state, first_name: action.payload };
    case "surname":
      return state.surname === action.payload ? state :  { ...state, surname: action.payload };
    case "aboutme":
      return state.aboutme === action.payload ? state :  { ...state, aboutme: action.payload };
    case "job_title":
      return state.job_title === action.payload ? state :  { ...state, job_title: action.payload };
    case "company_id":
      return state.company_id === action.payload ? state :  { ...state, company_id: action.payload };
    case "salary":
      return state.salary === action.payload ? state :  { ...state, salary: action.payload };
    case "start_date":
      return state.start_date === action.payload ? state :  { ...state, start_date: action.payload };
    case "previous_roles":
      return state.previous_roles === action.payload ? state :  { ...state, previous_roles: action.payload };
    case "cohort_num":
      return state.cohort_num === action.payload ? state :  { ...state, cohort_num: action.payload };
    case "region":
      return state.region === action.payload ? state :  { ...state, region: action.payload };
    case "job_satisfaction":
      return state.job_satisfaction === action.payload ? state :  { ...state, job_satisfaction: action.payload };
    case "new_job":
      return state.new_job === action.payload ? state :  { ...state, new_job: action.payload };
    case "twitter":
      return state.twitter === action.payload ? state :  { ...state, twitter: action.payload };
    case "github":
      return state.github === action.payload ? state :  { ...state, github: action.payload };
    case "portfolio":
      return state.portfolio === action.payload ? state :  { ...state, portfolio: action.payload };
    case "linkedIn":
      return state.linkedIn === action.payload ? state :  { ...state, linkedIn: action.payload };
    default:
      throw new Error();
  }
}

function ProfileInputs() {
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
    console.log(`from inside fetch`, previous_roles)
    e.preventDefault();
    fetch(`${URL}/bootcampers`, {
      method: "POST",
      body: JSON.stringify({
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
    <div>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>
          First Name:
          <input
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
        </label>
        <label>
          Surname:
          <input
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
        </label>
        <label>
          About Me:
          <input
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
        </label>
        <label>
          Job Title:
          <input
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
        </label>
        <label>
          Companies:
          <p className={css.linktext}>
            If your company doesn't already exist, add it{" "}
            <Link to="/companyEdit">here</Link>
          </p>
          <input
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
        </label>
        <label>
          Salary:
          <input
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
        </label>
        <label>
          Start Date:
          <input
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
        </label>
        
        <PreviousRoles onChange={(values) => {
              dispatch({
                type: "previous_roles",
                payload: values,
              });
            }} />
        <label>
          Cohort Number:
          <input
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
        </label>
        <label>
          Region:
          <input
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
        </label>
        <label>
          Job Satisfaction:
          <input
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
        </label>
        <label>
          New Job:
          <input
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
        </label>
        <label>
          Twitter:
          <input
            type="text"
            placeholder="Twitter"
            name="twitter"
            value={state.twitter}
            onChange={(event) => {
              dispatch({
                type: "twitter",
                payload: event.target.value,
              });
            }}
          />
        </label>
        <label>
          GitHub:
          <input
            type="text"
            placeholder="GitHub"
            name="github"
            value={state.github}
            onChange={(event) => {
              dispatch({
                type: "github",
                payload: event.target.value,
              });
            }}
          />
        </label>
        <label>
          Portfolio:
          <input
            type="text"
            placeholder="Portfolio"
            name="portfolio"
            value={state.portfolio}
            onChange={(event) => {
              dispatch({
                type: "portfolio",
                payload: event.target.value,
              });
            }}
          />
        </label>
        <label>
          Linkedin:
          <input
            type="text"
            placeholder="LinkedIn"
            name="linkedIn"
            value={state.linkedIn}
            onChange={(event) => {
              dispatch({
                type: "linkedIn",
                payload: event.target.value,
              });
            }}
          />
        </label>
      </form>
      <button onClick={handleClick}>Save</button>
    </div>
  );
}

export default ProfileInputs;
