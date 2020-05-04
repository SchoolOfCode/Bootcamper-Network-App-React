import React, { useState, useReducer } from "react";
import { URL } from "../../config";
import twitterLogo from "../../images/twitter2.svg";
import linkedinLogo from "../../images/linkedin2.svg";
import websiteLogo from "../../images/web2.svg";
import css from "./CreateCompanies.module.css";

const initialState = {
  company_name: "",
  description: "",
  logo: "",
  address: "",
  postcode: "",
  website: "",
  twitter: "",
  linkedIn: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "company_name":
      return { ...state, company_name: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "logo":
      return { ...state, logo: action.payload };
    case "address":
      return { ...state, address: action.payload };
    case "postcode":
      return { ...state, postcode: action.payload };
    case "website":
      return { ...state, website: action.payload };
    case "twitter":
      return { ...state, twitter: action.payload };
    case "linkedIn":
      return { ...state, linkedIn: action.payload };
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
              dispatch({
                type: "company_name",
                payload: event.target.value,
              });
            }}
          />

          <label>Description:</label>
          <input
            className={css.inputs}
            type="text"
            placeholder="description"
            name="description"
            value={state.description}
            onChange={(event) => {
              dispatch({
                type: "description",
                payload: event.target.value,
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
              dispatch({
                type: "logo",
                payload: event.target.value,
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
              dispatch({
                type: "address",
                payload: event.target.value,
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
            onChange={(event) => {
              dispatch({
                type: "postcode",
                payload: event.target.value,
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
                dispatch({
                  type: "website",
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
        </form>
      </div>
      <button onClick={handleClick} className={css.button}>
        Save
      </button>
    </>
  );
}
export default CompanyInputs;
