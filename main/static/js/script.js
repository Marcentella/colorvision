const hamburger = document.getElementById('hamburger-img');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide div');
    let currentIndex = 0;

    function showNextSlide() {
        const currentSlide = slides[currentIndex];
        const nextIndex = (currentIndex + 1) % slides.length;
        const nextSlide = slides[nextIndex];

        currentSlide.classList.remove('active');
        currentSlide.classList.add('exit');

        nextSlide.classList.remove('exit');
        nextSlide.classList.add('active');

        // Reset exit class after transition
        currentSlide.addEventListener('transitionend', () => {
            currentSlide.classList.remove('exit');
        }, { once: true });

        currentIndex = nextIndex;
    }

    setInterval(showNextSlide, 1300);

    
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 655) {
            e.preventDefault();
            dropdownContent.classList.toggle('show');
        }
    });

    
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target) && window.innerWidth <= 655) {
            dropdownContent.classList.remove('show');
        }
    });
});


