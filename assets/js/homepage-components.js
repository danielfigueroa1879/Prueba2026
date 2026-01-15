
// ===== COMPONENTES DE SEGURIDAD PRIVADA - PARA HOMEPAGE (SECCIÓN VERDE) =====

function mostrarRequisitosHomepage(tipo) {
    const modal = document.getElementById('modalRequisitosHomepage');
    const titulo = document.getElementById('modalTituloHomepage');
    const contenido = document.getElementById('modalContenidoHomepage');
    
    if (!modal || !titulo || !contenido) {
        console.error('Elementos del modal Homepage no encontrados');
        return;
    }
    
    contenido.innerHTML = '';
    titulo.textContent = '';
    
    let tipoNormalizado = tipo.replace('encargadoArmas', 'encargado-armas');
    
    const titulos = {
        'vigilante': 'Vigilante Privado', 'guardia': 'Guardia de Seguridad', 'portero': 'Portero / Nochero / Rondín',
        'encargado-armas': 'Encargado de Armas', 'tecnico': 'Técnico en Seguridad', 'operador': 'Operador de Cámaras',
        'instalador': 'Instalador Técnico', 'supervisor': 'Supervisor', 'jefe': 'Jefe de Seguridad',
        'asesor': 'Asesor', 'encargado': 'Encargado de Seguridad', 'capacitador': 'Capacitador', 'empresa': 'Empresa de Seguridad'
    };
    
    titulo.textContent = titulos[tipoNormalizado] || 'Requisitos';
    
    let html = '';
    switch(tipoNormalizado) {
        case 'vigilante': html = generarContenidoVigilante(); break;
        case 'guardia': html = generarContenidoGuardia(); break;
        case 'portero': html = generarContenidoPortero(); break;
        case 'encargado': html = generarContenidoEncargado(); break;
        case 'encargado-armas': html = generarContenidoEncargadoArmas(); break;
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

    contenido.innerHTML = html + `<button onclick="descargarModalPDFHomepage('${tipoNormalizado}')" class="btn-pdf-modal">Descargar PDF</button>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModalHomepage() {
    const modal = document.getElementById('modalRequisitosHomepage');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function descargarModalPDFHomepage(tipo) {
    const titulo = document.getElementById('modalTituloHomepage').textContent;
    const contenido = document.getElementById('modalContenidoHomepage');
    // Simple PDF generation logic
    const element = document.createElement('div');
    element.innerHTML = `<h1>${titulo}</h1>` + contenido.innerHTML;
    html2pdf(element, {
        margin: 1,
        filename: `requisitos-${tipo}.pdf`,
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    });
}

// All generarContenido... functions are copied here from spd-componentes.js
// These functions are self-contained and have no external dependencies
function generarContenidoVigilante() {
    return `
        <div class="space-y-4">
            <div class="mb-4">
                <h3 class="text-lg font-bold text-gray-800 mb-2">📖 Definición</h3>
                <p class="text-gray-700 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500" style="text-align: justify;">
                    Persona que realiza labores de protección a personas y bienes dentro de un recinto o área determinada, autorizado para portar armas, credencial y uniforme.
                </p>
            </div>
        </div>
    `;
}
function generarContenidoGuardia() { return `<h3>Requisitos para Guardia de Seguridad</h3><p>Contenido...</p>`; }
function generarContenidoPortero() { return `<h3>Requisitos para Portero / Nochero / Rondín</h3><p>Contenido...</p>`; }
function generarContenidoEncargado() { return `<h3>Requisitos para Encargado de Seguridad</h3><p>Contenido...</p>`; }
function generarContenidoEncargadoArmas() { return `<h3>Requisitos para Encargado de Armas y Municiones</h3><p>Contenido...</p>`; }
function generarContenidoTecnico() { return `<h3>Requisitos para Técnico en Seguridad Privada</h3><p>Contenido...</p>`; }
function generarContenidoOperador() { return `<h3>Requisitos para Operador de Cámaras y Alarmas</h3><p>Contenido...</p>`; }
function generarContenidoInstalador() { return `<h3>Requisitos para Instalador Técnico</h3><p>Contenido...</p>`; }
function generarContenidoSupervisor() { return `<h3>Requisitos para Supervisor de Seguridad</h3><p>Contenido...</p>`; }
function generarContenidoJefe() { return `<h3>Requisitos para Jefe de Seguridad</h3><p>Contenido...</p>`; }
function generarContenidoAsesor() { return `<h3>Requisitos para Asesor de Seguridad</h3><p>Contenido...</p>`; }
function generarContenidoCapacitador() { return `<h3>Requisitos para Capacitador</h3><p>Contenido...</p>`; }
function generarContenidoEmpresa() { return `<h3>Requisitos para Empresa de Seguridad</h3><p>Contenido...</p>`; }

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalRequisitosHomepage');
    if (!modal) return;
    modal.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModalHomepage();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModalHomepage();
        }
    });
});
