import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQTS4M5x64_JyteKyahbnOpS7yDkty_3o",
  authDomain: "quiz-app-758bf.firebaseapp.com",
  projectId: "quiz-app-758bf",
  storageBucket: "quiz-app-758bf.appspot.com", 
  messagingSenderId: "514727568665",
  appId: "1:514727568665:web:17a7014dc1537b2cba5188"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
