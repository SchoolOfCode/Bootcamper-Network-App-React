import React from "react";
import css from "./Meetup.module.css";
import morecss from "../CompaniesPage/CompaniesPage.module.css";

import EventsPage from "./EventsPage";

export default function Meetup({ state }) {
  return (
    <>
      <div className={css.header}>
        <h2 className={css.h2}> Events </h2>
        <small>
          Clicking the 'I'm attending' button will not sign you up for the event
          on Meetup, it will only notify people on this app that you're
          attending. Click the titles to go to their Meetup Pages.
        </small>
      </div>
      <div className={morecss.bigContainer}>
        {state.map((item) => {
          return (
            <EventsPage
              key={item.name}
              name={item.name}
              link={item.link}
              date={item.local_date}
              time={item.local_time}
            />
          );
        })}
      </div>
    </>
  );
}
