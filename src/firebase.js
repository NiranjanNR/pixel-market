// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAenYCe5Y9vG852k09lAu8cjJvKKJwCIs4",
  authDomain: "pixel-market-87191.firebaseapp.com",
  projectId: "pixel-market-87191",
  storageBucket: "pixel-market-87191.appspot.com",
  messagingSenderId: "913387788562",
  appId: "1:913387788562:web:e05c92aecde3ace5233bcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;
