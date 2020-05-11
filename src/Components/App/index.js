import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
import "firebase/auth";

import NavBar from "../NavBar/NavBar";
import Profile from "../Profile/Profile";
import CompaniesPage from "../CompaniesPage/CompaniesPage";
import Meetup from "../MeetUp";
import LoadingPage from "../LoadingPage";
import ProfileInputs from "../CreateProfile";
import CompanyInputs from "../CreateCompanies";
import IndividualCompany from "../CompaniesPage/IndividualCompany";
import SignIn from "../SignIn";
import UsefulLinks from "../UsefulLinks";
import Messages from "../Messages";
import PrivateRoute from "../PrivateRoute";
import OtherProfiles from "../Profile/OtherProfiles";
import GoogleMaps from "../GoogleMaps";
import AdminDash from "../AdminDash";
import Dashboard from "../Dashboard/Dashboard";
import { ProfileContext, URL } from "../../config";

function App() {
  // const [user, setUser] = useState(null);
  const [meetupState, setMeetupState] = useState([]);
  const [user, loading, error] = useAuthState(firebase.apps[0].auth());
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    async function getEvents() {
      const res = await fetch(`${URL}/events`);
      const data = await res.json();
      setMeetupState(data.events);
    }
    getEvents();
  }, []);

  useEffect(() => {
    if (user) {
      async function getProfileData() {
        try {
          const res = await fetch(`${URL}/bootcampers?uid=${user.uid}`);
          const data = await res.json();
          console.log(`sign in fetch data`, data.payload[0]);
          if (data.payload[0]) {
            setProfileData(data.payload[0]);
          }
        } catch (err) {
          console.log(`fetch error`, err);
        }
      }

      getProfileData();
    }
  }, [user]);

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
    <ProfileContext.Provider value={{ user, profileData, setProfileData }}>
      <Router>
        {user && <NavBar uid={user.uid} />}
        {/* <Dashboard state={meetupState} /> */}

        <Switch>
          <PrivateRoute path="/admin">
            <AdminDash />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile uid={user && user.uid} />
          </PrivateRoute>
          <PrivateRoute path="/messages">
            <Messages />
          </PrivateRoute>
          <PrivateRoute path="/profiles/:bootcamperid">
            <OtherProfiles />
          </PrivateRoute>
          <PrivateRoute path="/companies">
            <CompaniesPage />
          </PrivateRoute>
          <PrivateRoute path="/company/:companyname">
            <IndividualCompany />
          </PrivateRoute>
          <PrivateRoute path="/events">
            <Meetup state={meetupState} />
          </PrivateRoute>
          <PrivateRoute path="/profileEdit">
            <ProfileInputs />
          </PrivateRoute>
          <PrivateRoute path="/companyEdit">
            <CompanyInputs />
          </PrivateRoute>
          <Route path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute path="/links">
            <UsefulLinks />
          </PrivateRoute>
          <PrivateRoute path="/googlemaps">
            <GoogleMaps />
          </PrivateRoute>
          <PrivateRoute path="/">
            <Dashboard state={meetupState} />
          </PrivateRoute>
          <PrivateRoute path="/loading">
            <LoadingPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProfileContext.Provider>
  );
}

export default App;
