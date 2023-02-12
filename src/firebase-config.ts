import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCiQ1hCxq0nfCx4FDT18OnwW-BMo0W1lQo",
    authDomain: "frontend-final-project.firebaseapp.com",
    projectId: "frontend-final-project",
    storageBucket: "frontend-final-project.appspot.com",
    messagingSenderId: "558094028034",
    appId: "1:558094028034:web:54fc94b8d39daad33e061b",
    measurementId: "G-B5DV6K64S1"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);