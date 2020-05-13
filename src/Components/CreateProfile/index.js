import React, { useState, useEffect, useReducer, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import PreviousRoles from "./previousRoles.js";
import css from "../CreateCompanies/CreateCompanies.module.css";
import { URL } from "../../config";
import twitterLogo from "../../images/twitter2.svg";
import linkedinLogo from "../../images/linkedin2.svg";
import githubLogo from "../../images/github2.svg";
import websiteLogo from "../../images/web2.svg";
import { ProfileContext } from "../../config";

const initialState = {
  first_name: localStorage.getItem("firstname") || "",
  surname: localStorage.getItem("surname") || "",
  aboutme: localStorage.getItem("aboutme") || "",
  job_title: localStorage.getItem("job_title") || "",
  company_id: localStorage.getItem("company_id") || "",
  salary: localStorage.getItem("salary") || "",
  start_date: localStorage.getItem("start_date") || new Date(),
  previous_roles: localStorage.getItem("previous_roles") || [],
  cohort_num: localStorage.getItem("cohort_num") || 0,
  region: localStorage.getItem("region") || "",
  job_satisfaction: localStorage.getItem("job_satisfaction") || "",
  new_job: localStorage.getItem("new_job") || "",
  twitter: localStorage.getItem("twitter") || "",
  github: localStorage.getItem("github") || "",
  portfolio: localStorage.getItem("portfolio") || "",
  linkedIn: localStorage.getItem("linkedIn") || "",
};

const actionTypes = {
  FORM_CHANGE: "FORM_CHANGE",
};

const fields = [
  "first_name",
  "surname",
  "aboutme",
  "job_title",
  "company_id",
  "salary",
  "start_date",
  "previous_roles",
  "cohort_num",
  "region",
  "job_satisfaction",
  "new_job",
  "twitter",
  "github",
  "portfolio",
  "linkedin",
];

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.FORM_CHANGE:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

function ProfileInputs() {
  const {
    user: { uid, photoURL, email, bootcamper_id },
    profileData,
  } = useContext(ProfileContext);
  const history = useHistory();
  const [companyData, setCompanyData] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    async function getIndividualCompany() {
      const res = await fetch(`${URL}/companies`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      setCompanyData(data.payload);
    }
    getIndividualCompany();
  }, []);

  useEffect(() => {
    async function getUserStatus() {
      const res = await fetch(`${URL}/bootcampers/user?uid=${uid}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      console.log(`chris check`, data);

      setIsNewUser(!data.payload[0].exists);
    }
    getUserStatus();
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    console.log(`PROFILE STUFF`, profileData, isNewUser);
    const profileUrl = isNewUser
      ? `${URL}/bootcampers`
      : `${URL}/bootcampers/${profileData.bootcamper_id}`;
    const saveResult = await fetch(profileUrl, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: isNewUser ? "POST" : "PATCH",
      body: JSON.stringify({
        ...state,
        uid,
        email,
        photo_url: photoURL,
      }),
    });
    if (saveResult.ok) {
      history.push("/profile");
    }
  }

  function handleDateChange(date) {
    dispatch({
      type: actionTypes.FORM_CHANGE,
      payload: {
        start_date: date,
      },
    });
  }

  return (
    <>
      <h2 className={css.header}>{isNewUser ? "Create" : "Edit"} Profile</h2>
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
                type: actionTypes.FORM_CHANGE,
                payload: {
                  first_name: event.target.value,
                },
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
                type: actionTypes.FORM_CHANGE,
                payload: {
                  surname: event.target.value,
                },
              });
            }}
          />
          <label>About Me:</label>
          <textarea
            className={css.inputs}
            type="text"
            placeholder="About Me"
            name="aboutme"
            value={state.aboutme}
            onChange={(event) => {
              localStorage.setItem("aboutme", event.target.value);
              dispatch({
                type: actionTypes.FORM_CHANGE,
                payload: {
                  aboutme: event.target.value,
                },
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
                type: actionTypes.FORM_CHANGE,
                payload: {
                  job_title: event.target.value,
                },
              });
            }}
          />
          <label>Company:</label>
          <select
            className={css.dropdown}
            name="company_id"
            value={state.company_id}
            onChange={(event) => {
              localStorage.setItem("company_id", event.target.value);
              dispatch({
                type: actionTypes.FORM_CHANGE,
                payload: {
                  company_id: event.target.value,
                },
              });
            }}
          >
            <option className={css.options}> Select from the list </option>
            {companyData.map((item) => {
              return (
                <option className={css.options} value={item.company_id}>
                  {" "}
                  {item.company_name}
                </option>
              );
            })}
          </select>
          <p className={css.linktext}>
            <Link to="/companyEdit" className={css.linktext}>
              If your company doesn't already exist, add it here
            </Link>
          </p>
          <label>Salary:</label>
          <span className={css.poundsign}>£</span>
          <input
            className={css.salaryInput}
            type="text"
            placeholder="Salary"
            name="salary"
            value={state.salary}
            onChange={(event) => {
              localStorage.setItem("salary", event.target.value);
              dispatch({
                type: actionTypes.FORM_CHANGE,
                payload: {
                  salary: event.target.value,
                },
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
                type: actionTypes.FORM_CHANGE,
                payload: {

                  "start_date":
         event.target.value,
                }
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
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <label>Previous Roles</label>
          <div className={css.prevRoleWrapper}>
            <PreviousRoles
              onChange={(values) => {
                dispatch({
                  type: actionTypes.FORM_CHANGE,
                  payload: {
                    previous_roles: values,
                  },
                });
              }}
            />
          </div>
          <br />
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
                type: actionTypes.FORM_CHANGE,
                payload: {
                  cohort_num: event.target.value,
                },
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
                type: actionTypes.FORM_CHANGE,
                payload: {
                  region: event.target.value,
                },
              });
            }}
          />

          <small> Please enter whole URL </small>
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
                  type: actionTypes.FORM_CHANGE,
                  payload: {
                    portfolio: event.target.value,
                  },
                });
              }}
            />
          </div>
          <div>
            <img src={twitterLogo} alt="twitter logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="Enter full URL"
              name="twitter"
              value={state.twitter}
              onChange={(event) => {
                localStorage.setItem("twitter", event.target.value);
                dispatch({
                  type: actionTypes.FORM_CHANGE,
                  payload: {
                    twitter: event.target.value,
                  },
                });
              }}
            />
          </div>
          <div>
            <img src={linkedinLogo} alt="linkedin logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="Enter full URL"
              name="linkedin"
              value={state.linkedin}
              onChange={(event) => {
                localStorage.setItem("linkedin", event.target.value);
                dispatch({
                  type: actionTypes.FORM_CHANGE,
                  payload: {
                    linkedin: event.target.value,
                  },
                });
              }}
            />
          </div>
          <div>
            <img src={githubLogo} alt="github logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="Enter full URL"
              name="github"
              value={state.github}
              onChange={(event) => {
                localStorage.setItem("github", event.target.value);
                dispatch({
                  type: actionTypes.FORM_CHANGE,
                  payload: {
                    github: event.target.value,
                  },
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
