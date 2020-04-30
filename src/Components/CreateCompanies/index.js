import React, { useState, useReducer } from "react";
import { URL } from "../../config";

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

  function handleClick(e, state) {
    const {company_name, description, logo, address, postcode, website, twitter, linkedIn} = state;
    e.preventDefault();
    fetch(`${URL}/companies`, {
      method: "POST",
      body: JSON.stringify({ company_name, description, logo, address, postcode, website, twitter, linkedIn}),
      headers: {
        "Content-Type": "application/json"
      }
  },
  console.log(`checking fetch`, description)
  )}
  console.log(`this should be the company name`, state.company_name)
  return (
    <div>
      <form
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
                type: "description",
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
           <button onClick={e=>handleClick(e, state )}>Save</button>
        </label>
      </form>
    </div>
  )
}
export default CompanyInputs;