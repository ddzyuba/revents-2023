// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2023-90906.firebaseapp.com",
  projectId: "revents-2023-90906",
  storageBucket: "revents-2023-90906.appspot.com",
  messagingSenderId: "965814956749",
  appId: "1:965814956749:web:e2f1a97c6f8cd6df7fef84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);