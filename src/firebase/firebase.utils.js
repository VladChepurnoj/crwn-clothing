import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDejww5oSj354vu3OU1LGn1BjUh6-j8AEE",
  authDomain: "crwn-db-5777e.firebaseapp.com",
  projectId: "crwn-db-5777e",
  storageBucket: "crwn-db-5777e.appspot.com",
  messagingSenderId: "130125010604",
  appId: "1:130125010604:web:0074a6b546e9067ab9f109",
  measurementId: "G-84JPH7SFP7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
