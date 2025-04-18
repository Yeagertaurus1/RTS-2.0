document.addEventListener('DOMContentLoaded', function () {
    const userData = localStorage.getItem('rtsUserData');
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }

    const { nickname, expiration } = JSON.parse(userData);
    // Check if login has expired
    if (expiration && Date.now() >= expiration) {
        localStorage.removeItem('rtsUserData');
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('userNickname').textContent = nickname;

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}); 