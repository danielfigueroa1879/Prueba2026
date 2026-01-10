// ==================== FUNCIONES DE NAVEGACIÓN Y SPD ====================

/**
 * Función para manejar el botón/link SPD
 * Muestra la sección SPD integrada y oculta el contenido principal
 */
function handleSPD() {
    console.log('🔵 handleSPD() ejecutada');
    
    // Ocultar secciones principales
    const homepageSection = document.getElementById('homepage-section');
    const contenidoSection = document.getElementById('contenido');
    const mainSection = document.getElementById('main-section');
    const credencialesSection = document.getElementById('credenciales-section');
    const homepageWrapper = document.getElementById('homepage-content-wrapper');
    
    if (homepageSection) homepageSection.style.display = 'none';
    if (contenidoSection) contenidoSection.style.display = 'none';
    if (mainSection) mainSection.style.display = 'none';
    if (credencialesSection) credencialesSection.style.display = 'none';
    if (homepageWrapper) homepageWrapper.style.display = 'none';
    
    // Mostrar sección SPD
    const spdSection = document.getElementById('spd-section');
    if (spdSection) {
        spdSection.style.display = 'block';
        console.log('✅ Sección SPD mostrada');
    } else {
        console.error('❌ No se encontró la sección SPD');
    }
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Actualizar estado del body
    document.body.classList.remove('show-directiva', 'show-credenciales');
    document.body.classList.add('show-spd');
}

/**
 * Función para volver al inicio/homepage
 */
function showHomepage() {
    console.log('🏠 showHomepage() ejecutada');
    
    // Mostrar homepage
    const homepageSection = document.getElementById('homepage-section');
    const homepageWrapper = document.getElementById('homepage-content-wrapper');
    
    if (homepageSection) homepageSection.style.display = 'block';
    if (homepageWrapper) homepageWrapper.style.display = 'block';
    
    // Ocultar otras secciones
    const contenidoSection = document.getElementById('contenido');
    const mainSection = document.getElementById('main-section');
    const credencialesSection = document.getElementById('credenciales-section');
    const spdSection = document.getElementById('spd-section');
    
    if (contenidoSection) contenidoSection.style.display = 'none';
    if (mainSection) mainSection.style.display = 'none';
    if (credencialesSection) credencialesSection.style.display = 'none';
    if (spdSection) spdSection.style.display = 'none';
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Actualizar estado del body
    document.body.classList.remove('show-directiva', 'show-credenciales', 'show-spd');
    
    console.log('✅ Homepage mostrada');
}

/**
 * Función para abrir links en nueva ventana
 */
function openNewLink(url) {
    console.log('🔗 Abriendo link:', url);
    window.open(url, '_blank');
}

/**
 * Función para volver desde SPD al index
 */
function volverAlIndex(event) {
    if (event) {
        event.preventDefault();
    }
    console.log('⬅️ Volviendo al index desde SPD');
    showHomepage();
}

/**
 * Función para mostrar la vista de componentes SPD
 */
function mostrarComponentes() {
    console.log('📦 Mostrando componentes SPD');
    
    const vistaPrincipal = document.getElementById('vistaPrincipal');
    const vistaComponentes = document.getElementById('vistaComponentes');
    
    if (vistaPrincipal) vistaPrincipal.style.display = 'none';
    if (vistaComponentes) {
        vistaComponentes.style.display = 'block';
        vistaComponentes.classList.add('active');
    }
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Función para volver a la vista principal SPD
 */
function volverAPrincipal() {
    console.log('⬅️ Volviendo a vista principal SPD');
    
    const vistaPrincipal = document.getElementById('vistaPrincipal');
    const vistaComponentes = document.getElementById('vistaComponentes');
    
    if (vistaPrincipal) vistaPrincipal.style.display = 'block';
    if (vistaComponentes) {
        vistaComponentes.style.display = 'none';
        vistaComponentes.classList.remove('active');
    }
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Asegurarse de que las funciones estén disponibles globalmente
if (typeof window !== 'undefined') {
    window.handleSPD = handleSPD;
    window.showHomepage = showHomepage;
    window.openNewLink = openNewLink;
    window.volverAlIndex = volverAlIndex;
    window.mostrarComponentes = mostrarComponentes;
    window.volverAPrincipal = volverAPrincipal;
}

console.log('✅ Funciones de navegación y SPD cargadas');
// ==================== INDEX BLOQUE 1 ====================
// Manejar submenús de la barra verde
    document.addEventListener('DOMContentLoaded', function() {
        const navItems = document.querySelectorAll('.desktop-nav-item');
        let closeTimeout;
        let currentOpenSubmenu = null;
        
        // Función para cerrar todos los submenús
        function closeAllSubmenus() {
            navItems.forEach(item => {
                const submenu = item.querySelector('.desktop-submenu');
                if (submenu) {
                    submenu.style.opacity = '0';
                    submenu.style.visibility = 'hidden';
                    submenu.style.pointerEvents = 'none';
                }
            });
            currentOpenSubmenu = null;
        }
        
        navItems.forEach(item => {
            const submenu = item.querySelector('.desktop-submenu');
            if (!submenu) return;
            
            // Posicionar el submenú
            function positionSubmenu() {
                const rect = item.getBoundingClientRect();
                const submenuWidth = submenu.offsetWidth;
                const left = rect.left + (rect.width / 2) - (submenuWidth / 2);
                
                submenu.style.left = left + 'px';
                submenu.style.top = '98px';
            }
            
            // Abrir submenú
            function openSubmenu() {
                clearTimeout(closeTimeout);
                // Cerrar otros submenús primero
                if (currentOpenSubmenu && currentOpenSubmenu !== submenu) {
                    currentOpenSubmenu.style.opacity = '0';
                    currentOpenSubmenu.style.visibility = 'hidden';
                    currentOpenSubmenu.style.pointerEvents = 'none';
                }
                positionSubmenu();
                submenu.style.opacity = '1';
                submenu.style.visibility = 'visible';
                submenu.style.pointerEvents = 'auto';
                currentOpenSubmenu = submenu;
            }
            
            // Cerrar submenú con retraso mínimo
            function closeSubmenu() {
                closeTimeout = setTimeout(() => {
                    submenu.style.opacity = '0';
                    submenu.style.visibility = 'hidden';
                    submenu.style.pointerEvents = 'none';
                    if (currentOpenSubmenu === submenu) {
                        currentOpenSubmenu = null;
                    }
                }, 100);
            }
            
            // Eventos para el item del menú
            item.addEventListener('mouseenter', openSubmenu);
            item.addEventListener('mouseleave', closeSubmenu);
            
            // Eventos para el submenú
            submenu.addEventListener('mouseenter', () => {
                clearTimeout(closeTimeout);
            });
            submenu.addEventListener('mouseleave', closeSubmenu);
        });
        
        // Cerrar todos los submenús si el mouse sale de la barra de navegación
        const navbar = document.querySelector('.desktop-navbar');
        if (navbar) {
            navbar.addEventListener('mouseleave', () => {
                clearTimeout(closeTimeout);
                closeTimeout = setTimeout(closeAllSubmenus, 100);
            });
        }
    });


// ==================== INDEX BLOQUE 2 ====================
if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js').then(reg => console.log('✅ SW registered'), err => console.error('❌ SW registration failed', err));
            });
        }


