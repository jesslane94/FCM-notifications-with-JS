import { collection, addDoc } from 'firebase/firestore';
import { messaging, db } from "../app/firebaseConfig";
import { getToken, onMessage } from 'firebase/messaging'; 

// export const FCM_TOKEN_KEY = "fcmToken"; // key for storing FCM token in Firestore
const VAPID_KEY = "BDThvrnIE7bAPzbY3cekxtDcKIpLRy2rrOV29YkbtQiEo99QgMQ4m7MoeGMR_YI6bt54tCZDPBoDZiBaRhELTes";

// Requests permissions to show notifications.
async function requestNotificationsPermissions() {
  console.log('Requesting notifications permission...');
  const permission = await Notification.requestPermission();
  
  if (permission === 'granted') {
    console.log('Notification permission granted.');
    // Notification permission granted.
    await saveMessagingDeviceToken();
  } else {
    console.log('Unable to get permission to notify.');
  }
}

// Saves the messaging device token to Cloud Firestore.
export async function saveMessagingDeviceToken() {
  console.log('save msg device token');
  try {
    const msg = await messaging();
    const fcmToken = await getToken(msg, { vapidKey: VAPID_KEY });
    if (fcmToken) {
      console.log('Got FCM device token:', fcmToken);
      // Save device token to 
      // for now, hardcoded. can use a userID or something else you can query
      await addDoc(collection(db, "tokens"),{
        entry_id: "1",
        token: fcmToken
      })
      // This will fire when a message is received while the app is in the foreground.
      // When the app is in the background, firebase-messaging-sw.js will receive the message instead.
      onMessage(msg, (message) => {
        console.log(
          'New foreground notification from Firebase Messaging!',
          message.notification
        );
        new Notification(message.notification.title, { body: message.notification.body });
      });
    } else {
      // Need to request permissions to show notifications.
      requestNotificationsPermissions();
    }
  } catch (error) {
    console.error('Unable to get messaging token.', error);
  };
}