import React, { useState } from "react";
import { signInWithPopup } from "../firebase";

function SignIn() {
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={signInWithPopup}>sign in with google</button>
    </div>
  );
}

export default SignIn;
