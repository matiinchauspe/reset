// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Rl0nHVnP8-9_tbnnXrWmGlXT2PoQXX4",
  authDomain: "reset-dc1c6.firebaseapp.com",
  projectId: "reset-dc1c6",
  storageBucket: "reset-dc1c6.appspot.com",
  messagingSenderId: "1048297904721",
  appId: "1:1048297904721:web:d115568298ccba6cde7670",
  measurementId: "G-F0HSJ0T456",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
