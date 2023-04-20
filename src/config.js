import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDEcnWnZ-6TbLgPzwOFxGfeNWSHEx0chyI",
  authDomain: "e-commerce-3d714.firebaseapp.com",
  projectId: "e-commerce-3d714",
  storageBucket: "e-commerce-3d714.appspot.com",
  messagingSenderId: "1347170298",
  appId: "1:1347170298:web:36a59cf0e7d23971d07e43",
  measurementId: "G-2T0XRVDC66"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {auth, db, provider}