// ==================== INDEX BLOQUE 3 ====================
document.addEventListener('DOMContentLoaded', function() {
        console.log('🍔 Inicializando menú hamburguesa...');
        
        // ===== MANEJO DEL BANNER PWA =====
        const pwaBanner = document.getElementById('pwa-install-banner');
        const closeInstallBtn = document.getElementById('close-install-banner');
        const installBtn = document.getElementById('install-button');
        
        // Función para ocultar completamente el banner PWA
        function hidePWABanner() {
            if (pwaBanner) {
                console.log('🚫 Ocultando banner PWA completamente');
                pwaBanner.classList.remove('show');
                pwaBanner.style.display = 'none'; // Ocultar completamente del DOM
                pwaBanner.style.pointerEvents = 'none';
            }
        }
        
        // Evento para cerrar el banner PWA
        if (closeInstallBtn) {
            closeInstallBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                hidePWABanner();
            });
        }
        
        // Evento para instalar PWA
        if (installBtn) {
            installBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // main.js maneja la instalación
                if (typeof installPWA === 'function') {
                    installPWA();
                }
                hidePWABanner();
            });
        }
        
        // Auto-ocultar el banner PWA después de 10 segundos
        setTimeout(function() {
            if (pwaBanner && pwaBanner.classList.contains('show')) {
                hidePWABanner();
            }
        }, 10000);
        
        // ===== MANEJO DEL MENÚ HAMBURGUESA =====
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileDropdown = document.getElementById('mobile-dropdown');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        
        console.log('Botón hamburguesa:', mobileMenuBtn ? '✅' : '❌');
        console.log('Dropdown móvil:', mobileDropdown ? '✅' : '❌');
        console.log('Overlay:', mobileMenuOverlay ? '✅' : '❌');
        
        if (!mobileMenuBtn || !mobileDropdown || !mobileMenuOverlay) {
            console.error('❌ Elementos del menú no encontrados');
            return;
        }
        
        // Función para abrir el menú
        function openMobileMenu() {
            console.log('📱 Abriendo menú móvil');
            mobileDropdown.classList.remove('hidden');
            mobileMenuOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                mobileDropdown.classList.add('show');
            }, 10);
        }
        
        // Función para cerrar el menú
        function closeMobileMenu() {
            console.log('📱 Cerrando menú móvil');
            mobileDropdown.classList.remove('show');
            setTimeout(() => {
                mobileDropdown.classList.add('hidden');
                mobileMenuOverlay.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }
        
        // Evento del botón hamburguesa
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🍔 Click en botón hamburguesa');
            
            const isOpen = !mobileDropdown.classList.contains('hidden');
            if (isOpen) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
        
        // Evento del overlay (cerrar al hacer click fuera)
        mobileMenuOverlay.addEventListener('click', function() {
            closeMobileMenu();
        });
        
        // Evento para el botón de cerrar menú (X)
        const closeMobileMenuBtn = document.getElementById('close-mobile-menu');
        if (closeMobileMenuBtn) {
            closeMobileMenuBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('❌ Cerrando menú desde botón X');
                closeMobileMenu();
            });
        }
        
        // Manejar submenús (acordeones)
        const submenuButtons = document.querySelectorAll('#mobile-dropdown .submenu-parent-btn');
        console.log('Botones de submenú encontrados:', submenuButtons.length);
        
        submenuButtons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const parent = this.closest('.has-submenu');
                const submenu = parent.querySelector('.submenu');
                const arrow = this.querySelector('.submenu-arrow');
                
                // Cerrar otros submenús
                document.querySelectorAll('#mobile-dropdown .has-submenu').forEach(function(other) {
                    if (other !== parent) {
                        other.classList.remove('submenu-open');
                        const otherSubmenu = other.querySelector('.submenu');
                        const otherArrow = other.querySelector('.submenu-arrow');
                        if (otherSubmenu) otherSubmenu.classList.remove('show');
                        if (otherArrow) otherArrow.style.transform = '';
                    }
                });
                
                // Toggle este submenú
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
        
        console.log('✅ Menú hamburguesa inicializado correctamente');
        
        // ===== EVITAR CIERRE AUTOMÁTICO DEL MENÚ EN MÓVIL =====
        setTimeout(function() {
            // Sobrescribir closeActiveMenu
            const originalClose = window.closeActiveMenu;
            window.closeActiveMenu = function() {
                // Si es móvil (< 1024px), NO cerrar el menú móvil ni sus submenús
                if (window.innerWidth < 1024) {
                    console.log('📱 Móvil - NO cerrando menú ni submenús');
                    // SOLO cerrar megamenús de ESCRITORIO (no los del menú móvil)
                    document.querySelectorAll('.desktop-navbar .asesor-megamenu').forEach(m => m.classList.remove('show'));
                    document.querySelectorAll('.desktop-navbar .has-submenu').forEach(i => i.classList.remove('megamenu-open'));
                    // Cerrar panel lateral de escritorio si existe
                    const desktopPanel = document.getElementById('desktop-submenu-panel');
                    if (desktopPanel && desktopPanel.classList.contains('is-open')) {
                        desktopPanel.classList.remove('is-open');
                    }
                } else if (typeof originalClose === 'function') {
                    // En PC, usar comportamiento normal
                    originalClose();
                }
            };
            console.log('✅ closeActiveMenu modificada - Submenús móviles protegidos');
        }, 300);
        
        // ===== PREVENIR CONFLICTOS CON SEARCH.JS =====
        // Esperar a que search.js agregue el botón de búsqueda
        setTimeout(function() {
            const searchButton = document.getElementById('global-search-button');
            if (searchButton) {
                console.log('🔍 Botón de búsqueda encontrado');
            }
        }, 500);
    });


