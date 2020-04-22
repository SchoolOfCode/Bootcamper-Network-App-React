import React, { useState } from "react";
import "./slider.css";

function TeamData({ sliderValue, setSliderValue, option, setOption }) {
  function handleSliderChange(e) {
    setSliderValue(e.target.value);
  }

  function handleOption(e) {
    setOption(e.target.value);
  }
  return (
    <div className="profileContainer">
      <ul>
        <li>
          <span style={{ fontWeight: "bold" }}>Feedback for the team </span>
        </li>
        <li>
          <span style={{ fontSize: "x-small" }}>
            (this will not be seen by other bootcampers)
          </span>
        </li>
        <br />
        <li> How satisfied are you with your role?</li>
        <li>
          <span style={{ fontSize: "x-small" }}>
            (1 = Not satisfied, 5 = Very Satisfied)
          </span>
        </li>

        <div class="slidecontainer">
          <input
            type="range"
            min="1"
            max="5"
            value={sliderValue}
            class="slider"
            id="myRange"
            onChange={handleSliderChange}
          />
          <p>
            <span style={{ fontSize: "small" }}>
              You've Selected: {sliderValue}
            </span>
          </p>
        </div>
        <li>Would you like to find a new job?</li>
        <select onChange={handleOption}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <button className="save">Save Changes</button>
      </ul>
    </div>
  );
}

export default TeamData;
