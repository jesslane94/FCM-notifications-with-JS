// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { isSupported, getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from '../config.mjs';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = async () => await isSupported() && getMessaging(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);