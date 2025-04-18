document.addEventListener('DOMContentLoaded', function () {
    // Check for existing login
    checkExistingLogin();

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const nickname = document.getElementById('nickname').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        if (password === 'WEMAKEWILD') {
            // Calculate expiration time (2 days from now if remember me is checked)
            const expirationTime = rememberMe ? Date.now() + (2 * 24 * 60 * 60 * 1000) : null;

            // Store user data
            const userData = {
                nickname: nickname,
                expiration: expirationTime
            };

            // Store in localStorage
            localStorage.setItem('rtsUserData', JSON.stringify(userData));

            // Redirect to homepage
            window.location.href = 'home.html';
        } else {
            alert('Incorrect password. Please try again.');
        }
    });
});

function checkExistingLogin() {
    const userData = localStorage.getItem('rtsUserData');

    if (userData) {
        const { nickname, expiration } = JSON.parse(userData);

        // If there's no expiration (session-only) or the login hasn't expired
        if (!expiration || Date.now() < expiration) {
            // Still valid, redirect to home
            window.location.href = 'home.html';
        } else {
            // Login expired, clear the data
            localStorage.removeItem('rtsUserData');
        }
    }
} 