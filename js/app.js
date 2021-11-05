import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

const startBtn = document.getElementById('start_btn');

startBtn.addEventListener('click', () => {
  if (user) {
    window.location.href = './home.html';
  } else {
    window.location.href = './login.html';
  }
});
