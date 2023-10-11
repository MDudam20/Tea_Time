const animateElements = document.querySelectorAll('.scroll-animation');

window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    
    animateElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight / 1.5) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

