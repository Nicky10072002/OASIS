

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginError = document.getElementById('login-error');
    const regError = document.getElementById('reg-error');
    const users = [];
  
    loginForm.addEventListener('submit', event => {
      event.preventDefault();
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
  
      const user = users.find(user => user.username === username);
  
      if (user && user.password === password) {
        loginError.textContent = '';
        alert('Login successful!');
      } else {
        alert('Authentication failed.');
      }
    });
  
    registerForm.addEventListener('submit', event => {
      event.preventDefault();
      const username = document.getElementById('reg-username').value;
      const password = document.getElementById('reg-password').value;
  
      const existingUser = users.find(user => user.username === username);
      if (existingUser) {
        regError.textContent = 'Username already exists.';
      } else {
        users.push({ username, password });
        regError.textContent = '';
        alert('Registration successful!');
      }
    });
  });