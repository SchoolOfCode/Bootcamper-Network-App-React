import React, { useState } from "react";
import css from "./Meetup.module.css";

function EventsPage({ name }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <div className={css.eachEvent}>
        <p>{name}</p>
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
