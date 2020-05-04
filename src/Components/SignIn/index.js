import React, { useState, useEffect } from "react";
import { signInWithRedirect } from "../firebase";
import { Redirect } from "react-router-dom";
import { URL } from "../../config";

import css from "./signin.module.css";

function SignIn({ user }) {
  const [userExists, setUserExists] = useState(undefined);

  useEffect(() => {
    if (user) {
      async function getUserStatus() {
        const res = await fetch(`${URL}/bootcampers/user?uid=${user.uid}`, {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        const data = await res.json();
        setUserExists(data.payload[0].exists);
        console.log(`Sign in fetch data`, data.payload[0].exists);
      }
      getUserStatus();
    }
  }, [user]);
  if (!user) {
    return (
      <div>
        <h1>Sign in page</h1>
        <button onClick={signInWithRedirect}>Sign in with Google</button>
      </div>
    );
  }
  if (userExists === undefined) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (userExists === false) {
    return <Redirect to="/profileEdit" />;
  }
  if (userExists === true) {
    return <Redirect to="/dash" />;
  }
}

export default SignIn;
