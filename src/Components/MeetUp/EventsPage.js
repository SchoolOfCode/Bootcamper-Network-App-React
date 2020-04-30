import React, { useState } from "react";
import css from "./Meetup.module.css";

function EventsPage({ name, link, date, time }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <div className={css.eachEvent}>
        <a href={link} className={css.link}>
          <p>{name}</p>
        </a>
        <p>{date}</p>
        <p>{time}</p>

        <button
          style={
            isClicked
              ? { backgroundColor: "green" }
              : { backgroundColor: "#64a4c6" }
          }
          onClick={handleClick}
        >
          I'm Attending
        </button>
      </div>
    </>
  );
}

export default EventsPage;
