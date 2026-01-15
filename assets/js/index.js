// ==================== FUNCIONES DE NAVEGACIÓN (DISPONIBLES INMEDIATAMENTE) ====================

/**
 * Función para manejar el botón/link SPD
 */
function handleSPD() {
    console.log('🔵 handleSPD() ejecutada');
    
    const homepageSection = document.getElementById('homepage-section');
    const contenidoSection = document.getElementById('contenido');
    const mainSection = document.getElementById('main-section');
    const credencialesSection = document.getElementById('credenciales-section');
    const homepageWrapper = document.getElementById('homepage-content-wrapper');
    const spdSection = document.getElementById('spd-section');
    
    if (homepageSection) homepageSection.style.display = 'none';
    if (contenidoSection) contenidoSection.style.display = 'none';
    if (mainSection) mainSection.style.display = 'none';
    if (credencialesSection) credencialesSection.style.display = 'none';
    if (homepageWrapper) homepageWrapper.style.display = 'none';
    
    if (spdSection) {
        spdSection.style.display = 'block';
        console.log('✅ Sección SPD mostrada');
    } else {
        console.error('❌ No se encontró la sección SPD');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.remove('show-directiva', 'show-credenciales');
    document.body.classList.add('show-spd');
}

/**
 * Función para volver al inicio/homepage
 */
function showHomepage() {
    console.log('🏠 showHomepage() ejecutada');
    
    const homepageSection = document.getElementById('homepage-section');
    const homepageWrapper = document.getElementById('homepage-content-wrapper');
    const contenidoSection = document.getElementById('contenido');
    const mainSection = document.getElementById('main-section');
    const credencialesSection = document.getElementById('credenciales-section');
    const spdSection = document.getElementById('spd-section');
    
    if (homepageSection) homepageSection.style.display = 'block';
    if (homepageWrapper) homepageWrapper.style.display = 'block';
    if (contenidoSection) contenidoSection.style.display = 'none';
    if (mainSection) mainSection.style.display = 'none';
    if (credencialesSection) credencialesSection.style.display = 'none';
    if (spdSection) spdSection.style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.remove('show-directiva', 'show-credenciales', 'show-spd');
}

/**
 * Función para abrir links en nueva ventana
 */
function openNewLink(url) {
    console.log('🔗 Abriendo link:', url);
    window.open(url, '_blank');
}

/**
 * Función para mostrar Directivas
 */
function handleDirectiva() {
    console.log('📋 handleDirectiva() ejecutada');
    
    const homepageSection = document.getElementById('homepage-section');
    const homepageWrapper = document.getElementById('homepage-content-wrapper');
    const credencialesSection = document.getElementById('credenciales-section');
    const spdSection = document.getElementById('spd-section');
    const contenidoSection = document.getElementById('contenido');
    const mainSection = document.getElementById('main-section');
    
    if (homepageSection) homepageSection.style.display = 'none';
    if (homepageWrapper) homepageWrapper.style.display = 'none';
    if (credencialesSection) credencialesSection.style.display = 'none';
    if (spdSection) spdSection.style.display = 'none';
    if (contenidoSection) contenidoSection.style.display = 'block';
    if (mainSection) mainSection.style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.remove('show-credenciales', 'show-spd');
    document.body.classList.add('show-directiva');
}

function showDirectiva() {
    handleDirectiva();
}

/**
 * Función para mostrar Credenciales
 */
function handleCredenciales() {
    console.log('🆔 handleCredenciales() ejecutada');
    
    const homepageSection = document.getElementById('homepage-section');
    const homepageWrapper = document.getElementById('homepage-content-wrapper');
    const contenidoSection = document.getElementById('contenido');
    const mainSection = document.getElementById('main-section');
    const spdSection = document.getElementById('spd-section');
    const credencialesSection = document.getElementById('credenciales-section');
    
    if (homepageSection) homepageSection.style.display = 'none';
    if (homepageWrapper) homepageWrapper.style.display = 'none';
    if (contenidoSection) contenidoSection.style.display = 'none';
    if (mainSection) mainSection.style.display = 'none';
    if (spdSection) spdSection.style.display = 'none';
    if (credencialesSection) credencialesSection.style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.classList.remove('show-directiva', 'show-spd');
    document.body.classList.add('show-credenciales');
}

function showCredenciales() {
    handleCredenciales();
}

/**
 * Otras funciones de navegación
 */
function handleValores() {
    console.log('💰 handleValores() ejecutada');
    const valoresSection = document.querySelector('#valores-section, #tramites-principales');
    if (valoresSection) {
        valoresSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleValorPlan() {
    console.log('📊 handleValorPlan() ejecutada');
    openNewLink('https://d6.short.gy/Pl4n');
}

function handleCerofilas() {
    console.log('🔢 handleCerofilas() ejecutada');
    alert('Función Cerofilas en desarrollo');
}

function handleCredencialIndependiente() {
    console.log('🆔 handleCredencialIndependiente() ejecutada');
    handleCredenciales();
}

function handleBuscarCurso(url) {
    console.log('🔍 handleBuscarCurso() ejecutada:', url);
    openNewLink(url);
}

function volverAlIndex(event) {
    if (event) event.preventDefault();
    console.log('⬅️ volverAlIndex() ejecutada');
    showHomepage();
}

function mostrarComponentes() {
    console.log('📦 mostrarComponentes() ejecutada');
    const vistaPrincipal = document.getElementById('vistaPrincipal');
    const vistaComponentes = document.getElementById('vistaComponentes');
    
    if (vistaPrincipal) vistaPrincipal.style.display = 'none';
    if (vistaComponentes) {
        vistaComponentes.style.display = 'block';
        vistaComponentes.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverAPrincipal() {
    console.log('⬅️ volverAPrincipal() ejecutada');
    const vistaPrincipal = document.getElementById('vistaPrincipal');
    const vistaComponentes = document.getElementById('vistaComponentes');
    
    if (vistaPrincipal) vistaPrincipal.style.display = 'block';
    if (vistaComponentes) {
        vistaComponentes.style.display = 'none';
        vistaComponentes.classList.remove('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function volverASPD() {
    console.log('⬅️ volverASPD() ejecutada');
    volverAPrincipal();
}

function cerrarModal() {
    console.log('❌ cerrarModal() ejecutada');
    const modal = document.getElementById('modalRequisitos');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    const bannerBlanco = document.getElementById('banner');
    const bannerVerde = document.querySelector('.desktop-navbar');
    if (bannerBlanco) bannerBlanco.style.display = '';
    if (bannerVerde) bannerVerde.style.display = '';
}

// Exportar TODAS las funciones a window inmediatamente
window.handleSPD = handleSPD;
window.showHomepage = showHomepage;
window.openNewLink = openNewLink;
window.handleDirectiva = handleDirectiva;
window.showDirectiva = showDirectiva;
window.handleCredenciales = handleCredenciales;
window.showCredenciales = showCredenciales;
window.handleValores = handleValores;
window.handleValorPlan = handleValorPlan;
window.handleCerofilas = handleCerofilas;
window.handleCredencialIndependiente = handleCredencialIndependiente;
window.handleBuscarCurso = handleBuscarCurso;
window.volverAlIndex = volverAlIndex;
window.mostrarComponentes = mostrarComponentes;
window.volverAPrincipal = volverAPrincipal;
window.volverASPD = volverASPD;
window.cerrarModal = cerrarModal;
window.mostrarRequisitos = mostrarRequisitos;
window.mostrarAsignaturas = mostrarAsignaturas;

console.log('✅ Todas las funciones de navegación cargadas y disponibles');
console.log('✅ Funciones disponibles:', Object.keys(window).filter(k => k.startsWith('handle') || k.startsWith('show') || k.startsWith('mostrar') || k.startsWith('volver') || k === 'openNewLink' || k === 'cerrarModal'));

// ==================== CÓDIGO ORIGINAL DEL INDEX.JS ====================
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




