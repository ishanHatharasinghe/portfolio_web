import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase, onValue, push, ref, remove, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMDp5WhCZy0tDz-_VcN3bz8HUW2Yp0lw0",
  authDomain: "personal-portfolio-37a0a.firebaseapp.com",
  databaseURL: "https://personal-portfolio-37a0a-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-37a0a",
  storageBucket: "personal-portfolio-37a0a.appspot.com",
  messagingSenderId: "695560029777",
  appId: "1:695560029777:web:2f666fd6fe7aa39b0c1a70",
  measurementId: "G-64P0PSRQN5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const provider = new GoogleAuthProvider();

export { auth, db, onValue, provider, push, ref, remove, signInWithPopup, signOut, update };
