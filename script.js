// Loader
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
    }, 1500);
});

// Efectos al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animación del poema
    const poemLines = document.querySelectorAll('.poem-line');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });
    
    poemLines.forEach(line => {
        observer.observe(line);
    });
    
    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Botón de amor
    const loveBtn = document.querySelector('.love-btn');
    const heartsContainer = document.querySelector('.floating-hearts-container');
    
    loveBtn.addEventListener('click', function() {
        createHearts();
    });
    
    function createHearts() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
                // Posición aleatoria
                const posX = Math.random() * window.innerWidth;
                heart.style.left = `${posX}px`;
                heart.style.bottom = '0';
                
                // Tamaño aleatorio
                const size = Math.random() * 20 + 10;
                heart.style.width = `${size}px`;
                heart.style.height = `${size}px`;
                
                // Duración de animación aleatoria
                const duration = Math.random() * 3 + 2;
                heart.style.animationDuration = `${duration}s`;
                
                // Color aleatorio
                const colors = ['#e83f8e', '#ff8fab', '#ffc2d1', '#ff69b4'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                heart.style.backgroundColor = randomColor;
                heart.querySelector(':before, :after').style.backgroundColor = randomColor;
                
                heartsContainer.appendChild(heart);
                
                // Eliminar después de la animación
                setTimeout(() => {
                    heart.remove();
                }, duration * 1000);
            }, i * 200);
        }
    }
    
    // Efecto de aparición al hacer scroll
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Flecha de scroll down
    const scrollDown = document.querySelector('.scroll-down');
    
    scrollDown.addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight - 80,
            behavior: 'smooth'
        });
    });
    
    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Efecto hover en tarjetas de testimonio
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Mostrar elementos con retraso
    const elementsToAnimate = document.querySelectorAll('[data-aos]');
    
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transition = 'all 0.6s ease';
    });
});