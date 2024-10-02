'use client';
import { saveMessagingDeviceToken } from "@/firebase/messaging";
import { FCM_PUSH } from "./sendMessage"

export default function sendNotification() {
    const handleSubmit = async () => {
      saveMessagingDeviceToken();
      FCM_PUSH();
    };

    return (
      <div>
        <button onClick={handleSubmit} className="bg-red-500 text-white py-2 px-4 rounded">Send Notification</button>
      </div>
    )
  }
  