import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCU3gYXxR4bepQPY4IwrpStBR9YxZ0YUME",
  authDomain: "mymarket-b432c.firebaseapp.com",
  projectId: "mymarket-b432c",
  storageBucket: "mymarket-b432c.appspot.com",
  messagingSenderId: "570458411538",
  appId: "1:570458411538:web:a2771a220b6799631c7ecb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
