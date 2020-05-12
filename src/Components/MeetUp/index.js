import React from "react";
import css from "./Meetup.module.css";
import morecss from "../CompaniesPage/CompaniesPage.module.css";

import EventsPage from "./EventsPage";

export default function Meetup({ state }) {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h2 className={css.h2}> Events </h2>
        
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
              venue={item?.venue?.name}
            />
          );
        })}
      </div>
    </div>
  );
}
