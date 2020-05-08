import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/auth";
import Dashboard from "../Dashboard/Dashboard";
import { ProfileContext } from "../../config";

import css from "./App.module.css";
import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import CompaniesPage from "../CompaniesPage/CompaniesPage";
import Meetup from "../MeetUp/index";
import LoadingPage from "../LoadingPage/";
import ProfileInputs from "../CreateProfile";
import CompanyInputs from "../CreateCompanies";
import IndividualCompany from "../CompaniesPage/IndividualCompany";
import SignIn from "../SignIn";
import { URL } from "../../config";
import UsefulLinks from "../UsefulLinks/index.js";
import Messages from "../Messages/index";
import PrivateRoute from "../PrivateRoute";
import OtherProfiles from "../Profile/OtherProfiles";
import GoogleMaps from "../GoogleMaps";

function App() {
  // const [user, setUser] = useState(null);
  const [meetupState, setMeetupState] = useState([]);
  const [user, loading, error] = useAuthState(firebase.apps[0].auth());
  const [userProfile, setUserProfile] = useState({});
  console.log(`GOOGLE DATA`, user);

  useEffect(() => {
    async function getEvents() {
      const res = await fetch(`${URL}/events`);
      const data = await res.json();
      setMeetupState(data.events);
    }
    getEvents();
  }, []);

  //Get user data - fetch from db
  // useEffect(() => {
  //   async function getProfile() {
  //     try {
  //       const res = await fetch(`${URL}/bootcampers?uid=${user.uid}`);
  //       const data = await res.json();
  //       if (data.payload[0]) {
  //         setUserProfile(data.payload[0]);
  //       }
  //     } catch (err) {
  //       console.log(`fetch error`, err);
  //     }
  //   }
  //   getProfile();
  // }, []);
  // //HELEN SET THIS UP FOR USECONTEXT

  if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>ERROR!</p>
      </div>
    );
  }

  return (
    <ProfileContext.Provider value={[userProfile, setUserProfile]}>
      <Router>
        {user && <NavBar />}
        {/* <Dashboard state={meetupState} /> */}

        <Switch>
          <PrivateRoute user={user} path="/profile">
            <Profile uid={user && user.uid} />
          </PrivateRoute>
          <PrivateRoute user={user} path="/messages">
            <Messages />
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
          <PrivateRoute user={user} path="/googlemaps">
            <GoogleMaps />
          </PrivateRoute>
          <PrivateRoute user={user} path="/">
            <Dashboard state={meetupState} />
          </PrivateRoute>
          <PrivateRoute user={user} path="/loading">
            <LoadingPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProfileContext.Provider>
  );
}

export default App;
