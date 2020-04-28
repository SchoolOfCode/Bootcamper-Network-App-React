import React, { useState } from "react";
import searchIcon from "../../images/searchIcon.png";
import css from "../Dashboard/Dashboard.module.css"

function SearchBar() {
  const [searchOption, setSearchOption] = useState("Bootcamper");

  function optionChange(e) {
    setSearchOption(e.target.value);
  }
  return (
    <div>
      <div>
        <select className={css.searchOptions} onChange={optionChange}>
          <option>Bootcamper</option>
          <option>Company</option>
          <option>Region</option>
          <option>Role</option>
          <option>Events</option>
        </select>
        <input placeholder="search" className={css.searchBar} />
        <img src={searchIcon} className={css.icon} alt="search icon" />
      </div>
      <p>{searchOption}</p>
    </div>
  );
}

export default SearchBar;
