import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5IR9rja11axLnBLivpxTdE61yJRNNfp8",
  authDomain: "formdesign-8be60.firebaseapp.com",
  projectId: "formdesign-8be60",
  storageBucket: "formdesign-8be60.appspot.com",  // ✅ Fixed this
  messagingSenderId: "129227468932",
  appId: "1:129227468932:web:f130704663140fb5c612d1",
  measurementId: "G-EPTW7WQD1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db };
