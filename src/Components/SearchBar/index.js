import React, { useState, useEffect } from "react";
import searchIcon from "../../images/searchIcon.png";
import css from "../Dashboard/Dashboard.module.css";
import { Link } from "react-router-dom";
import { URL } from "../../config";
import BootcamperSearch from "./BootcamperSearch";
import CompanySearch from "./CompanySearch";
import RoleAndRegionSearch from "./RoleandRegionSearch";

function SearchBar() {
  const [searchOption, setSearchOption] = useState("bootcamper");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  function getPath(option) {
    console.log(option);
    switch (option) {
      case "bootcamper":
        return `bootcampers?name=${searchTerm}`;

      case "company":
        return `companies?companyname=${searchTerm}`;
      case "role":
        return `bootcampers?jobtitle=${searchTerm}`;
      case "region":
        return `bootcampers?region=${searchTerm}`;
    }
  }

  function optionChange(e) {
    console.log("option", e.target.value);
    setSearchOption(e.target.value);
  }

  function handleClick() {
    async function getProfileData() {
      const res = await fetch(`${URL}/${getPath(searchOption)}`);
      const data = await res.json();
      console.log(data.payload);
      setSearchResults(data.payload);
    }
    // setSearchTerm("");
    getProfileData();
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
    console.log(e.target.value);

    if(searchTerm.length > 0){
      handleClick()
    }
  }

  function enterPressed(e) {
    const code = e.keyCode || e.which;
    if(code === 13) { 
      handleClick()
    } 
}

  
  return (
    <div>
      <div>
        <select
          className={css.searchOptions}
          onChange={optionChange}
          onClick={() => setIsClicked(false)}
        >
          <option>bootcamper</option>
          <option>company</option>
          <option>region</option>
          <option>role</option>
        </select>
        <input
          placeholder="search"
          className={css.searchBar}
          value={searchTerm}
          onChange={handleChange}
          onClick={() => setIsClicked(!isClicked)}
          onKeyPress={enterPressed}
        />
        <img
          src={searchIcon}
          className={css.icon}
          alt="search icon"
          onClick={handleClick}
        />
      </div>
      {isClicked && (
        <div className={css.searchWrapper}>
          {searchOption === "bootcamper" &&
            searchResults.map((item) => {
              return (
                <Link to={`/profiles/${item.bootcamper_id}`} className={css.link}>
                  <BootcamperSearch
                    name={item.first_name}
                    surname={item.surname}
                    pic={item.photourl}
                    region={item.region}
                    id={item.bootcamper_id}
                  />
                </Link>
              );
            })}
          {searchOption === "company" &&
            searchResults.map((item) => {
              return (
                <Link to={`/company/${item.company_name}`} className={css.link}>
                  <CompanySearch
                    name={item.company_name}
                    address={item.address}
                  />
                </Link>
              );
            })}
          {searchOption === "role" &&
            searchResults.map((item) => {
              return (
                <RoleAndRegionSearch
                  name={item.first_name}
                  surname={item.surname}
                  job={item.job_title}
                  company={item.company_name}
                  id={item.bootcamper_id}
                />
              );
            })}
          {searchOption === "region" &&
            searchResults.map((item) => {
              return (
                <RoleAndRegionSearch
                  name={item.first_name}
                  surname={item.surname}
                  company={item.company_name}
                  company_id={item.company_id}
                  region={item.region}
                  id={item.bootcamper_id}

                />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
