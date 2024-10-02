'use server';
import admin from "firebase-admin";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

var registrationToken = ""
const q = query(collection(db, "tokens"), where("entry_id", "==", "1"));

const querySnapshot = await getDocs(q);
var doc = (querySnapshot.docs[0].data()['token'])
registrationToken = doc
console.log(querySnapshot.empty)

const message = {
    token: registrationToken,
    "notification": {
        "title": "Here is a Notification!",
        "body" : "my message is here."
    },
    data: {
        title: "Here is a notification!",
        body: "my message is here.",
        link_url: "http://localhost:3000" // When a user clicks on the notification, go here
    }
};

export async function FCM_PUSH () { 
    admin.messaging().send(message).then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
}).catch((error) => {
    console.log('Error sending message:', error);
})
};