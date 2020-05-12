import React, { useState } from "react";
import cn from "classnames";
import css from "./EventsPage.module.css";

function EventsPage({ name, link, date, time }) {
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
        <p className={css.subheader}>{date?.substring(0, 10).split("-").reverse().join("-")} at {time}</p>
      </div>
    </>
  );
}

export default EventsPage;
