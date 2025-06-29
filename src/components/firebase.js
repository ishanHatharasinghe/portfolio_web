// Firebase config and init (firebaseConfig.js)
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, push, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMDp5WhCZy0tDz-_VcN3bz8HUW2Yp0lw0",
  authDomain: "personal-portfolio-37a0a.firebaseapp.com",
  projectId: "personal-portfolio-37a0a",
  storageBucket: "personal-portfolio-37a0a.appspot.com",
  messagingSenderId: "695560029777",
  appId: "1:695560029777:web:2f666fd6fe7aa39b0c1a70",
  measurementId: "G-64P0PSRQN5",
  databaseURL: "https://personal-portfolio-37a0a-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, onValue, push, ref };

