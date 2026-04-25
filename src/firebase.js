import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC44r6_iu8evf5vdHZf1aSvz_eCgct9Xrw",
  authDomain: "anatomia360-68507.firebaseapp.com",
  projectId: "anatomia360-68507",
  storageBucket: "anatomia360-68507.firebasestorage.app",
  messagingSenderId: "1058129138842",
  appId: "1:1058129138842:web:93068b9e94ece61247bb23",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);