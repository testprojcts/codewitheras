import { auth } from './firebase.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

const signUp = document.getElementById('sign_up');
const logIn = document.getElementById('signin');
const googleAuth = document.getElementsByClassName('google-btn');

// Listening for Auth State Changes
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in.
//     console.log('====================================');
//     console.log('user logged in');
//     console.log('====================================');
//   } else {
//     // User is signed out.
//     console.log('====================================');
//     console.log('User not logged in');
//     console.log('====================================');
//   }
// });

// Add EventListener to the Create Account Button
signUp.addEventListener('click', () => {
  // e.preventDefault();
  const email = document.getElementById('emailField').value;
  const password = document.getElementById('passwordField').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // const user = userCredential.user;
      window.location.href = '../index.html';
      console.log('Account Created');

      authStatus.style.display = 'none';
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
logIn.addEventListener('click', () => {
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

// Sign User with Google Account
googleAuth.addEventListener('click', () => {
  alert('Google auth clicked');
  // const provider = new GoogleAuthProvider();

  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     console.log('====================================');
  //     console.log(user);
  //     console.log('====================================');
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
});

// Signing Out a User
// logout.addEventListener('click', () => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       alert('Signed Out');
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// });
