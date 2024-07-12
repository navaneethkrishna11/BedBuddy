const registerForm = document.getElementById('registerForm');
const loginBtn = document.getElementById('loginBtn');
const homeBtn = document.getElementById('homeBtn');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
});

loginBtn.addEventListener('click', () => {
    // Navigate to the login page
    window.location.href = '/login.html'; // Replace with the correct path
});

homeBtn.addEventListener('click', () => {
    // Navigate to the home page
    window.location.href = '/index.html'; // Replace with the correct path
});