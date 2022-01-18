import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    //use env variables when publishing!
    apiKey: "AIzaSyC_Nah9fdleZynGNyg8jIDaAtFQQ1Y7qEI",
    authDomain: "react-fir-d4114.firebaseapp.com",
    projectId: "react-fir-d4114",
    storageBucket: "react-fir-d4114.appspot.com",
    messagingSenderId: "439184310634",
    appId: "1:439184310634:web:3b77df9e71345a285fe513",
    measurementId: "G-02KZQSMCZG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();

export const storage = getStorage();