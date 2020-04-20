import React from "react";
import "./Dashboard.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const brumJS = require("../../images/brumJs.png");

function Dashboard() {
  return (
    <div className="dash">
      <div className="container">
        <h2> Latest Events </h2>
        <img src={brumJS} className="eventImg" alt="brumJS Logo" />
        <div>
          Text about the event goes here. This section is scrollable if there is
          enough text.
        </div>
      </div>
      <div className="container">
        <br />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="BootcamperBot"
          options={{ height: 260, width: 320 }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
