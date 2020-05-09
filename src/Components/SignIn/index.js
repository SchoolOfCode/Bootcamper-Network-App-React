import React, { useState, useEffect, useContext } from "react";
import { signInWithRedirect } from "../firebase";
import { Redirect } from "react-router-dom";
import { URL, ProfileContext } from "../../config";
import logo from "../../images/thisone.png";
import gsignnormal from "../../images/btn_google_signin_light_normal_web@2x.png";
import gsignpressed from "../../images/btn_google_signin_light_pressed_web@2x.png";
import css from "./signin.module.css";

function SignIn() {
  const [userExists, setUserExists] = useState(undefined);
  const { user, profileData, setProfileData } = useContext(ProfileContext);

  useEffect(() => {
    console.log(`hello blah blah`, user);
    if (user) {
      async function getProfileData() {
        try {
          const res = await fetch(`${URL}/bootcampers?uid=${user.uid}`);
          const data = await res.json();
          if (data.payload[0]) {
            setProfileData(data.payload[0]);
          }
        } catch (err) {
          console.log(`fetch error`, err);
        }
      }

      getProfileData();

      async function getUserStatus() {
        const res = await fetch(`${URL}/bootcampers/user?uid=${user.uid}`, {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        const data = await res.json();
        setUserExists(data.payload[0].exists);
      }
      getUserStatus();
    }
  }, [user]);

  if (!user) {
    return (
      <div className={css.container}>
        <h1>Bootcamper Network</h1>
        <img src={logo} alt="school of code logo" className={css.logo} />
        <img
          src={gsignnormal}
          alt="sign in with google"
          onClick={signInWithRedirect}
          className={css.normalsignin}
        />
      </div>
    );
  }
  if (userExists === undefined) {
    return (
      <div>
        <p>Refresh</p>
      </div>
    );
  }

  if (userExists === false) {
    return <Redirect to="/profileCreate" />;
  }
  if (userExists === true) {
    return <Redirect to="/" />;
  }
}

export default SignIn;
