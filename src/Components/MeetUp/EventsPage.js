import React, { useState } from "react";
import cn from "classnames";
import css from "./EventsPage.module.css";

function EventsPage({ name, link, date, time, venue }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <div className={css.eachEvent}>
        <a href={link} className={css.link}>
          <p className={css.eventName}>{name}</p>
        </a>
        <p className={css.subheader}>{date?.split("-").reverse().join("-")}</p>
        <p className={css.subheader}>{time}</p>
        <p className={css.subheader}>{venue}</p>

        {/* <button
          className={cn({ [css.clicked]: isClicked })}
          onClick={handleClick}
        >
          I'm Attending
        </button> */}
      </div>
    </>
  );
}

export default EventsPage;
