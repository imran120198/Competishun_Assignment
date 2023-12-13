import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW2BT54yJIHpmCN-D9bAqwgsP3v2G2alE",
  authDomain: "competishuntask2.firebaseapp.com",
  projectId: "competishuntask2",
  storageBucket: "competishuntask2.appspot.com",
  messagingSenderId: "289054227671",
  appId: "1:289054227671:web:be49ab5bebfcb36527c492",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();