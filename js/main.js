// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = revealElements[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            revealElements[i].classList.add('active');
        }
    }
};

window.addEventListener('scroll', revealOnScroll);

// Initial call to reveal elements on load
revealOnScroll();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});

// Simple Log to confirm script execution
console.log('WealthFam Landing Page Script Initialized');
