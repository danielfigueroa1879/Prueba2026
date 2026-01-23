/**
 * PLATAFORMA OS10 COQUIMBO - Core Engine
 * Consolidación de lógica de navegación, UI y utilidades.
 */

'use strict';

const App = {
    // Configuración de imágenes de fondo
    backgroundImages: [
        'assets/images/foto (1).webp', 'assets/images/foto (2).webp', 'assets/images/foto (3).webp',
        'assets/images/foto (3a).webp', 'assets/images/foto (4).webp', 'assets/images/foto (5).webp',
        'assets/images/foto (6).webp', 'assets/images/foto (7).webp', 'assets/images/foto (8).webp',
        'assets/images/foto (9).webp', 'assets/images/foto (10).webp', 'assets/images/foto (11).webp',
        'assets/images/foto (12).webp', 'assets/images/foto (13).webp', 'assets/images/foto (14).webp',
        'assets/images/foto (15).webp', 'assets/images/foto (16).webp', 'assets/images/foto (17).webp',
        'assets/images/foto (18).webp', 'assets/images/foto (19).webp', 'assets/images/foto (20).webp',
        'assets/images/foto (21).webp', 'assets/images/foto (22).webp', 'assets/images/foto (23).webp',
        'assets/images/foto (24).webp', 'assets/images/foto (26).webp', 'assets/images/foto (27).webp',
        'assets/images/foto (28).webp'
    ],
    currentImageIndex: 0,

    init() {
        this.setupNavigation();
        this.setupBackgroundRotation();
        this.setupScrollToTop();
        this.showHomepage();
    },

    // --- NAVEGACIÓN ---
    showHomepage() {
        this.toggleSections({
            homepage: 'flex',
            wrapper: 'block',
            footer: 'block',
            contenido: 'none',
            bodyClass: 'homepage background-transition'
        });
        const homepageSection = document.getElementById('homepage-section');
        if (homepageSection) {
            homepageSection.style.backgroundImage = `url('${this.backgroundImages[0]}')`;
        }
        this.currentImageIndex = 0;
        document.getElementById('credenciales-arrow-back-btn')?.classList.add('hidden');
        window.scrollTo(0, 0);
    },

    showDirectiva() {
        this.toggleSections({
            homepage: 'none',
            wrapper: 'none',
            footer: 'none',
            contenido: 'block',
            mainSection: 'block',
            bodyClass: 'show-directiva background-transition'
        });
        document.getElementById('credenciales-section')?.classList.remove('active');
        document.getElementById('credenciales-arrow-back-btn')?.classList.remove('hidden');
        window.scrollTo(0, 0);
    },

    showCredenciales() {
        this.toggleSections({
            homepage: 'none',
            wrapper: 'none',
            footer: 'none',
            contenido: 'block',
            mainSection: 'none',
            bodyClass: 'show-credenciales background-transition'
        });
        document.getElementById('credenciales-section')?.classList.add('active');
        document.getElementById('credenciales-arrow-back-btn')?.classList.remove('hidden');
        window.scrollTo(0, 0);
    },

    toggleSections(config) {
        if (config.homepage) document.getElementById('homepage-section').style.display = config.homepage;
        if (config.wrapper) document.getElementById('homepage-content-wrapper').style.display = config.wrapper;
        if (config.footer) document.getElementById('main-footer').style.display = config.footer;
        if (config.contenido) document.getElementById('contenido').style.display = config.contenido;
        if (config.mainSection) document.getElementById('main-section').style.display = config.mainSection;
        if (config.bodyClass) document.body.className = config.bodyClass;
    },

    // --- UTILIDADES ---
    setupBackgroundRotation() {
        setInterval(() => {
            const homepageSection = document.getElementById('homepage-section');
            if (homepageSection && document.body.classList.contains('homepage')) {
                this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
                homepageSection.style.backgroundImage = `url('${this.backgroundImages[this.currentImageIndex]}')`;
            }
        }, 12000);
    },

    setupScrollToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        if (backToTopButton) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    backToTopButton.classList.remove('hidden');
                } else {
                    backToTopButton.classList.add('hidden');
                }
            });
            backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }
    },

    setupNavigation() {
        document.getElementById('os10-home-btn')?.addEventListener('click', () => this.showHomepage());
    }
};

// Exponer funciones al ámbito global para compatibilidad con HTML inline
window.showHomepage = () => App.showHomepage();
window.showDirectiva = () => App.showDirectiva();
window.showCredenciales = () => App.showCredenciales();
window.handleCerofilas = () => window.open('https://dal5.short.gy/CFil', '_blank');
window.handleDirectiva = () => App.showDirectiva();
window.handleCredenciales = () => App.showCredenciales();
window.handleCredencialIndependiente = () => {
    const link = document.querySelector('.indep-btn');
    if (link) window.open(link.href, '_blank');
};
window.handleValores = () => {
    const link = document.getElementById('valoresImageLink');
    if (link) window.open(link.href, '_blank');
};
window.handleValorPlan = () => window.open('https://os10.short.gy/Pl4n', '_blank');
window.handleCursoFormacion = () => window.open('https://dal5.short.gy/Form', '_blank');

document.addEventListener('DOMContentLoaded', () => App.init());
