import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2UxSvYl3khBi1HMVoK-RlX-Szv5RpRrw",
  authDomain: "clone-87e7a.firebaseapp.com",
  projectId: "clone-87e7a",
  storageBucket: "clone-87e7a.appspot.com",
  messagingSenderId: "360875427960",
  appId: "1:360875427960:web:831227fac8b7a3bcc8858d",
  measurementId: "G-KW03TEQEQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider();