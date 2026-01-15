// Fichero para la sección de componentes de la página de inicio (verde)

function mostrarRequisitosVerde(tipo) {
    const modal = document.getElementById('modalRequisitosVerde');
    const titulo = document.getElementById('modalTituloVerde');
    const contenido = document.getElementById('modalContenidoVerde');
    
    if (!modal || !titulo || !contenido) {
        console.error('Elementos del modal Verde no encontrados');
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
    
    // El contenido HTML se genera dinámicamente. 
    // Aquí se incluirían las funciones generarContenidoVigilante(), generarContenidoGuardia(), etc.
    // (Omitido por brevedad)
    let html = `<div>Contenido para ${tipo}</div>`;
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

    contenido.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModalVerde() {
    const modal = document.getElementById('modalRequisitosVerde');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Todas las funciones generarContenido... (copiadas de spd-componentes.js) van aquí.
// Por ejemplo:
function generarContenidoVigilante() {
    return '<h3>Requisitos para Vigilante Privado</h3><p>Detalles completos aquí...</p>';
}
// ... y así para todas las demás funciones de generación de contenido.
// (Contenido completo omitido por brevedad)

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modalRequisitosVerde');
    if (!modal) return;
    modal.addEventListener('click', (e) => {
        if (e.target === modal) cerrarModalVerde();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModalVerde();
        }
    });
});
