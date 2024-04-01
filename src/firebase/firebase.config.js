// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIcLEg8tzcTBcpmsrjGj8_Eco0tBiKq0U",
  authDomain: "auth-moha-milon-b84c8.firebaseapp.com",
  projectId: "auth-moha-milon-b84c8",
  storageBucket: "auth-moha-milon-b84c8.appspot.com",
  messagingSenderId: "13313446821",
  appId: "1:13313446821:web:f03ffa7b45ab0a1ceb0e4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;