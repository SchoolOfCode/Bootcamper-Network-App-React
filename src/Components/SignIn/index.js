import React, { useState } from "react";
import { signInWithRedirect } from "../firebase";
import { useHistory } from "react-router-dom";

function SignIn({ user }) {
  let history = useHistory();
  if (user) {
    history.push("/dash");
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={signInWithRedirect}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
