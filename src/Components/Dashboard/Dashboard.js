import React from "react";
import "./Dashboard.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const brumJS = require("../../images/brumJs.png");
const searchIcon = require("../../images/searchIcon.png");

function Dashboard() {
  return (
    <div className="dash">
      <div>
        {/* make this into a search component later when its not MVP */}
        <input placeholder="search" className="searchBar" />
        <img src={searchIcon} className="icon" alt="search icon" />
      </div>
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
