 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyASazoMofNCtoma92_Y5viNbsNN4My1dsQ",
   authDomain: "logintiendaglobantje.firebaseapp.com",
   projectId: "logintiendaglobantje",
   storageBucket: "logintiendaglobantje.appspot.com",
   messagingSenderId: "862318311048",
   appId: "1:862318311048:web:ecfb940f8d62a9eedad13d",
   measurementId: "G-N8T4J645KE"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