// ==================== INDEX BLOQUE 4 ====================
document.addEventListener('DOMContentLoaded', function() {
    const suspensionNotice = document.getElementById('suspension-notice');
    if (suspensionNotice) {
        setTimeout(() => {
            suspensionNotice.classList.add('show');
        }, 500);
        setTimeout(() => {
            suspensionNotice.classList.remove('show');
            suspensionNotice.classList.add('hide');
            setTimeout(() => {
                suspensionNotice.style.display = 'none';
            }, 500);
        }, 7500);
    }
});


// ==================== INDEX BLOQUE 5 ====================
document.addEventListener('DOMContentLoaded', function() {
            // Función reutilizable para configurar cada sección colapsable
            function setupAccordion(toggleId, contentId, arrowId) {
                const toggleButton = document.getElementById(toggleId);
                const contentElement = document.getElementById(contentId);
                const arrowElement = document.getElementById(arrowId);
                // Nos aseguramos que todos los elementos existan antes de agregar el evento
                if (toggleButton && contentElement && arrowElement) {
                    toggleButton.addEventListener('click', function() {
                        // Muestra u oculta el contenido
                        contentElement.classList.toggle('hidden');
                        // Gira la flecha
                        arrowElement.classList.toggle('rotate-90');
                    });
                }
            }
            // Configurar las tres secciones
            setupAccordion('leyes-toggle', 'leyes-content', 'leyes-arrow');
            setupAccordion('decretos-toggle', 'decretos-content', 'decretos-arrow');
            setupAccordion('resoluciones-toggle', 'resoluciones-content', 'resoluciones-arrow');
            // Similar para la sección de Documentos (si se quisiera)
            setupAccordion('docs-editables-toggle', 'docs-editables-content', 'docs-editables-arrow');
            setupAccordion('modelos-solicitud-toggle', 'modelos-solicitud-content', 'modelos-solicitud-arrow');
            setupAccordion('manuales-toggle', 'manuales-content', 'manuales-arrow');
        });


// ==================== INDEX BLOQUE 6 ====================
(function() {
            // Función para animar un elemento SPD
            function animarTextoSPD(elementoId) {
                const textoElement = document.getElementById(elementoId);
                if (!textoElement) {
                    console.error('No se encontró el elemento:', elementoId);
                    return;
                }
                
                const textos = ['SPD', 'SUBSECRETARÍA PREV. DELITO'];
                let indiceActual = 0;
                
                function alternarTexto() {
                    // Fade out
                    textoElement.classList.add('fade-out');
                    
                    // Después de 600ms cambiar el texto
                    setTimeout(function() {
                        indiceActual = (indiceActual + 1) % textos.length;
                        textoElement.textContent = textos[indiceActual];
                        
                        // Fade in
                        textoElement.classList.remove('fade-out');
                    }, 600);
                }
                
                // Alternar cada 3 segundos
                setInterval(alternarTexto, 3000);
            }
            
            // Iniciar animación cuando el DOM esté listo
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    animarTextoSPD('texto-spd-mobile');
                    animarTextoSPD('texto-spd-desktop');
                });
            } else {
                animarTextoSPD('texto-spd-mobile');
                animarTextoSPD('texto-spd-desktop');
            }
        })();


// ==================== INDEX BLOQUE 7 ====================
// Función para manejar el clic en SPD y redirigir a spd.html
        function handleSPD() {
            window.location.href = 'spd.html';
        }


