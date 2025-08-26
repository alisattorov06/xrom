// Samsung splash screen
document.addEventListener('DOMContentLoaded', function () {
    const splash = document.getElementById('samsung-splash');

    // Show splash screen for 3.5 seconds
    setTimeout(function () {
        splash.style.opacity = '0';
        setTimeout(function () {
            splash.style.display = 'none';
        }, 800);
    }, 3500);

    // Rest of your initialization code
    createFloatingElements();

    // Ensure external links open in new tabs
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// Dark/light mode toggle with persistence
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Apply theme from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('theme') === 'dark'){
        html.setAttribute('data-theme', 'dark');
        if(themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        html.setAttribute('data-theme', 'light');
        if(themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Toggle theme and save to localStorage
if(themeToggle){
    themeToggle.addEventListener('click', () => {
        if (html.getAttribute('data-theme') === 'dark') {
            html.setAttribute('data-theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Animate on scroll
const animateElements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(element => {
    observer.observe(element);
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if(mobileMenuBtn){
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Add floating elements dynamically
function createFloatingElements() {
    const floatingContainer = document.querySelector('.floating-elements');
    if(!floatingContainer) return;

    for (let i = 0; i < 8; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');

        const size = Math.random() * 100 + 50;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;

        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${top}%`;
        element.style.left = `${left}%`;
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;

        floatingContainer.appendChild(element);
    }
}

// Search functionality
const searchBar = document.getElementById('searchBar');
const blogCards = document.querySelectorAll('.blog-card');

if(searchBar){
    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        blogCards.forEach(card => {
            const title = card.querySelector('.blog-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
            if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Ensure external links open in new tabs
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.getAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Debug link clicks
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Link bosildi:', this.href);
        });
    });
});
