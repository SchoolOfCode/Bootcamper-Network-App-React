import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import CompaniesPage from "../CompaniesPage/CompaniesPage";
import Meetup from "../MeetUp/index";
import ProfileInputs from "../CreateProfile";
import IndividualCompany from "../CompaniesPage/IndividualCompany";

function App() {
  const [meetupState, setMeetupState] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append(
    "Access-Control-Allow-Origin",
    "https://api.meetup.com/find/topics?query=tech&only=id,name"
  );
  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/topics?zip=&radius=1&query=tech&only=id,name",
          myInit
        );

        const data = await response.json();
        setMeetupState(data);
      } catch (error) {
        if (error === "AbortError") {
          console.log(`error caught`);
        } else {
          throw error;
        }
      }
    };
    loadData();
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/dash">
          <Dashboard state={meetupState} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/companies">
          <CompaniesPage />
        </Route>
        <Route path="/company/:companyid">
          <IndividualCompany />
        </Route>
        <Route path="/events">
          <Meetup state={meetupState} />
        </Route>
        <Route path="/profileEdit">
          <ProfileInputs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
