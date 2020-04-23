import React from "react";
import "./Meetup.css";
import EventsPage from "./EventsPage";

export default function Meetup({ state }) {
  return (
    <>
      <div className="header">
        <h2> Events </h2>
      </div>
      <div className="bigContainer">
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
