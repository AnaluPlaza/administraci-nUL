const data = [
  {
    ciclo: 1,
    cursos: [
      { nombre: "Globalización y Realidad Nacional", req: [] },
      { nombre: "Lenguaje y Comunicación I", req: [] },
      { nombre: "Metodologías de Investigación", req: [] },
      { nombre: "Desarrollo Personal y Social", req: [] },
      { nombre: "Matemática Básica", req: [] },
      { nombre: "Ética Cívica", req: [] },
    ],
  },
  {
    ciclo: 2,
    cursos: [
      { nombre: "Economía y Empresa", req: [] },
      { nombre: "Lenguaje y Comunicación II", req: ["Lenguaje y Comunicación I"] },
      { nombre: "Procesos Sociales y Políticos", req: [] },
      { nombre: "Temas de Filosofía", req: [] },
      { nombre: "Estadística Básica para los Negocios", req: ["Matemática Básica"] },
      { nombre: "Matemática Aplicada a los Negocios", req: ["Matemática Básica"] },
    ],
  },
  {
    ciclo: 3,
    cursos: [
      { nombre: "Fundamentos de Administración", req: ["Economía y Empresa"] },
      { nombre: "Introducción a las Finanzas", req: ["Matemática Aplicada a los Negocios"] },
      { nombre: "Contabilidad General", req: ["Matemática Aplicada a los Negocios"] },
      { nombre: "Matemática para la Gestión de Negocios", req: ["Matemática Aplicada a los Negocios"] },
      { nombre: "Estadística para la Gestión Empresarial I", req: ["Estadística Básica para los Negocios"] },
      { nombre: "Herramientas Informáticas para la Gestión I", req: ["Economía y Empresa"] },
    ],
  },
  {
    ciclo: 4,
    cursos: [
      { nombre: "Planeamiento Estratégico I", req: ["Fundamentos de Administración"] },
      { nombre: "Costos y Presupuestos", req: ["Contabilidad General"] },
      { nombre: "Introducción al Marketing", req: ["Fundamentos de Administración"] },
      { nombre: "Estadística para la Gestión Empresarial II", req: ["Estadística para la Gestión Empresarial I"] },
      { nombre: "Microeconomía", req: ["Economía y Empresa"] },
      { nombre: "Herramientas Informáticas para la Gestión II", req: ["Herramientas Informáticas para la Gestión I"] },
    ],
  },
  {
    ciclo: 5,
    cursos: [
      { nombre: "Diseño Organizacional", req: ["Planeamiento Estratégico I"] },
      { nombre: "Gestión de Personas", req: ["Fundamentos de Administración"] },
      { nombre: "Elaboración de Estados Financieros", req: ["Costos y Presupuestos", "Introducción a las Finanzas"] },
      { nombre: "Gestión Legal Empresarial", req: ["Planeamiento Estratégico I"] },
      { nombre: "Marketing Estratégico", req: ["Introducción al Marketing"] },
      { nombre: "Macroeconomía", req: ["Microeconomía"] },
    ],
  },
  {
    ciclo: 6,
    cursos: [
      { nombre: "Planeamiento Estratégico II", req: ["Diseño Organizacional"] },
      { nombre: "Análisis de la Información Financiera", req: ["Elaboración de Estados Financieros"] },
      { nombre: "Comportamiento Organizacional", req: ["Gestión de Personas"] },
      { nombre: "Investigación y Análisis de Mercado", req: ["Marketing Estratégico", "Estadística para la Gestión Empresarial II"] },
      { nombre: "Administración de Operaciones", req: ["Diseño Organizacional"] },
      { nombre: "Tecnologías de Información para la Gestión", req: ["Herramientas Informáticas para la Gestión II"] },
    ],
  },
  {
    ciclo: 7,
    cursos: [
      { nombre: "Taller de Innovación y Creatividad Empresarial", req: ["Planeamiento Estratégico II"] },
      { nombre: "Logística y Comercio Internacional", req: ["Administración de Operaciones"] },
      { nombre: "Gestión Financiera", req: ["Análisis de la Información Financiera"] },
      { nombre: "Taller de Liderazgo y Habilidades Gerenciales", req: ["Comportamiento Organizacional"] },
      { nombre: "Legislación Laboral", req: ["Gestión de Personas"] },
      { nombre: "Gestión Comercial", req: ["Investigación y Análisis de Mercado"] },
      { nombre: "Gestión de Empresas Familiares (Electivo)", req: ["Gestión Legal Empresarial"] },
      { nombre: "Sistemas Integrados de Gestión (Electivo)", req: ["Planeamiento Estratégico II"] },
      { nombre: "Finanzas Personales y Nuevos Negocios (Electivo)", req: ["Elaboración de Estados Financieros"] },
      { nombre: "Gestión del Talento Global (Electivo)", req: ["Gestión de Personas"] },
      { nombre: "Gestión de Personas por Competencias (Electivo)", req: ["Gestión de Personas"] },
      { nombre: "Branding Estratégico (Electivo)", req: ["Marketing Estratégico"] },
      { nombre: "Taller de Marketing Digital (Electivo)", req: ["Marketing Estratégico"] },
    ],
  },
  {
    ciclo: 8,
    cursos: [
      { nombre: "Taller de Emprendimiento y Creación de Negocios", req: ["Gestión Financiera"] },
      { nombre: "Gestión de la Cadena de Suministro", req: ["Logística y Comercio Internacional"] },
      { nombre: "Mercado de Valores", req: ["Gestión Financiera"] },
      { nombre: "Ética y Sostenibilidad Empresarial", req: ["Legislación Laboral"] },
      { nombre: "Taller de Investigación Empresarial", req: ["Planeamiento Estratégico II"] },
      { nombre: "E.R.P. para la Gestión Empresarial (Electivo)", req: ["Tecnologías de Información para la Gestión"] },
      { nombre: "Turismo Sostenible (Electivo)", req: ["Diseño Organizacional"] },
      { nombre: "Agilidad Organizacional (Electivo)", req: ["Taller de Innovación y Creatividad Empresarial"] },
      { nombre: "Gerencia de Activos Financieros (Electivo)", req: ["Gestión Financiera"] },
    ],
  },
  {
    ciclo: 9,
    cursos: [
      { nombre: "Inteligencia de Negocios", req: ["Tecnologías de Información para la Gestión"] },
      { nombre: "Gerencia de Operaciones", req: ["Gestión de la Cadena de Suministro"] },
      { nombre: "Gerencia Financiera", req: ["Mercado de Valores"] },
      { nombre: "Seminario de Investigación en Administración I", req: ["Taller de Investigación Empresarial"] },
      { nombre: "Gestión de Startups (Electivo)", req: ["Taller de Emprendimiento y Creación de Negocios"] },
      { nombre: "Juego de Negocios (Electivo)", req: ["Taller de Emprendimiento y Creación de Negocios"] },
      { nombre: "Gerencia de Proyectos (Electivo)", req: ["Gestión de la Cadena de Suministro"] },
      { nombre: "Gestión de Inversiones I (Electivo)", req: ["Mercado de Valores"] },
      { nombre: "Herramientas Informáticas para las Finanzas (Electivo)", req: ["Mercado de Valores"] },
      { nombre: "Gestión Ambiental (Electivo)", req: ["Ética y Sostenibilidad Empresarial"] },
      { nombre: "Resolución de Conflictos y Negociación (Electivo)", req: ["Legislación Laboral"] },
      { nombre: "Trade y Retail Marketing (Electivo)", req: ["Gestión Comercial"] },
    ],
  },
  {
    ciclo: 10,
    cursos: [
      { nombre: "Dirección Estratégica", req: ["Gerencia Financiera"] },
      { nombre: "Gerencia de Personas", req: ["Taller de Liderazgo y Habilidades Gerenciales"] },
      { nombre: "Seminario de Investigación en Administración II", req: ["Seminario de Investigación en Administración I"] },
      { nombre: "Gerencia de Marketing", req: ["Gestión Comercial"] },
      { nombre: "Business Analytics (Electivo)", req: ["Inteligencia de Negocios"] },
      { nombre: "Inteligencia Artificial para la Gestión (Electivo)", req: ["Tecnologías de Información para la Gestión"] },
      { nombre: "Gestión del Servicio (Electivo)", req: ["Gestión de la Cadena de Suministro"] },
      { nombre: "Modelos de Optimización Logística (Electivo)", req: ["Gestión de la Cadena de Suministro"] },
      { nombre: "Gestión de Riesgos y Seguros (Electivo)", req: ["Gerencia Financiera"] },
      { nombre: "Gestión de Inversiones II (Electivo)", req: ["Gestión de Inversiones I"] },
      { nombre: "Coaching, Mindfulness e Inteligencia Emocional (Electivo)", req: ["Taller de Liderazgo y Habilidades Gerenciales"] },
      { nombre: "Gobierno Corporativo y Compliance (Electivo)", req: ["Ética y Sostenibilidad Empresarial"] },
      { nombre: "Marketing B2B (Electivo)", req: ["Gestión Comercial"] },
    ],
  },
];

