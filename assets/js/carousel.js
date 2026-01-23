/**
 * assets/js/carousel.js
 * Contiene la lógica reutilizable para inicializar carruseles horizontales.
 */
function initializeCarousel({
    containerSelector,
    cardSelector,
    dotsSelector,
    autoScroll = 'mobile', // 'none', 'mobile', 'always'
    scrollSpeed = 4000
}) {
    const scrollContainer = document.querySelector(containerSelector);
    const dotsContainer = document.querySelector(dotsSelector);

    if (!scrollContainer) {
        // console.warn(`Carousel container not found for: ${containerSelector}`);
        return;
    }

    const cards = scrollContainer.querySelectorAll(cardSelector);
    const cardCount = cards.length;
    let autoScrollInterval;
    let currentIndex = 0;

    // Si no hay suficientes tarjetas para hacer scroll, no hacer nada.
    const isCarouselActive = () => {
        // El carrusel está inactivo si no hay overflow
        return scrollContainer.scrollWidth > scrollContainer.clientWidth;
    };
    
    if (cardCount <= 1) {
        if (dotsContainer) dotsContainer.style.display = 'none';
        return;
    }

    // 1. Crear los puntos de paginación
    if (dotsContainer) {
        dotsContainer.innerHTML = ''; // Limpiar puntos existentes
        for (let i = 0; i < cardCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoScroll();
            });
            dotsContainer.appendChild(dot);
        }
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
    if (dots.length > 0) {
        dots[0].classList.add('active');
    }

    // 2. Función para ir a un slide específico
    function goToSlide(index) {
        if (!isCarouselActive()) return;
        if (index >= 0 && index < cardCount) {
            const card = cards[index];
            const scrollLeft = card.offsetLeft - (scrollContainer.offsetWidth - card.offsetWidth) / 2;
            scrollContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
            currentIndex = index;
            updateDots();
        }
    }

    // 3. Actualizar el punto activo
    function updateDots() {
        if (!dotsContainer || !isCarouselActive()) return;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // 4. Detectar el slide actual mientras se hace scroll
    const handleScroll = () => {
        if (!isCarouselActive()) {
            if (dotsContainer) dotsContainer.style.display = 'none';
            return;
        }
        if (dotsContainer) dotsContainer.style.display = 'flex';

        const scrollLeft = scrollContainer.scrollLeft;
        const containerWidth = scrollContainer.offsetWidth;

        let closestCardIndex = 0;
        let minDistance = Infinity;

        cards.forEach((card, i) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const scrollCenter = scrollLeft + containerWidth / 2;
            const distance = Math.abs(cardCenter - scrollCenter);

            if (distance < minDistance) {
                minDistance = distance;
                closestCardIndex = i;
            }
        });

        if (currentIndex !== closestCardIndex) {
            currentIndex = closestCardIndex;
            updateDots();
        }
    };
    
    scrollContainer.addEventListener('scroll', handleScroll);

    // 5. Auto-scroll
    function startAutoScroll() {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
        
        autoScrollInterval = setInterval(() => {
            if (!isCarouselActive()) return;
            let nextIndex = (currentIndex + 1) % cardCount;
            goToSlide(nextIndex);
        }, scrollSpeed);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    function resetAutoScroll() {
        stopAutoScroll();
        manageAutoScroll();
    }

    const manageAutoScroll = () => {
        const isMobile = window.innerWidth <= 768;
        
        if (autoScroll === 'always' || (autoScroll === 'mobile' && isMobile)) {
            startAutoScroll();
        } else {
            stopAutoScroll();
        }
    };

    // Listeners de interacción del usuario
    scrollContainer.addEventListener('touchstart', stopAutoScroll, { passive: true });
    scrollContainer.addEventListener('touchend', resetAutoScroll);
    scrollContainer.addEventListener('mouseenter', stopAutoScroll);
    scrollContainer.addEventListener('mouseleave', resetAutoScroll);

    // Listener para cambios de tamaño de ventana
    window.addEventListener('resize', () => {
        handleScroll();
        manageAutoScroll();
    });

    // Iniciar por primera vez
    handleScroll();
    manageAutoScroll();
}

/**
 * Inicialización específica para el carrusel de componentes en index.html
 */
function initComponentesCarousel() {
    const carousel = document.querySelector(\'#componentes-seguridad .carousel-container\');
    if (!carousel) return;

    const cards = carousel.querySelectorAll(\".carousel-card\");
    const dotsContainer = document.querySelector(\'#componentes-seguridad .pagination-dots\');
    if (cards.length === 0) return;

    let currentIndex = 0;
    let isHovering = false;
    let isTouching = false;
    let maxScrollableSlides = cards.length;

    function calculateMaxSlides() {
        const carouselWidth = carousel.offsetWidth;
        const scrollWidth = carousel.scrollWidth;
        const cardWidth = cards[0].offsetWidth;
        const gap = window.innerWidth >= 769 ? 32 : 16;
        const totalScrollableWidth = scrollWidth - carouselWidth;
        const slidesNeeded = Math.ceil(totalScrollableWidth / (cardWidth + gap)) + 1;
        return Math.min(slidesNeeded, cards.length);
    }

    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = \'\';
        for (let i = 0; i < maxScrollableSlides; i++) {
            const dot = document.createElement(\'button\');
            dot.className = \'pagination-dot\' + (i === 0 ? \' active\' : \'\');
            dot.dataset.index = i;
            dot.addEventListener(\'click\', function() { goToSlide(parseInt(this.dataset.index)); });
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(index) {
        currentIndex = index;
        const cardWidth = cards[0].offsetWidth;
        const gap = window.innerWidth >= 769 ? 32 : 16;
        carousel.scrollTo({ left: index * (cardWidth + gap), behavior: \'smooth\' });
        updateDots();
    }

    function updateDots() {
        if (!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll(\".pagination-dot\");
        dots.forEach((dot, idx) => dot.classList.toggle(\'active\', idx === currentIndex));
    }

    function autoAdvance() {
        if (isHovering || isTouching) return;
        currentIndex = (currentIndex + 1) % maxScrollableSlides;
        goToSlide(currentIndex);
    }

    carousel.addEventListener(\'mouseenter\', () => isHovering = true);
    carousel.addEventListener(\'mouseleave\', () => isHovering = false);
    carousel.addEventListener(\'touchstart\', () => isTouching = true, { passive: true });
    carousel.addEventListener(\'touchend\', () => { setTimeout(() => isTouching = false, 3000); }, { passive: true });

    carousel.addEventListener(\'scroll\', () => {
        const cardWidth = cards[0].offsetWidth;
        const gap = window.innerWidth >= 769 ? 32 : 16;
        const newIndex = Math.min(Math.round(carousel.scrollLeft / (cardWidth + gap)), maxScrollableSlides - 1);
        if (newIndex !== currentIndex && newIndex >= 0) {
            currentIndex = newIndex;
            updateDots();
        }
    }, { passive: true });

    window.addEventListener(\'resize\', () => {
        maxScrollableSlides = calculateMaxSlides();
        createDots();
        currentIndex = Math.min(currentIndex, maxScrollableSlides - 1);
        updateDots();
    });

    setTimeout(() => {
        maxScrollableSlides = calculateMaxSlides();
        createDots();
    }, 100);

    setInterval(autoAdvance, 7000);
}

// Auto-inicializar si estamos en la página con el carrusel de componentes
window.addEventListener(\'load\', () => {
    setTimeout(initComponentesCarousel, 1000);
});
