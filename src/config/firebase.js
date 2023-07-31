// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB2w1xZXgJSlNpJKlO82LvzQ7yzpv30Bg",
  authDomain: "vite-contact-77fde.firebaseapp.com",
  projectId: "vite-contact-77fde",
  storageBucket: "vite-contact-77fde.appspot.com",
  messagingSenderId: "938202898250",
  appId: "1:938202898250:web:a3137b25c63d9e4967ebb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);