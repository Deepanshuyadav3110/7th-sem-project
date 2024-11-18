import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-application-bad8a.firebaseapp.com",
  projectId: "chat-application-bad8a",
  storageBucket: "chat-application-bad8a.firebasestorage.app",
  messagingSenderId: "1066398520916",
  appId: "1:1066398520916:web:44f0b0862af5c686a07fc1",
  measurementId: "G-VCZCYJCJHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

