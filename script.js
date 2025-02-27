// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const desktopMenu = document.getElementById('desktopMenu');

mobileMenuToggle.addEventListener('click', () => {
    desktopMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        desktopMenu.classList.remove('active');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Testimonials Slider
const testimonials = document.getElementById('testimonials');
const sliderNav = document.getElementById('sliderNav');
let currentSlide = 0;
const testimonialItems = document.querySelectorAll('.testimonial');

// Create dots
testimonialItems.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    sliderNav.appendChild(dot);
});

function goToSlide(index) {
    currentSlide = index;
    testimonials.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        if (i === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto slide
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialItems.length;
    goToSlide(currentSlide);
}, 5000);

// Stats Counter Animation
const statNumbers = document.quer