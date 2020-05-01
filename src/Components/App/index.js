import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "../firebase";
import Dashboard from "../Dashboard/Dashboard";
import css from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import CompaniesPage from "../CompaniesPage/CompaniesPage";
import Meetup from "../MeetUp/index";
import ProfileInputs from "../CreateProfile";
import CompanyInputs from "../CreateCompanies";
import IndividualCompany from "../CompaniesPage/IndividualCompany";
import SignIn from "../SignIn";
import { URL } from "../../config";
import UsefulLinks from "../UsefulLinks/index.js";

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  const [meetupState, setMeetupState] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const res = await fetch(`${URL}/events`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      setMeetupState(data.events);
    }
    getEvents();
  }, []);

  useEffect(() => {
    onAuthStateChanged((user) => {
      if (user) {
        setUser({ loggedIn: true, user });
      } else {
        setUser({ loggedIn: false, user: null });
      }
    });
  }, [user]);

  if (!user.loggedIn) {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
  if (user.loggedIn) {
    return (
      <Router>
        {user.loggedIn && <NavBar />}
        <Switch>
          <Route path="/dash">
            <Dashboard state={meetupState} />
          </Route>
          <Route path="/profile/:firstname">
            <Profile />
          </Route>
          <Route path="/companies">
            <CompaniesPage />
          </Route>
          <Route path="/company/:companyname">
            <IndividualCompany />
          </Route>
          <Route path="/events">
            <Meetup state={meetupState} />
          </Route>
          <Route path="/profileEdit">
            <ProfileInputs />
          </Route>
          <Route path="/companyEdit">
            <CompanyInputs />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/links">
            <UsefulLinks />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