// ==================== INDEX BLOQUE 8 ====================
// Función para toggle del menú móvil
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileDropdown = document.getElementById('mobile-dropdown');
            const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
            
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileDropdown.classList.toggle('hidden');
                    mobileMenuOverlay.classList.toggle('hidden');
                    document.body.classList.toggle('overflow-hidden');
                });
            }
            
            if (mobileMenuOverlay) {
                mobileMenuOverlay.addEventListener('click', function() {
                    mobileDropdown.classList.add('hidden');
                    mobileMenuOverlay.classList.add('hidden');
                    document.body.classList.remove('overflow-hidden');
                });
            }
            
            // Manejar submenús en móvil
            const submenuParents = document.querySelectorAll('.has-submenu .submenu-parent-btn');
            submenuParents.forEach(function(btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const parent = this.closest('.has-submenu');
                    const submenu = parent.querySelector('.submenu');
                    const arrow = this.querySelector('.submenu-arrow');
                    
                    // Toggle submenu
                    submenu.classList.toggle('hidden');
                    if (arrow) {
                        arrow.style.transform = submenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(90deg)';
                    }
                });
            });
        });


// ==================== INDEX BLOQUE 9 ====================
// Función para descargar el contenido del modal en PDF
        function descargarModalPDF(tipo) {
            // Obtener el título del modal
            const titulo = document.getElementById('modalTitulo').textContent;
            const contenido = document.getElementById('modalContenido');
            
            // Mostrar animación PRIMERO
            const animacion = document.getElementById('pdfDownloadAnimation');
            if (animacion) {
                animacion.classList.add('active');
                setTimeout(() => {
                    animacion.classList.remove('active');
                }, 5500);
            }
            
            // ESPERAR 2 SEGUNDOS antes de generar el PDF
            // Esto permite que la animación se vea primero
            setTimeout(() => {
                // Crear un contenedor temporal con el contenido
                const contenedorTemp = document.createElement('div');
                contenedorTemp.style.cssText = 'padding: 5px; background-color: white; margin: 0; width: 100%;';
                
                // Agregar título
                const tituloElement = document.createElement('h1');
                tituloElement.textContent = titulo;
                tituloElement.style.cssText = 'font-size: 20px; font-weight: bold; margin: 0 0 10px 0; padding: 0; color: #1f2937;';
                contenedorTemp.appendChild(tituloElement);
                
                // Clonar el contenido del modal
                const contenidoClone = contenido.cloneNode(true);
                
                // Ocultar botón de descarga en el clon
                const botonPDF = contenidoClone.querySelector('.btn-pdf-modal');
                if (botonPDF) {
                    botonPDF.remove();
                }
                
                // CRÍTICO: Eliminar TODOS los espacios y márgenes grandes
                contenidoClone.style.cssText = 'margin: 0; padding: 0;';
                
                // Aplicar estilos a TODOS los elementos para flujo continuo
                const todosLosElementos = contenidoClone.querySelectorAll('*');
                todosLosElementos.forEach(elemento => {
                    // Eliminar márgenes verticales grandes
                    if (elemento.style.marginTop) elemento.style.marginTop = '0';
                    if (elemento.style.marginBottom) elemento.style.marginBottom = '0';
                    if (elemento.style.paddingTop) elemento.style.paddingTop = '0';
                    if (elemento.style.paddingBottom) elemento.style.paddingBottom = '0';
                    
                    // Aplicar márgenes pequeños a secciones
                    if (elemento.classList.contains('requisito-section-componentes')) {
                        elemento.style.cssText += 'margin: 5px 0 !important; padding: 8px !important; page-break-inside: avoid; page-break-after: auto; page-break-before: auto;';
                    }
                    
                    // Aplicar estilos a items
                    if (elemento.classList.contains('requisito-item-componentes')) {
                        elemento.style.cssText += 'margin: 3px 0 !important; padding: 6px !important; page-break-inside: avoid;';
                    }
                    
                    // Reducir espacios en divs con clases de Tailwind
                    if (elemento.className && typeof elemento.className === 'string') {
                        if (elemento.className.includes('mt-')) {
                            elemento.style.marginTop = '5px';
                        }
                        if (elemento.className.includes('mb-')) {
                            elemento.style.marginBottom = '5px';
                        }
                        if (elemento.className.includes('space-y-')) {
                            elemento.style.cssText += 'gap: 5px;';
                        }
                    }
                });
                
                contenedorTemp.appendChild(contenidoClone);
                
                // Generar nombre de archivo
                const nombreArchivo = `OS10-Requisitos-${titulo.replace(/\s+/g, '-')}.pdf`;
                
                // Configuración del PDF optimizada para flujo continuo
                const opciones = {
                    margin: [8, 8, 8, 8],
                    filename: nombreArchivo,
                    image: { 
                        type: 'jpeg', 
                        quality: 0.96 
                    },
                    html2canvas: { 
                        scale: 1.5,
                        useCORS: true,
                        logging: false,
                        letterRendering: true,
                        backgroundColor: '#ffffff',
                        scrollY: 0,
                        scrollX: 0,
                        windowHeight: document.documentElement.scrollHeight,
                        onclone: function(clonedDoc) {
                            const clonedContent = clonedDoc.body.querySelector('div');
                            if (clonedContent) {
                                const allElements = clonedContent.querySelectorAll('*');
                                allElements.forEach(el => {
                                    el.style.pageBreakInside = 'auto';
                                    el.style.pageBreakBefore = 'auto';
                                    el.style.pageBreakAfter = 'auto';
                                });
                            }
                        }
                    },
                    jsPDF: { 
                        unit: 'mm', 
                        format: 'a4', 
                        orientation: 'portrait',
                        compress: true
                    },
                    pagebreak: { 
                        mode: [],
                        before: [],
                        after: [],
                        avoid: []
                    }
                };
                
                // Generar y descargar PDF
                html2pdf().set(opciones).from(contenedorTemp).save().then(() => {
                    console.log('✅ PDF descargado:', nombreArchivo);
                }).catch(error => {
                    console.error('❌ Error al generar PDF:', error);
                    alert('Error al generar el PDF. Por favor, intenta nuevamente.');
                });
                
            }, 3000); // ESPERA 3 SEGUNDOS antes de generar PDF
        }


