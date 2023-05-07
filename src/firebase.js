// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRnggZ6V3SKc9bPlzmj9c1_lX3bByauKs",
  authDomain: "pixel-market-1196a.firebaseapp.com",
  projectId: "pixel-market-1196a",
  storageBucket: "pixel-market-1196a.appspot.com",
  messagingSenderId: "1045407361466",
  appId: "1:1045407361466:web:1cd7b4a5f5aae9d714d583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;
