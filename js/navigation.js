document.addEventListener('DOMContentLoaded', function () {
    // Check if user is logged in
    const userData = localStorage.getItem('rtsUserData');
    if (!userData && !window.location.pathname.includes('index.html')) {
        window.location.href = 'index.html';
        return;
    }

    if (userData) {
        const { nickname, expiration } = JSON.parse(userData);
        // Check if login has expired
        if (expiration && Date.now() >= expiration) {
            localStorage.removeItem('rtsUserData');
            if (!window.location.pathname.includes('index.html')) {
                window.location.href = 'index.html';
                return;
            }
        }
    }

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'home.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        // Remove any existing active classes
        link.classList.remove('active');
        // Add active class to current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 