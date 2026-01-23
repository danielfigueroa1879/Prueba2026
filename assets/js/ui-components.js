/**
 * PLATAFORMA OS10 COQUIMBO - UI Components
 * Manejo de menú móvil, banner PWA y elementos interactivos.
 */

'use strict';

const UI = {
    init() {
        this.setupMobileMenu();
        this.setupPWABanner();
        this.setupBannerObserver();
        this.setupScrollChevron();
    },

    // --- MENÚ MÓVIL ---
    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileDropdown = document.getElementById('mobile-dropdown');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const closeMobileMenuBtn = document.getElementById('close-mobile-menu');

        if (!mobileMenuBtn || !mobileDropdown || !mobileMenuOverlay) return;

        const openMenu = () => {
            mobileDropdown.classList.remove('hidden');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => mobileDropdown.classList.add('show'), 10);
        };

        const closeMenu = () => {
            mobileDropdown.classList.remove('show');
            setTimeout(() => {
                mobileDropdown.classList.add('hidden');
                mobileMenuOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        };

        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = !mobileDropdown.classList.contains('hidden');
            isOpen ? closeMenu() : openMenu();
        });

        mobileMenuOverlay.addEventListener('click', closeMenu);
        if (closeMobileMenuBtn) closeMobileMenuBtn.addEventListener('click', closeMenu);

        // Submenús (acordeones)
        const submenuButtons = document.querySelectorAll('#mobile-dropdown .submenu-parent-btn');
        submenuButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const parent = btn.closest('.has-submenu');
                const submenu = parent.querySelector('.submenu');
                const arrow = btn.querySelector('.submenu-arrow');

                document.querySelectorAll('#mobile-dropdown .has-submenu').forEach(other => {
                    if (other !== parent) {
                        other.classList.remove('submenu-open');
                        const otherSubmenu = other.querySelector('.submenu');
                        const otherArrow = other.querySelector('.submenu-arrow');
                        if (otherSubmenu) otherSubmenu.classList.remove('show');
                        if (otherArrow) otherArrow.style.transform = '';
                    }
                });

                const isOpen = parent.classList.contains('submenu-open');
                if (isOpen) {
                    parent.classList.remove('submenu-open');
                    if (submenu) submenu.classList.remove('show');
                    if (arrow) arrow.style.transform = '';
                } else {
                    parent.classList.add('submenu-open');
                    if (submenu) submenu.classList.add('show');
                    if (arrow) arrow.style.transform = 'rotate(90deg)';
                }
            });
        });

        // Sobrescribir cierre global para proteger menú móvil
        setTimeout(() => {
            const originalClose = window.closeActiveMenu;
            window.closeActiveMenu = function() {
                if (window.innerWidth < 1024) {
                    document.querySelectorAll('.desktop-navbar .asesor-megamenu').forEach(m => m.classList.remove('show'));
                    document.querySelectorAll('.desktop-navbar .has-submenu').forEach(i => i.classList.remove('megamenu-open'));
                    const desktopPanel = document.getElementById('desktop-submenu-panel');
                    if (desktopPanel?.classList.contains('is-open')) desktopPanel.classList.remove('is-open');
                } else if (typeof originalClose === 'function') {
                    originalClose();
                }
            };
        }, 300);
    },

    // --- BANNER PWA ---
    setupPWABanner() {
        const pwaBanner = document.getElementById('pwa-install-banner');
        const closeInstallBtn = document.getElementById('close-install-banner');
        const installBtn = document.getElementById('install-button');

        const hideBanner = () => {
            if (pwaBanner) {
                pwaBanner.classList.remove('show');
                pwaBanner.style.display = 'none';
                pwaBanner.style.pointerEvents = 'none';
            }
        };

        if (closeInstallBtn) closeInstallBtn.addEventListener('click', hideBanner);
        if (installBtn) {
            installBtn.addEventListener('click', () => {
                if (typeof window.installPWA === 'function') window.installPWA();
                hideBanner();
            });
        }

        setTimeout(() => {
            if (pwaBanner?.classList.contains('show')) hideBanner();
        }, 10000);
    },

    // --- OBSERVADOR DE BANNER VERDE ---
    setupBannerObserver() {
        const modal = document.getElementById('modalRequisitos');
        const desktopNavbar = document.querySelector('.desktop-navbar');
        if (!modal || !desktopNavbar) return;

        const toggleBanner = () => {
            const isActive = modal.classList.contains('active');
            if (isActive) {
                desktopNavbar.style.display = 'none';
                desktopNavbar.style.visibility = 'hidden';
                desktopNavbar.style.opacity = '0';
            } else {
                desktopNavbar.style.display = 'block';
                desktopNavbar.style.visibility = 'visible';
                desktopNavbar.style.opacity = '1';
            }
        };

        const observer = new MutationObserver(toggleBanner);
        observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
        setInterval(toggleBanner, 500); // Fallback optimizado
    },

    // --- CHEVRON DE SCROLL ---
    setupScrollChevron() {
        const chevronButton = document.getElementById('scroll-up-chevron');
        if (!chevronButton) return;

        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                chevronButton.classList.add('visible');
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => chevronButton.classList.remove('visible'), 4000);
            } else {
                chevronButton.classList.remove('visible');
            }
        });

        chevronButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => UI.init());

