// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mywebpage-6a8d8.firebaseapp.com",
  projectId: "mywebpage-6a8d8",
  storageBucket: "mywebpage-6a8d8.firebasestorage.app",
  messagingSenderId: "37962567456",
  appId: "1:37962567456:web:3d7dd6d8b421e4a4e11145",
  measurementId: "G-CWL9EYH2E4"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
