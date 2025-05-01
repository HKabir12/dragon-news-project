// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB61XHLo3DzmwKlnBFmFXVlzgGfnVZI-Jk",
  authDomain: "dragon-news-firebase-b73a2.firebaseapp.com",
  projectId: "dragon-news-firebase-b73a2",
  storageBucket: "dragon-news-firebase-b73a2.firebasestorage.app",
  messagingSenderId: "1012861657126",
  appId: "1:1012861657126:web:c1da03fab15e09030446e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;