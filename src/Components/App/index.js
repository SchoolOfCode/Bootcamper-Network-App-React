import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "../firebase";
import firebase from "firebase/app";
import "firebase/auth";
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

import PrivateRoute from "../PrivateRoute"

import OtherProfiles from "../Profile/OtherProfiles";


function App() {
  const [user, setUser] = useState(null);
  const [meetupState, setMeetupState] = useState([]);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    async function getEvents() {
      const res = await fetch(`${URL}/events`);
      const data = await res.json();
      setMeetupState(data.events);
    }
    getEvents();
  }, []);

  useEffect(() => {
    onAuthStateChanged((user) => {
      setUserLoading(true);
      if (user) {
        setUser(user);
        // console.log(`TOKEN`, user.getIdToken());
      } else {
        setUser(null);
      }
      setUserLoading(false);
    });
  }, []);




  return (
    <Router>
      {user && <NavBar />}
      {/* <Dashboard state={meetupState} /> */}
      {userLoading &&
        <div>
          <p>...loading</p>
        </div>
      }
      <Switch>
        <PrivateRoute user={user} path="/profile">
          <Profile uid={user && user.uid} />
        </PrivateRoute>
        <PrivateRoute user={user} path="/profiles/:bootcamperid">
            <OtherProfiles />
        </PrivateRoute>
        <PrivateRoute user={user} path="/companies">
          <CompaniesPage />
        </PrivateRoute>
        <PrivateRoute user={user} path="/company/:companyname">
          <IndividualCompany />
        </PrivateRoute>
        <PrivateRoute user={user} path="/events">
          <Meetup state={meetupState} />
        </PrivateRoute>
        <PrivateRoute user={user} path="/profileEdit">
          <ProfileInputs {...user} />
        </PrivateRoute>
        <PrivateRoute user={user} path="/companyEdit">
          <CompanyInputs />
        </PrivateRoute>
        <Route path="/signin">
          <SignIn user={user} />
        </Route>
        <PrivateRoute user={user} path="/links">
          <UsefulLinks />
        </PrivateRoute>
        <PrivateRoute user={user} path="/">
          <Dashboard state={meetupState} />
        </PrivateRoute>
      </Switch>
    </Router>
  );

}

export default App;
