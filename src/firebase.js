// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ODBnhsNihbVWdFgO8VrRzsDcBVDP8po",
  authDomain: "pixel-market-7d536.firebaseapp.com",
  projectId: "pixel-market-7d536",
  storageBucket: "pixel-market-7d536.appspot.com",
  messagingSenderId: "823000041423",
  appId: "1:823000041423:web:acd1cae04ec98aee8034ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;
