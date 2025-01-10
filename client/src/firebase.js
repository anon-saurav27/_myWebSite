// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mywebsite-a2a6a.firebaseapp.com",
  projectId: "mywebsite-a2a6a",
  storageBucket: "mywebsite-a2a6a.firebasestorage.app",
  messagingSenderId: "452417012858",
  appId: "1:452417012858:web:9db057d7f732906ad8a7c3",
  measurementId: "G-JCRVK5G807",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
