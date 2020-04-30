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
      console.log(`Login has worked. Access token`, token, `User info `, user);
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(
        `The sign in didn't work. Error code`,
        errorCode,
        `Error email`,
        email,
        `Error message `,
        errorMessage,
        `Error credential `,
        credential
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


1. a user logs in using firebase for the first time, their firebase UID token is collected (as well as photo url) and a post
request is made to the db, creating them an empty profile. Their db id = firebase UID.
2. They're taken to the create profile page, they fill in their details and when submitted, this is a patch request to their profile.
3. when they click 'my profile', a get request is done based on their UID which is taken from local storage and put in the request.
4. When searching for profiles, the job satisfaction section is only displayed if the local storage UID matches the user profile 
UID that they're viewing


1. change bootcampers db to store UID, photoURL and email address ✅
2. find out how to grab the UID, photoURL and email from google firebase
3. logic on login: if no user in the db matches the current UID, take them to create profile page. 
4. On that page, user can fill in all their details.
5. store the google photoURL in state and display it on the create profile page.
6. On form submit, do post request to database and include UID, photoURL and email address from firebase.



1. a user logs in using firebase
2. firebase has a unique identifier for that user, is this just the email address or something more? 
3. this unique identifier is used to fetch relevant bootcamper info from the db 
4. this is then displayed when they click 'my profile'
5. when a user first logs in using firebase, they need to be able to create a profile 
6. this profile is what is fetched from the db when they subsequently log in  

*/
