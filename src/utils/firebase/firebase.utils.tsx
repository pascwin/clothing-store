// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD12tifzAGHabq_t8TGSAO2zmss0ZUqVyQ",
  authDomain: "clothing-shop-db-7c0ee.firebaseapp.com",
  projectId: "clothing-shop-db-7c0ee",
  storageBucket: "clothing-shop-db-7c0ee.appspot.com",
  messagingSenderId: "149591687957",
  appId: "1:149591687957:web:319d0f3625f31f45e65f1c",
};
// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  //select_account is a specific prompt from google
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth: any, additionalInformation = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error: any) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
};