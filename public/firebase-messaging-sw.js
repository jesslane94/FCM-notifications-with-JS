// import { firebaseConfig } from '../config.mjs';

// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

// firebase.initializeApp(firebaseConfig);

firebase.initializeApp({
  apiKey: "AIzaSyD2HV19HltxDAOEEePnTLUvtuLLu_QRacs",
  authDomain: "my-app-5ba3e.firebaseapp.com",
  projectId: "my-app-5ba3e",
  storageBucket: "my-app-5ba3e.appspot.com",
  messagingSenderId: "419201348623",
  appId: "1:419201348623:web:206cf5bd874fa5609edf7a",
  measurementId: "G-L0E257E7X9"
})

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});