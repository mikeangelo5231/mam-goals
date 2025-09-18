// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXHls4PEPJ43mnnrlcdj_arSagIWm2CqU",
  authDomain: "mygoals-f7374.firebaseapp.com",
  projectId: "mygoals-f7374",
  storageBucket: "mygoals-f7374.firebasestorage.app",
  messagingSenderId: "291922533241",
  appId: "1:291922533241:web:333c58e499df7028a4eda8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)