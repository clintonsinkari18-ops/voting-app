import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJCTKw8UAq4lZwI5PucDIB84PlH77GzaA",
  authDomain: "fir-voting-21661.firebaseapp.com",
  projectId: "fir-voting-21661",
  storageBucket: "fir-voting-21661.firebasestorage.app",
  messagingSenderId: "447540369173",
  appId: "1:447540369173:web:e31f6ad87e4a085b547b1c",
  measurementId: "G-L422EWKQ4X"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