const STORAGE_KEY = 'progresoAdministracion';

const grid = document.getElementById('grid');
let progreso = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function guardarProgreso() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progreso));
}

function crearCurso(curso, ciclo) {
  const div = document.createElement('div');
  div.className = 'course';
  div.textContent = curso.nombre;
  div.dataset.nombre = curso.nombre;
  div.dataset.ciclo = ciclo;

  const estado = progreso[curso.nombre];
  if (estado === 'completed') {
    div.classList.add('completed');
  } else if (estado === 'unlocked') {
    div.classList.add('unlocked');
  } else {
    div.classList.add('locked');
  }

  div.onclick = () => manejarClick(div, curso);
  return div;
}

function manejarClick(div, curso) {
  const estado = progreso[curso.nombre];

  if (estado === 'locked') return;

  if (estado === 'unlocked') {
    progreso[curso.nombre] = 'completed';
  } else if (estado === 'completed') {
    progreso[curso.nombre] = 'unlocked';
  }

  actualizarCursos();
  guardarProgreso();
}

function actualizarCursos() {
  grid.innerHTML = '';
  const completados = new Set(Object.keys(progreso).filter(k => progreso[k] === 'completed'));

  data.forEach((columna, idx) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'column';
    colDiv.innerHTML = `<h3>Ciclo ${columna.ciclo}</h3>`;

    columna.cursos.forEach(curso => {
      const requisitos = curso.req || [];
      const nombreBase = curso.nombre.replace(" (Electivo)", "");
      const cumplidos = requisitos.every(r => completados.has(r));
      const estado = progreso[curso.nombre];

      if (!estado || estado === 'locked') {
        progreso[curso.nombre] = cumplidos ? 'unlocked' : 'locked';
      }

      const divCurso = crearCurso(curso, columna.ciclo);
      colDiv.appendChild(divCurso);
    });

    grid.appendChild(colDiv);
  });
}

function reiniciar() {
  if (confirm("¿Estás seguro de que deseas reiniciar tu progreso?")) {
    progreso = {};
    guardarProgreso();
    actualizarCursos();
  }
}

actualizarCursos();


