// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMakLLPzQElTw8jfUO-sDIVHFZ858_bzI",
  authDomain: "jobtrackr-d05d7.firebaseapp.com",
  projectId: "jobtrackr-d05d7",
  storageBucket: "jobtrackr-d05d7.firebasestorage.app",
  messagingSenderId: "1005417995644",
  appId: "1:1005417995644:web:ab84ffc4f50c39dba958f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot }