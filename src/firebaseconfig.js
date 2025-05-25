// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlARS1jLUMidXjFgb0A9CfaB6VYWxvWAs",
  authDomain: "career-gudiance.firebaseapp.com",
  projectId: "career-gudiance",
  storageBucket: "career-gudiance.firebasestorage.app",
  messagingSenderId: "220324562673",
  appId: "1:220324562673:web:4e12d217edea92ffb14b50",
  measurementId: "G-WRB6BVSXPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Auth
const auth = getAuth(app);

// ✅ Export auth
export { auth };
