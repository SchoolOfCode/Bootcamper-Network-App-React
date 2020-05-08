import React, { useState } from "react";
import css from "./slider.module.css";
import profCss from "./Profile.module.css";
import { URL } from "../../config";

function TeamData({
  sliderValue,
  setSliderValue,
  option,
  setOption,
  id,
  cohort_num,
  company_id,
}) {
  const [saved, setSaved] = useState("Save Changes");

  function handleSliderChange(e) {
    setSliderValue(e.target.value);
  }

  function handleOption(e) {
    setOption(e.target.value);
  }

  async function handleClick() {
    const saveResult = await fetch(`${URL}/bootcampers/${id}`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify({
        job_satisfaction: sliderValue,
        new_job: option,
        company_id,
        cohort_num,
      }),
    });
    console.log(option, sliderValue);
    setSaved("Saved");
  }

  return (
    <div className={profCss.profileContainer}>
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

        <div class={css.slidecontainer}>
          <input
            type="range"
            min="1"
            max="5"
            value={sliderValue}
            class={css.slider}
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
        <button className={css.save} onClick={handleClick}>
          {saved}
        </button>
      </ul>
    </div>
  );
}

export default TeamData;
