import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMc1pEJUb7x7fUEnaQJkoYx_xIqYETXZg",
  authDomain: "wee-go-9b0e5.firebaseapp.com",
  projectId: "wee-go-9b0e5",
  storageBucket: "wee-go-9b0e5.appspot.com",
  messagingSenderId: "897362681152",
  appId: "1:897362681152:web:61f20acc0a043148086ea5",
  measurementId: "G-1WNTVCLLJ0",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
