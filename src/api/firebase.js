import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLWtFBSWnO5VgBQYEhMZOnDsrkoiEL6Tg",
  authDomain: "random-hex.firebaseapp.com",
  projectId: "random-hex",
  storageBucket: "random-hex.appspot.com",
  messagingSenderId: "624239491356",
  appId: "1:624239491356:web:949d4fc72a9d07396e22d9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth()

export const usersCollection = db.collection('users')