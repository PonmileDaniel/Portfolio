document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for journey steps
    const journeySteps = document.querySelectorAll('.journey-step');
    const journeyOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const journeyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, journeyOptions);

    journeySteps.forEach(step => {
        journeyObserver.observe(step);
    });

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollPosition = 0;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScrollPosition = currentScrollPosition;
    });

    // Dynamic waveform visualization for Harmony project
    const createWaveformEffect = () => {
        const waveform = document.querySelector('.waveform');
        if (!waveform) return;

        // Creates a dynamic SVG waveform
        let svgPath = 'M0,50 ';
        for (let i = 0; i < 20; i++) {
            const height = Math.random() * 40 + 30;
            svgPath += `L${i * 15},${height} `;
        }

        const svgUrl = `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${svgPath}' stroke='white' fill='none' stroke-width='2'/%3E%3C/svg%3E")`;
        waveform.style.maskImage = svgUrl;
    };

    createWaveformEffect();

    // Data connections animation for Nexus project
    const animateConnections = () => {
        const connections = document.querySelectorAll('.data-connection');
        connections.forEach(connection => {
            setInterval(() => {
                const opacity = Math.random() * 0.5 + 0.3;
                connection.style.opacity = opacity;
            }, Math.random() * 2000 + 1000);
        });
    };

    animateConnections();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});