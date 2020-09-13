import React from "react";
import css from "./EventsPage.module.css";

function EventsPage({ name, link, date, time, venue }) {
  return (
    <>
      <div className={css.eachEvent}>
        <a href={link} className={css.link}>
          <p className={css.eventName}>{name}</p>
        </a>
        <p className={css.subheader}>
          {date?.split("-").reverse().join("-")} at {time}
        </p>
        <p className={css.subheader}>{venue}</p>
      </div>
    </>
  );
}

export default EventsPage;
