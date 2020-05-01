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

function App() {
  // const [user, setUser] = useState({ loggedIn: false });
  const [user, setUser] = useState(null);
  const [meetupState, setMeetupState] = useState([]);
  const [fbDisplayName, setFbDisplayName] = useState("");
  const [fbEmail, setFbEmail] = useState("");
  const [fbUID, setFbUID] = useState("");
  const [fbPhotoUrl, setFbPhotoUrl] = useState("");

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
    console.log(`hi again`);
    onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        // const displayName = user.displayName;
        // const email = user.email;
        // const photoURL = user.photoURL;
        // const uid = user.uid;
        setFbDisplayName(user.displayName);
        setFbEmail(user.email);
        setFbPhotoUrl(user.photoURL);
        setFbUID(user.uid);
        console.log(`TOKEN`, user.getIdToken());
      } else {
        setUser(null);
      }
    });
  }, []);
  console.log(
    `FROM MAIN APP: displayname: `,
    fbDisplayName,
    `email: `,
    fbEmail,
    `photourl: `,
    fbPhotoUrl,
    `uid: `,
    fbUID
  );

  // if (!user) {
  //   return (
  //     <div>
  //       <SignIn />
  //     </div>
  //   );
  // }
  // if (user) {
  return (
    <Router>
      <NavBar />
      {/* <Dashboard state={meetupState} /> */}
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
          <SignIn user={user} />
        </Route>
        <Route path="/links">
          <UsefulLinks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
