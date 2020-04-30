import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

// firebase.analytics();

var provider = new firebase.auth.GoogleAuthProvider();

export function signInWithPopup() {
  firebase
    .auth()
    .signInWithRedirect(provider)
    .getRedirectResult()
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(`Login has worked. Access token ${token}. User info ${user}`);
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(
        `The sign in didn't work. Error code ${errorCode}. Error email ${email}. Error message ${errorMessage}. Error credential ${credential}`
      );
    });
}

export function onAuthStateChanged(callback) {
  firebase.auth().onAuthStateChanged(callback);
}

export function logout() {
  return firebase.auth().signOut().catch(console.error);
}

/* 

1. a user logs in using firebase
2. firebase has a unique identifier for that user, is this just the email address or something more? 
3. this unique identifier is used to fetch relevant bootcamper info from the db 
4. this is then displayed when they click 'my profile'
5. when a user first logs in using firebase, they need to be able to create a profile 
6. this profile is what is fetched from the db when they subsequently log in  */
