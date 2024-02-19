// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBa1JtYhg1NgMKKZaAtZgriziU8eM_YgnM",
    authDomain: "amspsingh04-757b1.firebaseapp.com",
    projectId: "amspsingh04-757b1",
    storageBucket: "amspsingh04-757b1.appspot.com",
    messagingSenderId: "711784619082",
    appId: "1:711784619082:web:96156d8316bd9bca025ab3",
    measurementId: "G-FNNY4GXW2T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const analytics = getAnalytics(app);
