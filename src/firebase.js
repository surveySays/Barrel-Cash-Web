// src/firebase.js

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7HK47P_9Y7bOxRP-e9IL6LN1OIQzH8GE",
  authDomain: "barrel-cash-web.firebaseapp.com",
  databaseURL: "https://barrel-cash-web.firebaseio.com",
  projectId: "barrel-cash-web",
  storageBucket: "barrel-cash-web.appspot.com",
  messagingSenderId: "726412916302",
  appId: "1:726412916302:web:297a9e24f1a090241bb51f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
