// JavaScript
// src/firebase.js
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyDhRlz5cFJCJ4Z1Qz8Ok3nh4lqGLzRGEtY",
    authDomain: "beltechwebsite.firebaseapp.com",
    projectId: "beltechwebsite",
    storageBucket: "beltechwebsite.appspot.com",
    messagingSenderId: "756227364745",
    appId: "1:756227364745:web:c703eb60cc324e00e37358",
    measurementId: "G-EPMMK9347S"
  };
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}; 

