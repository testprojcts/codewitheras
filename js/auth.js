import { auth } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

const signUp = document.getElementById('sign_up');
const logIn = document.getElementById('signin');

// Add EventListener to the Create Account Button
signUp.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailField').value;
  const password = document.getElementById('passwordField').value;

  const authInfo = document.getElementById('auth_info');

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      window.location.href = '../index.html';
      console.log('Account Created');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
      // authInfo.style.display = 'block';
      // authInfo.classList.add('info_failed');
      // authInfo.textContent = `${errorMessage}`;
      // authInfo.innerText = 'Account Creation Failed';
    });
});

// Logging In a User

logIn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailField').value;
  const password = document.getElementById('passwordField').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      // ...
      console.log('Successfully signed In');
      window.location.href = '../index.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
});