// ==================== INDEX BLOQUE 10 ====================
(function() {
            'use strict';
            
            // Función para ocultar/mostrar el banner
            function toggleBanner() {
                const modal = document.getElementById('modalRequisitos');
                const desktopNavbar = document.querySelector('.desktop-navbar');
                
                if (!modal || !desktopNavbar) {
                    console.warn('⚠️ No se encontró el modal o el banner');
                    return;
                }
                
                const isActive = modal.classList.contains('active');
                
                if (isActive) {
                    // Ocultar banner cuando modal está activo
                    desktopNavbar.classList.add('hide-on-modal');
                    desktopNavbar.style.display = 'none';
                    desktopNavbar.style.visibility = 'hidden';
                    desktopNavbar.style.opacity = '0';
                    console.log('🟢 Banner verde oculto');
                } else {
                    // Mostrar banner cuando modal está cerrado
                    desktopNavbar.classList.remove('hide-on-modal');
                    desktopNavbar.style.display = 'block';
                    desktopNavbar.style.visibility = 'visible';
                    desktopNavbar.style.opacity = '1';
                    console.log('🟢 Banner verde visible');
                }
            }
            
            // Ejecutar cuando el DOM esté listo
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init);
            } else {
                init();
            }
            
            function init() {
                const modal = document.getElementById('modalRequisitos');
                
                if (!modal) {
                    console.warn('⚠️ Modal no encontrado');
                    return;
                }
                
                // Método 1: Observador de mutaciones
                const observer = new MutationObserver(function(mutations) {
                    toggleBanner();
                });
                
                observer.observe(modal, {
                    attributes: true,
                    attributeFilter: ['class']
                });
                
                // Método 2: Verificación periódica (fallback)
                setInterval(toggleBanner, 100);
                
                console.log('✅ Sistema de ocultación de banner activado (con fallback)');
            }
        })();


// ==================== INDEX BLOQUE 11 ====================
document.addEventListener('DOMContentLoaded', function() {
            const chevronButton = document.getElementById('scroll-up-chevron');
            let scrollTimeout;

            if (!chevronButton) return;
            // Mostrar/ocultar chevron según scroll
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    chevronButton.classList.add('visible');
                    
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        chevronButton.classList.remove('visible');
                    }, 4000);
                                        
                } else {
                   chevronButton.classList.remove('visible');
                }
            });

            // Hacer scroll hacia arriba al hacer clic
            chevronButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        });


// ==================== JAVASCRIPT DE SPD.HTML ====================
// ==================== SPD BLOQUE 1 ====================
// Función para cerrar el modal
        function cerrarModal() {
            const modal = document.getElementById('modalRequisitos');
            modal.classList.remove('active');
            
            // Restaurar scroll del body inmediatamente
            document.body.style.overflow = '';
            
            // Limpiar contenido después de que termine la animación de cierre
            setTimeout(() => {
                const contenido = document.getElementById('modalContenido');
                if (contenido) {
                    contenido.innerHTML = '';
                }
            }, 300);
        }

        // Función para descargar el contenido del modal en PDF
