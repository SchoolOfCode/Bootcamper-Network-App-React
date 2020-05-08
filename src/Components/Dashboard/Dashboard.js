import React from "react";
import css from "./Dashboard.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Link } from "react-router-dom";

import EventsPage from "../MeetUp/EventsPage";
import SearchBar from "../SearchBar";

function Dashboard({ state }) {
  return (
    <div className={css.dash}>
      <SearchBar />
      <div className={css.container}>
        <Link to="/events" style={{ textDecoration: "none", color: "black" }}>
          <h2 className={css.header}> Latest Events </h2>
        </Link>

        <EventsPage
          name={state[0]?.name || "Loading..."}
          link={state[0]?.link}
        />
      </div>
      <div className={css.container}>
        <br />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BootcamperBot"
          options={{ height: "45vh", width: "90vw" }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
