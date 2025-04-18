// Media Page JavaScript

document.addEventListener('DOMContentLoaded', function () {
    // Initialize navigation
    initializeNavigation();

    // Initialize music players (placeholder for now)
    initializeMusicPlayers();

    // Initialize video previews
    initializeVideoPreviews();

    // Initialize photo gallery
    initializePhotoGallery();
});

function initializeNavigation() {
    const sections = document.querySelectorAll('.music-section, .videos-section, .photos-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

function initializeMusicPlayers() {
    const playButtons = document.querySelectorAll('.player-placeholder');

    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Placeholder for actual music player functionality
            const artistName = this.closest('.music-card').querySelector('h3').textContent;
            console.log(`Playing music for ${artistName}`);

            // Add visual feedback
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-play')) {
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            } else {
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            }
        });
    });
}

function initializeVideoPreviews() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const thumbnail = this.querySelector('.video-thumbnail');
            thumbnail.style.background = 'rgba(255, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', function () {
            const thumbnail = this.querySelector('.video-thumbnail');
            thumbnail.style.background = 'rgba(255, 0, 0, 0.1)';
        });

        card.addEventListener('click', function () {
            const videoTitle = this.querySelector('h3').textContent;
            // Placeholder for actual video player functionality
            console.log(`Opening video: ${videoTitle}`);
        });
    });
}

function initializePhotoGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            // Placeholder for photo gallery modal functionality
            console.log('Opening photo in modal');
        });
    });
}

// Add loading animation for dynamic content
function showLoadingAnimation(element) {
    element.classList.add('loading');
}

function hideLoadingAnimation(element) {
    element.classList.remove('loading');
}

// Handle platform links
document.querySelectorAll('.listen-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const platform = this.getAttribute('data-platform');
        const artist = this.closest('.music-card').querySelector('h3').textContent;

        // Log analytics (placeholder)
        console.log(`${artist} - Redirecting to ${platform}`);
    });
}); 