function descargarModalPDF(tipo) {
    // Obtener el título del modal
    const titulo = document.getElementById('modalTitulo').textContent;
    const contenido = document.getElementById('modalContenido');
    
    // Mostrar animación PRIMERO
    const animacion = document.getElementById('pdfDownloadAnimation');
    if (animacion) {
        animacion.classList.add('active');
        setTimeout(() => {
            animacion.classList.remove('active');
        }, 5500);
    }
    
    // ESPERAR 2 SEGUNDOS antes de generar el PDF
    // Esto permite que la animación se vea primero
    setTimeout(() => {
        // Crear un contenedor temporal con el contenido
        const contenedorTemp = document.createElement('div');
        contenedorTemp.style.cssText = 'padding: 5px; background-color: white; margin: 0; width: 100%;';
        
        // Agregar título
        const tituloElement = document.createElement('h1');
        tituloElement.textContent = titulo;
        tituloElement.style.cssText = 'font-size: 20px; font-weight: bold; margin: 0 0 10px 0; padding: 0; color: #1f2937;';
        contenedorTemp.appendChild(tituloElement);
        
        // Clonar el contenido del modal
        const contenidoClone = contenido.cloneNode(true);
        
        // Ocultar botón de descarga en el clon
        const botonPDF = contenidoClone.querySelector('.btn-pdf-modal');
        if (botonPDF) {
            botonPDF.remove();
        }
        
        // CRÍTICO: Eliminar TODOS los espacios y márgenes grandes
        contenidoClone.style.cssText = 'margin: 0; padding: 0;';
        
        // Aplicar estilos a TODOS los elementos para flujo continuo
        const todosLosElementos = contenidoClone.querySelectorAll('*');
        todosLosElementos.forEach(elemento => {
            // Eliminar márgenes verticales grandes
            if (elemento.style.marginTop) elemento.style.marginTop = '0';
            if (elemento.style.marginBottom) elemento.style.marginBottom = '0';
            if (elemento.style.paddingTop) elemento.style.paddingTop = '0';
            if (elemento.style.paddingBottom) elemento.style.paddingBottom = '0';
            
            // Aplicar márgenes pequeños a secciones
            if (elemento.classList.contains('requisito-section-componentes')) {
                elemento.style.cssText += 'margin: 5px 0 !important; padding: 8px !important; page-break-inside: avoid; page-break-after: auto; page-break-before: auto;';
            }
            
            // Aplicar estilos a items
            if (elemento.classList.contains('requisito-item-componentes')) {
                elemento.style.cssText += 'margin: 3px 0 !important; padding: 6px !important; page-break-inside: avoid;';
            }
            
            // Reducir espacios en divs con clases de Tailwind
            if (elemento.className && typeof elemento.className === 'string') {
                if (elemento.className.includes('mt-')) {
                    elemento.style.marginTop = '5px';
                }
                if (elemento.className.includes('mb-')) {
                    elemento.style.marginBottom = '5px';
                }
                if (elemento.className.includes('space-y-')) {
                    elemento.style.cssText += 'gap: 5px;';
                }
            }
        });
        
        contenedorTemp.appendChild(contenidoClone);
        
        // Generar nombre de archivo
        const nombreArchivo = `OS10-Requisitos-${titulo.replace(/\s+/g, '-')}.pdf`;
        
        // Configuración del PDF optimizada para flujo continuo
        const opciones = {
            margin: [8, 8, 8, 8],
            filename: nombreArchivo,
            image: { 
                type: 'jpeg', 
                quality: 0.96 
            },
            html2canvas: { 
                scale: 1.5,
                useCORS: true,
                logging: false,
                letterRendering: true,
                backgroundColor: '#ffffff',
                scrollY: 0,
                scrollX: 0,
                windowHeight: document.documentElement.scrollHeight,
                onclone: function(clonedDoc) {
                    const clonedContent = clonedDoc.body.querySelector('div');
                    if (clonedContent) {
                        const allElements = clonedContent.querySelectorAll('*');
                        allElements.forEach(el => {
                            el.style.pageBreakInside = 'auto';
                            el.style.pageBreakBefore = 'auto';
                            el.style.pageBreakAfter = 'auto';
                        });
                    }
                }
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait',
                compress: true
            },
            pagebreak: { 
                mode: [],
                before: [],
                after: [],
                avoid: []
            }
        };
        
        // Generar y descargar PDF
        html2pdf().set(opciones).from(contenedorTemp).save().then(() => {
            console.log('✅ PDF descargado:', nombreArchivo);
        }).catch(error => {
            console.error('❌ Error al generar PDF:', error);
            alert('Error al generar el PDF. Por favor, intenta nuevamente.');
        });
        
    }, 3500); // ESPERA 2 SEGUNDOS antes de generar PDF
}


