// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2HV19HltxDAOEEePnTLUvtuLLu_QRacs",
  authDomain: "my-app-5ba3e.firebaseapp.com",
  projectId: "my-app-5ba3e",
  storageBucket: "my-app-5ba3e.appspot.com",
  messagingSenderId: "419201348623",
  appId: "1:419201348623:web:206cf5bd874fa5609edf7a",
  measurementId: "G-L0E257E7X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
// const analytics = getAnalytics(app);
