// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOAl_3erdHk9WVihHmOVp29NBslDRcO0k",
  authDomain: "e-commerce-b75a6.firebaseapp.com",
  projectId: "e-commerce-b75a6",
  storageBucket: "e-commerce-b75a6.appspot.com",
  messagingSenderId: "112416763750",
  appId: "1:112416763750:web:bdd5a6c7aa5be7185e62a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const Auth = getAuth(app);

export { fireDB, Auth };
