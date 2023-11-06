// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5pFqhuTEfLHYvu85WvMlafP6HCF_FsE",
  authDomain: "gaming-80098.firebaseapp.com",
  projectId: "gaming-80098",
  storageBucket: "gaming-80098.appspot.com",
  messagingSenderId: "1059115495236",
  appId: "1:1059115495236:web:0adb178890fc8feca2f111",
  measurementId: "G-TG7HVDGCD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
