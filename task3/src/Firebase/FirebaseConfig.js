import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuXO2V6Q4WPo7VlAN88krknS01zL9Sm9s",
  authDomain: "competishuntask3.firebaseapp.com",
  projectId: "competishuntask3",
  storageBucket: "competishuntask3.appspot.com",
  messagingSenderId: "1009761412677",
  appId: "1:1009761412677:web:ab7ad313e59baf88d9252c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
