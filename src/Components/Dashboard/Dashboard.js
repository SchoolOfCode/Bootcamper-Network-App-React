import React, { useEffect, useState } from "react";
import css from "./Dashboard.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Link } from "react-router-dom";
import { URL } from "../../config";

import EventsPage from "../MeetUp/EventsPage";
import SearchBar from "../SearchBar";
import Divider from "../Divider";

function Dashboard({ state }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getMessage() {
      try {
        const res = await fetch(`${URL}/dashboard`);
        const data = await res.json();
        if (data.payload) {
          setMessage(data.payload[0]?.message);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getMessage();
  }, []);

  return (
    <div className={css.dash}>
      <SearchBar />
      <div className={css.container}>
        <h3 className={css.header}>Latest Message From the SoC Team:</h3>
        <Divider />
        <p>{message}</p>
      </div>
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
