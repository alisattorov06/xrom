
        
        
        // Samsung splash screen
        document.addEventListener('DOMContentLoaded', function() {
            const splash = document.getElementById('samsung-splash');
            
            // Show splash screen for 3.5 seconds
            setTimeout(function() {
                splash.style.opacity = '0';
                setTimeout(function() {
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

        // Dark/light mode toggle
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        themeToggle.addEventListener('click', () => {
            if (html.getAttribute('data-theme') === 'dark') {
                html.setAttribute('data-theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                html.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });

        // Animate on scroll
        const animateElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1
        });

        animateElements.forEach(element => {
            observer.observe(element);
        });
 
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

        

        // Add floating elements dynamically
        function createFloatingElements() {
            const floatingContainer = document.querySelector('.floating-elements');
            
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