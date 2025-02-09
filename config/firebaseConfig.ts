// Import the functions you need from the SDKs you need
import {initializeApp} from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigs = {
  apiKey: "AIzaSyDP9CNWNHZjQ7oWmDpvGlAePlln0G5Vwmk",
  authDomain: "ebuddy-test-cd807.firebaseapp.com",
  projectId: "ebuddy-test-cd807",
  storageBucket: "ebuddy-test-cd807.firebasestorage.app",
  messagingSenderId: "63352570547",
  appId: "1:63352570547:web:7ed6273c05dd19df20e6c6"
};

// Initialize Firebase
const firebaseInit = initializeApp(firebaseConfigs);
const db = getFirestore(firebaseInit);

export {
  firebaseInit,
  db,
};