// --- ACORDEONES ---
UI.setupAccordions = function() {
    const setupAccordion = (toggleId, contentId, arrowId) => {
        const toggleButton = document.getElementById(toggleId);
        const contentElement = document.getElementById(contentId);
        const arrowElement = document.getElementById(arrowId);
        if (toggleButton && contentElement && arrowElement) {
            toggleButton.addEventListener('click', () => {
                contentElement.classList.toggle('hidden');
                arrowElement.classList.toggle('rotate-90');
            });
        }
    };
    setupAccordion('leyes-toggle', 'leyes-content', 'leyes-arrow');
    setupAccordion('decretos-toggle', 'decretos-content', 'decretos-arrow');
    setupAccordion('resoluciones-toggle', 'resoluciones-content', 'resoluciones-arrow');
    setupAccordion('docs-editables-toggle', 'docs-editables-content', 'docs-editables-arrow');
    setupAccordion('modelos-solicitud-toggle', 'modelos-solicitud-content', 'modelos-solicitud-arrow');
    setupAccordion('manuales-toggle', 'manuales-content', 'manuales-arrow');
};

// --- ANIMACIÓN SPD ---
UI.setupSPDAnimation = function() {
    const animarTextoSPD = (elementoId) => {
        const textoElement = document.getElementById(elementoId);
        if (!textoElement) return;
        const textos = ['SPD', 'SUBSECRETARÍA PREV. DELITO'];
        let indiceActual = 0;
        setInterval(() => {
            textoElement.classList.add('fade-out');
            setTimeout(() => {
                indiceActual = (indiceActual + 1) % textos.length;
                textoElement.textContent = textos[indiceActual];
                textoElement.classList.remove('fade-out');
            }, 500);
        }, 4000);
    };
    animarTextoSPD('spd-text-anim');
    animarTextoSPD('spd-text-anim-mobile');
};

// --- AVISO DE SUSPENSIÓN ---
UI.setupSuspensionNotice = function() {
    const suspensionNotice = document.getElementById('suspension-notice');
    if (suspensionNotice) {
        setTimeout(() => suspensionNotice.classList.add('show'), 500);
        setTimeout(() => {
            suspensionNotice.classList.remove('show');
            suspensionNotice.classList.add('hide');
            setTimeout(() => suspensionNotice.style.display = 'none', 500);
        }, 7500);
    }
};

// Actualizar init
const originalUIInit = UI.init;
UI.init = function() {
    originalUIInit.call(this);
    this.setupAccordions();
    this.setupSPDAnimation();
    this.setupSuspensionNotice();
};

// --- DESCARGA DE PDF ---
UI.descargarModalPDF = function(tipo) {
    const titulo = document.getElementById('modalTitulo').textContent;
    const contenido = document.getElementById('modalContenido');
    const animacion = document.getElementById('pdfDownloadAnimation');
    
    if (animacion) {
        animacion.classList.add('active');
        setTimeout(() => animacion.classList.remove('active'), 5500);
    }
    
    setTimeout(() => {
        const contenedorTemp = document.createElement('div');
        contenedorTemp.style.cssText = 'padding: 5px; background-color: white; margin: 0; width: 100%;';
        
        const tituloElement = document.createElement('h1');
        tituloElement.textContent = titulo;
        tituloElement.style.cssText = 'font-size: 20px; font-weight: bold; margin: 0 0 10px 0; padding: 0; color: #1f2937;';
        contenedorTemp.appendChild(tituloElement);
        
        const contenidoClone = contenido.cloneNode(true);
        const botonPDF = contenidoClone.querySelector('.btn-pdf-modal');
        if (botonPDF) botonPDF.remove();
        
        contenidoClone.style.cssText = 'margin: 0; padding: 0;';
        const todosLosElementos = contenidoClone.querySelectorAll('*');
        todosLosElementos.forEach(elemento => {
            if (elemento.style.marginTop) elemento.style.marginTop = '0';
            if (elemento.style.marginBottom) elemento.style.marginBottom = '0';
            if (elemento.style.paddingTop) elemento.style.paddingTop = '0';
            if (elemento.style.paddingBottom) elemento.style.paddingBottom = '0';
            
            if (elemento.classList.contains('requisito-section-componentes')) {
                elemento.style.cssText += 'margin: 5px 0 !important; padding: 8px !important; page-break-inside: avoid;';
            }
            if (elemento.classList.contains('requisito-item-componentes')) {
                elemento.style.cssText += 'margin: 3px 0 !important; padding: 6px !important; page-break-inside: avoid;';
            }
        });
        
        contenedorTemp.appendChild(contenidoClone);
        const nombreArchivo = `OS10-Requisitos-${titulo.replace(/\s+/g, '-')}.pdf`;
        
        const opt = {
            margin: [5, 5, 5, 5],
            filename: nombreArchivo,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, letterRendering: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        html2pdf().set(opt).from(contenedorTemp).save();
    }, 2000);
};

// Exponer globalmente
window.descargarModalPDF = (tipo) => UI.descargarModalPDF(tipo);
