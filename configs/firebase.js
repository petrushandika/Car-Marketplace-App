// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-4b4b5.firebaseapp.com",
  projectId: "car-marketplace-4b4b5",
  storageBucket: "car-marketplace-4b4b5.appspot.com",
  messagingSenderId: "639936676409",
  appId: "1:639936676409:web:80581aa71d13b3132d03e8",
  measurementId: "G-2HL9MLLS9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
