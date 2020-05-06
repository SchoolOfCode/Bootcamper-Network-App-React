import React, { useState, useReducer } from "react";
import { URL } from "../../config";
import twitterLogo from "../../images/twitter2.svg";
import linkedinLogo from "../../images/linkedin2.svg";
import websiteLogo from "../../images/web2.svg";
import css from "./CreateCompanies.module.css";
import { Link } from "react-router-dom";

const initialState = {
  company_name: localStorage.getItem('company_name') || "",
  description: localStorage.getItem('description') || "",
  logo: localStorage.getItem('logo') || "",
  address: localStorage.getItem('address') || "",
  postcode: localStorage.getItem('postcode') || "",
  website: localStorage.getItem('website') || "",
  twitter: localStorage.getItem('twitter') || "",
  linkedIn: localStorage.getItem('linkedIn') || "",
};

const actionTypes = {
  FORM_CHANGE: "FORM_CHANGE"
}

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.FORM_CHANGE:
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}

function CompanyInputs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(e) {
    const {
      company_name,
      description,
      logo,
      address,
      postcode,
      website,
      twitter,
      linkedIn,
    } = state;
    e.preventDefault();
    fetch(`${URL}/companies`, {
      method: "POST",
      body: JSON.stringify({
        company_name,
        description,
        logo,
        address,
        postcode,
        website,
        twitter,
        linkedIn,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <>
      <h2 className={css.header}> Add a Company </h2>
      <div className={css.wrapper}>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>Company Name:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="company_name"
            name="company_name"
            value={state.company_name}
            onChange={(event) => {
              localStorage.setItem('company_name', event.target.value)
              dispatch({
                type: actionTypes.FORM_CHANGE,
                payload: { company_name: event.target.value },
              });
            }}
          />

          <label>Description:</label>npm 
          <textarea
            className={css.inputs}
            type="text"
            placeholder="description"
            name="description"
            value={state.description}
            onChange={(event) => {
              localStorage.setItem('description', event.target.value)
              dispatch({
                type: actionTypes.FORM_CHANGE,
                payload: { description: event.target.value },
              });
            }}
          />

          <label>Logo URL:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="logo"
            name="logo"
            value={state.logo}
            onChange={(event) => {
              localStorage.setItem('logo', event.target.value)
              dispatch({
                type: actionTypes.FORM_CHANGE,
                payload: { logo: event.target.value },
              });
            }}
          />

          <label>Address:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="address"
            name="address"
            value={state.address}
            onChange={(event) => {
              localStorage.setItem('address', event.target.value)
              dispatch({
                type: actionTypes.FORM_CHANGE,
                payload: { address: event.target.value },
              });
            }}
          />

          <label>Postcode:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="postcode"
            name="postcode"
            value={state.postcode}
            minLength="5"
            maxLength="8"
            onChange={(event) => {
              localStorage.setItem('postcode', event.target.value)
              dispatch({
                type: actionTypes.FORM_CHANGE,
                payload: { postcode: event.target.value },
              });
            }}
          />
          <div>
            <img src={websiteLogo} alt="website logo" className={css.logos} />
            <input
              className={css.inputs}
              type="text"
              placeholder="website"
              name="website"
              value={state.website}
              onChange={(event) => {
                localStorage.setItem('website', event.target.value)
                dispatch({
                  type: actionTypes.FORM_CHANGE,
                  payload: { website: event.target.value },
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
                localStorage.setItem('twitter', event.target.value)
                dispatch({
                  type: actionTypes.FORM_CHANGE,
                  payload: { twitter: event.target.value },
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
                localStorage.setItem('linkedIn', event.target.value)
                dispatch({
                  type: actionTypes.FORM_CHANGE,
                  payload: { linkedIn: event.target.value },
                });
              }}
            />
             <p className={css.linktext}>
            <Link to="/profileEdit" className={css.linktext}>
              Go back to edit your profile
            </Link>
          </p>
          </div>
        </form>
        <button onClick={handleClick} className={css.button}>
          Add To Companies
      </button>
      </div>
    </>
  );
}
export default CompanyInputs;
