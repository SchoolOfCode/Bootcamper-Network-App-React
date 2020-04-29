import React, { useState, useReducer } from "react";

const initialState = {
  company_name: "",
  description: "",
  logo: "",
  address: "",
  postcode: 0,
  website: "",
  twitter: "",
  linkedIn: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "company_name":
      return { ...state, first_name: action.payload };
    case "description":
      return { ...state, surname: action.payload };
    case "logo":
      return { ...state, profile: action.payload };
    case "address":
      return { ...state, job_title: action.payload };
    case "postcode":
      return { ...state, company_id: action.payload };
    case "website":
      return { ...state, salary: action.payload };
    case "twitter":
      return { ...state, start_date: action.payload };
    case "linkedIn":
      return { ...state, previous_roles: action.payload };
    default:
      throw new Error();
  }
}

function CompanyInputs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit() {
    //fetch
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          Company Name:
          <input
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
        </label>
        <label>
          Description:
          <input
            type="text"
            placeholder="description"
            name="description"
            value={state.description}
            onChange={(event) => {
              dispatch({
                type: "surname",
                payload: event.target.value,
              });
            }}
          />
        </label>
        <label>
          Logo URL:
          <input
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
        </label>
        <label>
        Address:
          <input
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
        </label>
        <label>
        Postcode:
          <input
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
        </label>
        <label>
        Website:
          <input
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
        </label>
        <label>
        Twitter:
          <input
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
        </label>
        <label>
        LinkedIn:
          <input
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
        </label>
      </form>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default CompanyInputs;