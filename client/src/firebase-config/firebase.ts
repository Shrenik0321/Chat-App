import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHTOynxHdpASETRk6iXNLI4p1VBCM9IpE",
  authDomain: "chat-app-3c332.firebaseapp.com",
  projectId: "chat-app-3c332",
  storageBucket: "chat-app-3c332.appspot.com",
  messagingSenderId: "806117735708",
  appId: "1:806117735708:web:99b825080690b7ec11ced9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
