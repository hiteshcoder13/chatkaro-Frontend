// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ILtObMkX1wPlMK3vTjCNcHtlM05M1sU",
  authDomain: "chatting-app-9644b.firebaseapp.com",
  projectId: "chatting-app-9644b",
  storageBucket: "chatting-app-9644b.appspot.com",
  messagingSenderId: "840651727141",
  appId: "1:840651727141:web:9e2c3fcec5a306d9fdbacc",
  measurementId: "G-M2Z4YXYFRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore(app);