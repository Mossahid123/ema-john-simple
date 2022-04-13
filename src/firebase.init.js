// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Krx2Zq4x7-MCMkOUwxlmBhCuudSEpBs",
  authDomain: "ema-john-simple-9f4d7.firebaseapp.com",
  projectId: "ema-john-simple-9f4d7",
  storageBucket: "ema-john-simple-9f4d7.appspot.com",
  messagingSenderId: "70897828736",
  appId: "1:70897828736:web:b99c9ae6e53f15cd193765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth