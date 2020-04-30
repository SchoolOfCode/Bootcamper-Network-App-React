import React, { useState, useEffect } from "react";
import searchIcon from "../../images/searchIcon.png";
import css from "../Dashboard/Dashboard.module.css";
import { useParams } from "react-router-dom";
import { URL } from "../../config";

function SearchBar() {
  const [searchOption, setSearchOption] = useState("bootcamper");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function getPath(option) {
    console.log(option);
    switch (option) {
      case "bootcamper":
        return `bootcampers?name=${searchTerm}`;

      case "company":
        return `companies?companyname${searchTerm}`;
    }
  }

  function optionChange(e) {
    console.log("option", e.target.value);
    setSearchOption(e.target.value);
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  }

  function handleClick() {
    async function getProfileData() {
      const res = await fetch(`${URL}/${getPath(searchOption)}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      console.log(data.payload);
      setSearchResults(data.payload);
    }
    setSearchTerm("");
    getProfileData();
  }
  return (
    <div>
      <div>
        <select className={css.searchOptions} onChange={optionChange}>
          <option>bootcamper</option>
          <option>company</option>
          <option>region</option>
          <option>role</option>
          <option>events</option>
        </select>
        <input
          placeholder="search"
          className={css.searchBar}
          value={searchTerm}
          onChange={handleChange}
        />
        <img
          src={searchIcon}
          className={css.icon}
          alt="search icon"
          onClick={handleClick}
        />
      </div>
      {searchOption === "bootcamper" && <p>{searchResults[0]?.first_name} </p>}
      {searchOption === "company" && <p>{searchResults[0]?.company_name}</p>}
    </div>
  );
}

export default SearchBar;
