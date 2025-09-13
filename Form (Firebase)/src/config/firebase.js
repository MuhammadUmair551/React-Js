import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBguKAu_1QsFqSNVEd0OJTTrhPztAsLK2E",
  authDomain: "form-authentication-2ba87.firebaseapp.com",
  projectId: "form-authentication-2ba87",
  storageBucket: "form-authentication-2ba87.firebasestorage.app",
  messagingSenderId: "119555157153",
  appId: "1:119555157153:web:82f2f9d7f054b61c0354e0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
}
