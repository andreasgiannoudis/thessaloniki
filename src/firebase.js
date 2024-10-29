// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace with your Firebase config
const firebaseConfig = {

    apiKey: "AIzaSyBkhQxCli0UHCadNd0jvo4_tgGiWE4rlGk",
  
    authDomain: "thessify-77243.firebaseapp.com",
  
    projectId: "thessify-77243",
  
    storageBucket: "thessify-77243.appspot.com",
  
    messagingSenderId: "461241503705",
  
    appId: "1:461241503705:web:97fc8a0bffbdc21de1d3c8"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
