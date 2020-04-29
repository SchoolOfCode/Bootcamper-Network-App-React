import React from "react";
import css from "./Meetup.module.css";
import morecss from "../CompaniesPage/CompaniesPage.module.css";

import EventsPage from "./EventsPage";

export default function Meetup({ state }) {
  return (
    <>
      <div className={css.header}>
        <h2> Events </h2>
      </div>
      <div className={morecss.bigContainer}>
        {state.map((item) => {
          return (
            <>
              <EventsPage name={item.name} />
            </>
          );
        })}
      </div>
    </>
  );
}
