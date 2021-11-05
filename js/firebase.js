// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnDXc0qjlfUjUp_kOlHTdo1UvUfBr4lHU",
  authDomain: "codewitheras-auth.firebaseapp.com",
  databaseURL: "https://codewitheras-auth-default-rtdb.firebaseio.com",
  projectId: "codewitheras-auth",
  storageBucket: "codewitheras-auth.appspot.com",
  messagingSenderId: "557394395880",
  appId: "1:557394395880:web:bb55cf6d93f9dc5d5f7f5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
