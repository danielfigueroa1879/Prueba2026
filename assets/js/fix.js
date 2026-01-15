document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Fix.js: Running cleanup script...');

    // ============== PART 1: FIX THE DUPLICATE MODAL ==============
    // Find all potential modals. getElementById only gets the first, so we use querySelectorAll.
    const modals = document.querySelectorAll('[id="modalRequisitos"]');
    
    if (modals.length > 1) {
        console.log('Found ' + modals.length + ' conflicting modals. Renaming the first one.');
        const greenModal = modals[0];
        greenModal.id = 'modalRequisitosVerde';

        const greenTitle = greenModal.querySelector('[id="modalTitulo"]');
        if (greenTitle) greenTitle.id = 'modalTituloVerde';

        const greenContent = greenModal.querySelector('[id="modalContenido"]');
        if (greenContent) greenContent.id = 'modalContenidoVerde';

        const greenCloseButton = greenModal.querySelector('[onclick="cerrarModal()"]');
        if (greenCloseButton) greenCloseButton.setAttribute('onclick', 'cerrarModalVerde()');
        console.log('✅ Renamed first modal to #modalRequisitosVerde');
    }

    // ============== PART 2: CREATE WRAPPER FUNCTIONS for the Green Modal ==============
    window.cerrarModalVerde = function() {
        const modal = document.getElementById('modalRequisitosVerde');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
        console.log('Closed green modal.');
    }

    window.mostrarRequisitosVerde = function(tipo) {
        const modal = document.getElementById('modalRequisitosVerde');
        const titulo = document.getElementById('modalTituloVerde');
        const contenido = document.getElementById('modalContenidoVerde');

        if (!modal || !titulo || !contenido) {
            console.error('Green modal elements not found!');
            return;
        }

        // Use the globally available content generation functions
        // (assuming they are loaded from spd-componentes.js or another file)
        if (typeof generarContenidoVigilante !== 'function') {
            console.error('Content generation functions are not available!');
            contenido.innerHTML = '<p style="color:red;">Error: Funciones de contenido no encontradas.</p>';
        } else {
             const titulos = {
                'vigilante': 'Vigilante Privado', 'guardia': 'Guardia de Seguridad', 'portero': 'Portero / Nochero / Rondín',
                'encargadoArmas': 'Encargado de Armas', 'tecnico': 'Técnico en Seguridad', 'operador': 'Operador de Cámaras',
                'instalador': 'Instalador Técnico', 'supervisor': 'Supervisor', 'jefe': 'Jefe de Seguridad',
                'asesor': 'Asesor', 'encargado': 'Encargado de Seguridad', 'capacitador': 'Capacitador', 'empresa': 'Empresa de Seguridad'
            };
            titulo.textContent = titulos[tipo] || 'Requisitos';

            let html = '';
            switch(tipo) {
                case 'vigilante': html = generarContenidoVigilante(); break;
                case 'guardia': html = generarContenidoGuardia(); break;
                case 'portero': html = generarContenidoPortero(); break;
                case 'encargado': html = generarContenidoEncargado(); break;
                case 'encargadoArmas': html = generarContenidoEncargadoArmas(); break;
                case 'tecnico': html = generarContenidoTecnico(); break;
                case 'operador': html = generarContenidoOperador(); break;
                case 'instalador': html = generarContenidoInstalador(); break;
                case 'supervisor': html = generarContenidoSupervisor(); break;
                case 'jefe': html = generarContenidoJefe(); break;
                case 'asesor': html = generarContenidoAsesor(); break;
                case 'capacitador': html = generarContenidoCapacitador(); break;
                case 'empresa': html = generarContenidoEmpresa(); break;
                default: html = `Contenido para '${tipo}' no disponible.`;
            }
            contenido.innerHTML = html;
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // ============== PART 3: RE-WIRE ONCLICK HANDLERS ==============
    // Homepage Green Section
    const greenSection = document.getElementById('componentes-seguridad');
    if (greenSection) {
        const greenButtons = greenSection.querySelectorAll('button[onclick^="mostrarRequisitos("]');
        greenButtons.forEach(button => {
            const originalCall = button.getAttribute('onclick');
            const newCall = originalCall.replace("mostrarRequisitos", "mostrarRequisitosVerde");
            button.setAttribute('onclick', newCall);
        });
        console.log(`✅ Re-wired ${greenButtons.length} buttons in the green section.`);
    }

    // Desktop Menu
    const desktopMenu = document.querySelector('.desktop-navbar');
    if (desktopMenu) {
        const desktopButtons = desktopMenu.querySelectorAll('button[onclick^="mostrarRequisitos("]');
        desktopButtons.forEach(button => {
            const originalCall = button.getAttribute('onclick');
            const newCall = originalCall.replace("mostrarRequisitos", "mostrarRequisitosVerde");
            button.setAttribute('onclick', newCall);
        });
        console.log(`✅ Re-wired ${desktopButtons.length} buttons in the desktop menu.`);
    }

    // Mobile Menu
    const mobileMenu = document.getElementById('mobile-dropdown');
    if (mobileMenu) {
        const mobileButtons = mobileMenu.querySelectorAll('button[onclick^="mostrarRequisitos("]');
        mobileButtons.forEach(button => {
            const originalCall = button.getAttribute('onclick');
            const newCall = originalCall.replace("mostrarRequisitos", "mostrarRequisitosVerde");
            button.setAttribute('onclick', newCall);
        });
        console.log(`✅ Re-wired ${mobileButtons.length} buttons in the mobile menu.`);
    }

    console.log('✅ Fix.js: Script finished.');
});
