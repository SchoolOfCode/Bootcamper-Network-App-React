import React, { useState, useEffect } from "react";
import { signInWithRedirect } from "../firebase";
// import { useHistory } from "react-router-dom";
import { URL } from "../../config";
import css from "./signin.module.css";

function SignIn({ user }) {
  // let history = useHistory();

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
        console.log(`Sign in fetch data`, data.payload[0].exists);

        // if (!data.payload[0].exists) {
        //   history.push("/profileEdit");
        // } else {
        //   history.push("/dash");
        // }
      }
      getUserStatus();
    }
  }, [user]);

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={signInWithRedirect}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
