import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEmvk5DreW26KB5sKiqUd9-n-_r9hLKtg",
  authDomain: "competishuntask1-a680b.firebaseapp.com",
  projectId: "competishuntask1-a680b",
  storageBucket: "competishuntask1-a680b.appspot.com",
  messagingSenderId: "810862368840",
  appId: "1:810862368840:web:2f1f8eb5e8dab05204207d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