// ==================== SPD BLOQUE 2 ====================
// ===== FUNCIONES DE NAVEGACIÓN =====
        
        // Mostrar vista de componentes
        function mostrarComponentes() {
            const vistaPrincipal = document.getElementById('vistaPrincipal');
            const vistaComponentes = document.getElementById('vistaComponentes');
            
            if (vistaPrincipal && vistaComponentes) {
                vistaPrincipal.style.display = 'none';
                vistaComponentes.style.display = 'block';
                vistaComponentes.classList.add('active');
                window.scrollTo(0, 0);
            }
        }

        // Volver a vista principal
        function volverASPD() {
            const vistaPrincipal = document.getElementById('vistaPrincipal');
            const vistaComponentes = document.getElementById('vistaComponentes');
            cerrarModal(); // Cerrar modal si está abierto
            
            if (vistaPrincipal && vistaComponentes) {
                vistaComponentes.classList.remove('active');
                vistaComponentes.style.display = 'none';
                vistaPrincipal.style.display = 'block';
                window.scrollTo(0, 0);
            }
        }

        // Función para cerrar modal y restaurar banners
        function cerrarModal() {
            const modal = document.getElementById('modalRequisitos');
            if (!modal) return;
            
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // MOSTRAR BANNERS NUEVAMENTE
            const bannerBlanco = document.getElementById('banner');
            const bannerVerde = document.querySelector('.desktop-navbar');
            if (bannerBlanco) bannerBlanco.style.display = 'flex';
            if (bannerVerde && window.innerWidth >= 1024) bannerVerde.style.display = 'block';
        }

        // Mostrar asignaturas de capacitación
        function mostrarAsignaturas() {
            const modal = document.getElementById('modalRequisitos');
            if (!modal) return;
            
            const titulo = document.getElementById('modalTitulo');
            const contenido = document.getElementById('modalContenido');
            
            // PASO 1: LIMPIAR COMPLETAMENTE
            contenido.innerHTML = '';
            titulo.textContent = '';
            
            titulo.textContent = 'ASIGNATURAS DE CAPACITACIÓN';
            
            let html = `
                <div class="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                    <p class="text-sm text-gray-700 font-semibold" style="text-align: justify;">
                        📚 Estas son las asignaturas que deben aprobarse según el Decreto 209 para obtener la certificación correspondiente
                    </p>
                </div>
            `;
            
            // VIGILANTES PRIVADOS
            html += `
                <div class="requisito-section-componentes mb-6 bg-blue-50 border-l-4 border-blue-500">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">VIGILANTES PRIVADOS</h3>
                    <div class="mb-3 flex flex-wrap gap-2">
                        <span class="badge-componentes badge-decreto-componentes">Artículo 27 - Decreto 209</span>
                        <span class="badge-componentes" style="background:#10b981; color:white;">100 horas pedagógicas</span>
                        <span class="badge-componentes" style="background:#f59e0b; color:white;">40 horas cada 2 años</span>
                    </div>
                    <div class="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <p class="text-sm font-bold text-gray-800" style="text-align: justify;">AUTORIZADOS PARA PORTAR ARMAS DE FUEGO DENTRO DE UN RECINTO O ÁREA DETERMINADA</p>
                    </div>
                    <ul class="space-y-2">
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">1. Legislación aplicada a la seguridad privada</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">2. Respeto y promoción de los derechos humanos</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">3. Privacidad y uso de datos personales</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">4. Instrucción física</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">5. Correcto uso de elementos defensivos y de protección</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">6. Primeros auxilios</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">7. Prevención de riesgos</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">8. Seguridad de instalaciones</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">9. Probidad, no discriminación y perspectiva de género</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">10. Seguridad electrónica</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">11. Sistema de telecomunicaciones</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">12. Técnicas de reducción</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">13. Conocimiento de arma y tiro, de conformidad al reglamento complementario de la ley N° 17.798</li>
                    </ul>
                </div>
            `;
            
            // GUARDIAS DE SEGURIDAD
            html += `
                <div class="requisito-section-componentes mb-6 bg-green-50 border-l-4 border-green-500">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">GUARDIAS DE SEGURIDAD</h3>
                    <div class="mb-3 flex flex-wrap gap-2">
                        <span class="badge-componentes badge-decreto-componentes">Artículo 107 N°1 - Decreto 209</span>
                        <span class="badge-componentes" style="background:#10b981; color:white;">90 horas pedagógicas</span>
                        <span class="badge-componentes" style="background:#f59e0b; color:white;">36 horas cada 4 años</span>
                    </div>
                    <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded">
                        <p class="text-sm font-bold text-gray-800" style="text-align: justify;">SIN AUTORIZACIÓN PARA PORTAR ARMAS DE FUEGO</p>
                    </div>
                    <ul class="space-y-2">
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">1. Legislación aplicada a seguridad privada</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">2. Respeto y promoción de los derechos humanos</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">3. Privacidad y uso de datos personales</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">4. Instrucción física</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">5. Correcto uso de elementos defensivos y de protección</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">6. Primeros auxilios</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">7. Prevención de riesgos</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">8. Seguridad de las instalaciones</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">9. Probidad, no discriminación y perspectiva de género</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">10. Seguridad electrónica</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">11. Sistema de telecomunicaciones</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">12. Técnicas de reducción</li>
                    </ul>
                </div>
            `;
            
            // PORTEROS/NOCHEROS/RONDINES
            html += `
                <div class="requisito-section-componentes mb-6 bg-purple-50 border-l-4 border-purple-500">
                    <h3 class="text-xl font-bold text-gray-900 mb-2">PORTEROS, NOCHEROS, RONDINES U OTROS DE SIMILAR CARÁCTER</h3>
                    <div class="mb-3 flex flex-wrap gap-2">
                        <span class="badge-componentes badge-decreto-componentes">Artículo 107 N°2 - Decreto 209</span>
                        <span class="badge-componentes" style="background:#10b981; color:white;">60 horas pedagógicas</span>
                        <span class="badge-componentes" style="background:#f59e0b; color:white;">30 horas cada 4 años</span>
                    </div>
                    <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded">
                        <p class="text-sm font-bold text-gray-800" style="text-align: justify;">SIN AUTORIZACIÓN PARA PORTAR ARMAS DE FUEGO</p>
                    </div>
                    <ul class="space-y-2">
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">1. Legislación aplicada a seguridad privada</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">2. Respeto y promoción de los derechos humanos</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">3. Privacidad y uso de datos personales</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">4. Correcto uso de elementos defensivos y de protección</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">5. Primeros auxilios</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">6. Prevención de riesgos</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">7. Seguridad de las instalaciones</li>
                        <li class="requisito-item-componentes" style="text-align: justify; background:#ffffff;">8. Probidad, no discriminación y perspectiva de género</li>
                    </ul>
                </div>
            `;
            
            html += `
                <div class="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <p class="text-sm text-gray-700" style="text-align: justify;">
                        <strong>⚠️ Nota Importante:</strong> Las asignaturas de <strong>arma y tiro, técnicas de reducción y primeros auxilios</strong> deben ser <strong>siempre presenciales</strong>. Las demás pueden ser telemáticas o presenciales.
                    </p>
                </div>
                
                <div class="mt-6 p-4 bg-gray-50 border-l-4 border-gray-500 rounded">
                    <p class="text-sm text-gray-700">
                        <strong>📌 Más información:</strong> 
                        <a href="https://segprivada.minsegpublica.gob.cl/" target="_blank" class="text-blue-600 hover:text-blue-800 underline">
                            https://segprivada.minsegpublica.gob.cl/
                        </a>
                    </p>
                </div>
                
                <button onclick="descargarModalPDF('asignaturas')" class="btn-pdf-modal mt-6">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Descargar PDF
                </button>
            `;
            
            contenido.innerHTML = html;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // OCULTAR BANNERS PARA EVITAR OBSTRUCCIÓN
            const bannerBlanco = document.getElementById('banner');
            const bannerVerde = document.querySelector('.desktop-navbar');
            if (bannerBlanco) bannerBlanco.style.display = 'none';
            if (bannerVerde) bannerVerde.style.display = 'none';
        }

        // Alternar texto del botón SPD cada 3 segundos
        (function() {
            const btnSPD = document.getElementById('btnSPD');
            if (!btnSPD) return;         
            c
// ==================== FUNCIONES ADICIONALES DE NAVEGACIÓN ====================

/**
 * Función para mostrar la sección de Directivas
 */
function handleDirectiva() {
    console.log('📋 handleDirectiva() ejecutada');
    showDirectiva();
}

function showDirectiva() {
    console.log('📋 Mostrando sección Directivas');
    
    // Ocultar otras secciones
    const homepageSection = document.getElementById('homepage-section');
    const homepageWrapper = document.getElementById('homepage-content-wrapper');
    const credencialesSection = document.getElementById('credenciales-section');
    const spdSection = document.getElementById('spd-section');
    
    if (homepageSection) homepageSection.style.display = 'none';
    if (homepageWrapper) homepageWrapper.style.display = 'none';
    if (credencialesSection) credencialesSection.style.display = 'none';
    if (spdSection) spdSection.style.display = 'none';
    
    // Mostrar sección de directivas/contenido
    const contenidoSection = document.getElementById('contenido');
    const mainSection = document.getElementById('main-section');
    
    if (contenidoSection) contenidoSection.style.display = 'block';
    if (mainSection) mainSection.style.display = 'block';
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Actualizar clases del body
    document.body.classList.remove('show-credenciales', 'show-spd');
    document.body.classList.add('show-directiva');
}

/**
 * Función para mostrar la sección de Credenciales
 */
function handleCredenciales() {
    console.log('🆔 handleCredenciales() ejecutada');
    showCredenciales();
}

function showCredenciales() {
    console.log('🆔 Mostrando sección Credenciales');
    
    // Ocultar otras secciones
    const homepageSection = document.getElementById('homepage-section');
    const homepageWrapper = document.getElementById('homepage-content-wrapper');
    const contenidoSection = document.getElementById('contenido');
    const mainSection = document.getElementById('main-section');
    const spdSection = document.getElementById('spd-section');
    
    if (homepageSection) homepageSection.style.display = 'none';
    if (homepageWrapper) homepageWrapper.style.display = 'none';
    if (contenidoSection) contenidoSection.style.display = 'none';
    if (mainSection) mainSection.style.display = 'none';
    if (spdSection) spdSection.style.display = 'none';
    
    // Mostrar sección de credenciales
    const credencialesSection = document.getElementById('credenciales-section');
    if (credencialesSection) credencialesSection.style.display = 'block';
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Actualizar clases del body
    document.body.classList.remove('show-directiva', 'show-spd');
    document.body.classList.add('show-credenciales');
}

/**
 * Función para mostrar la sección de Valores
 */
function handleValores() {
    console.log('💰 handleValores() ejecutada');
    // Scroll a la sección de valores en la homepage
    const valoresSection = document.querySelector('#valores-section, #tramites-principales');
    if (valoresSection) {
        valoresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * Función para mostrar el Plan de Valores
 */
function handleValorPlan() {
    console.log('📊 handleValorPlan() ejecutada');
    openNewLink('https://d6.short.gy/Pl4n');
}

/**
 * Función para manejar Cerofilas
 */
function handleCerofilas() {
    console.log('🔢 handleCerofilas() ejecutada');
    // Aquí puedes agregar la lógica específica para Cerofilas
    alert('Función Cerofilas en desarrollo');
}

/**
 * Función para manejar Credencial Independiente
 */
function handleCredencialIndependiente() {
    console.log('🆔 handleCredencialIndependiente() ejecutada');
    showCredenciales();
}

/**
 * Función para buscar curso
 */
function handleBuscarCurso(url) {
    console.log('🔍 handleBuscarCurso() ejecutada:', url);
    openNewLink(url);
}

/**
 * Función para cerrar modal
 */
function cerrarModal() {
    console.log('❌ cerrarModal() ejecutada');
    
    const modal = document.getElementById('modalRequisitos');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Mostrar banners nuevamente
    const bannerBlanco = document.getElementById('banner');
    const bannerVerde = document.querySelector('.desktop-navbar');
    if (bannerBlanco) bannerBlanco.style.display = '';
    if (bannerVerde) bannerVerde.style.display = '';
}

/**
 * Función para volver a la vista SPD desde componentes
 */
function volverASPD() {
    console.log('⬅️ volverASPD() ejecutada');
    volverAPrincipal();
}

// Exportar todas las funciones adicionales a window
if (typeof window !== 'undefined') {
    window.handleDirectiva = handleDirectiva;
    window.showDirectiva = showDirectiva;
    window.handleCredenciales = handleCredenciales;
    window.showCredenciales = showCredenciales;
    window.handleValores = handleValores;
    window.handleValorPlan = handleValorPlan;
    window.handleCerofilas = handleCerofilas;
    window.handleCredencialIndependiente = handleCredencialIndependiente;
    window.handleBuscarCurso = handleBuscarCurso;
    window.cerrarModal = cerrarModal;
    window.volverASPD = volverASPD;
}

console.log('✅ Funciones adicionales de navegación cargadas');

// ==================== FUNCIÓN MOSTRAR REQUISITOS ====================

/**
 * Función para mostrar requisitos de diferentes cargos
 */
function mostrarRequisitos(tipo) {
    console.log('📋 mostrarRequisitos() ejecutada para:', tipo);
    
    const modal = document.getElementById('modalRequisitos');
    if (!modal) {
        console.error('❌ Modal de requisitos no encontrado');
        return;
    }
    
    // Esta función se completa con el contenido específico de cada tipo
    // que ya debe estar en el archivo spd-componentes.js
    
    // Si spd-componentes.js no está disponible, mostrar mensaje
    console.log('ℹ️ Mostrando requisitos para:', tipo);
    
    // Activar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Exportar función
if (typeof window !== 'undefined') {
    window.mostrarRequisitos = mostrarRequisitos;
}

console.log('✅ Función mostrarRequisitos cargada');
