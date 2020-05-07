import React, { useState, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import "firebase/auth";
import { onAuthStateChanged } from "../firebase";
import firebase from "firebase/app";
import { URL } from "../../config";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import css from "../CreateCompanies/CreateCompanies.module.css";
import { Link } from "react-router-dom";
import PreviousRoles from "./previousRoles.js";
import twitterLogo from "../../images/twitter2.svg";
import linkedinLogo from "../../images/linkedin2.svg";
import githubLogo from "../../images/github2.svg";
import websiteLogo from "../../images/web2.svg";

const initialState = {
  first_name: localStorage.getItem("firstname") || "",
  surname: localStorage.getItem("surname") || "",
  aboutme: localStorage.getItem("aboutme") || "",
  job_title: localStorage.getItem("job_title") || "",
  company_id: localStorage.getItem("company_id") || "",
  salary: localStorage.getItem("salary") || "",
  start_date: localStorage.getItem("start_date") || new Date(),

  previous_roles: [],
  cohort_num: localStorage.getItem("cohort_num") || 0,
  region: localStorage.getItem("region") || "",
  job_satisfaction: localStorage.getItem("job_satisfaction") || "",
  new_job: localStorage.getItem("new_job") || "",
  twitter: localStorage.getItem("twitter") || "",
  github: localStorage.getItem("github") || "",
  portfolio: localStorage.getItem("portfolio") || "",
  linkedIn: localStorage.getItem("linkedIn") || "",
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
    case "linkedin":
      return state.linkedin === action.payload
        ? state
        : { ...state, linkedin: action.payload };
    default:
      throw new Error();
  }
}

function ProfileInputs({ uid, photoURL, email }) {
  const history = useHistory();
  const [companyData, setCompanyData] = useState([]);
  useEffect(() => {
    async function getIndividualCompany() {
      const res = await fetch(`${URL}/companies`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      console.log(data.payload);
      setCompanyData(data.payload);
    }
    getIndividualCompany();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  async function handleClick(e) {
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
      linkedin,
    } = state;
    console.log(state);
    e.preventDefault();
    const saveResult = await fetch(`${URL}/bootcampers`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        uid,
        email,
        photoURL,
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
        linkedin,
      }),
    });
    console.log(JSON.stringify(saveResult));
    if (saveResult.ok) {
      history.push("/profile");
    }
  }

  function handleChange(date) {
    dispatch({
      type: "start_date",
      payload: date,
    });
  }

  return (
    <>
      <h2 className={css.header}>Edit Profile</h2>
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
              localStorage.setItem("firstname", event.target.value);
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
              localStorage.setItem("surname", event.target.value);
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
              localStorage.setItem("aboutme", event.target.value);
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
              localStorage.setItem("job_title", event.target.value);
              dispatch({
                type: "job_title",
                payload: event.target.value,
              });
            }}
          />
          <label>Company:</label>
          <p className={css.linktext}>
            <Link to="/companyEdit" className={css.linktext}>
              If your company doesn't already exist, add it here
            </Link>
          </p>
          <select
            className={css.inputs}
            name="company_id"
            value={state.company_id}
            onChange={(event) => {
              localStorage.setItem("company_id", event.target.value);
              dispatch({
                type: "company_id",
                payload: event.target.value,
              });
            }}
          >
            <option> Select from the list </option>
            {companyData.map((item) => {
              return (
                <option value={item.company_id}> {item.company_name}</option>
              );
            })}
          </select>
          <label>Salary:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="Salary"
            name="salary"
            value={state.salary}
            onChange={(event) => {
              localStorage.setItem("salary", event.target.value);
              dispatch({
                type: "salary",
                payload: event.target.value,
              });
            }}
          />
          <label>Start Date:</label>
          {/* <input
            className={css.inputs}
            type="text"
            placeholder="Start Date"
            name="start_date"
            value={state.start_date}
            onChange={(event) => {
              localStorage.setItem('start_date', event.target.value)
              dispatch({
                type: "start_date",
                payload: event.target.value,
              });
            }}
          /> */}

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={state.start_date}
              onChange={handleChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>

          <label>Previous Roles</label>

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
              localStorage.setItem("cohort_num", event.target.value);
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
              localStorage.setItem("region", event.target.value);
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
              localStorage.setItem("job_satisfaction", event.target.value);
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
              localStorage.setItem("new_job", event.target.value);
              dispatch({
                type: "new_job",
                payload: event.target.value,
              });
            }}
          />

          <small> Please enter URL </small>
          <div>
            <img src={websiteLogo} alt="website logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="Portfolio"
              name="portfolio"
              value={state.website}
              onChange={(event) => {
                localStorage.setItem("portfolio", event.target.value);
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
                localStorage.setItem("twitter", event.target.value);
                dispatch({
                  type: "twitter",
                  payload: event.target.value,
                });
              }}
            />
          </div>
          <div>
            <img src={linkedinLogo} alt="linkedin logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="linkedin"
              name="linkedin"
              value={state.linkedin}
              onChange={(event) => {
                localStorage.setItem("linkedIn", event.target.value);
                dispatch({
                  type: "linkedin",
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
              name="gitHub"
              value={state.github}
              onChange={(event) => {
                localStorage.setItem("gitHub", event.target.value);
                dispatch({
                  type: "github",
                  payload: event.target.value,
                });
              }}
            />
          </div>
        </form>
        <button onClick={handleClick} className={css.button}>
          Save
        </button>
      </div>
    </>
  );
}

export default ProfileInputs;
