const data = {
  1: [
    { nombre: "Globalización y Realidad Nacional" },
    { nombre: "Lenguaje y Comunicación I" },
    { nombre: "Metodologías de Investigación" },
    { nombre: "Desarrollo Personal y Social" },
    { nombre: "Matemática Básica" },
    { nombre: "Ética Cívica" },
  ],
  2: [
    { nombre: "Economía y Empresa" },
    { nombre: "Lenguaje y Comunicación II", requisitos: ["Lenguaje y Comunicación I"] },
    { nombre: "Procesos Sociales y Políticos" },
    { nombre: "Temas de Filosofía" },
    { nombre: "Estadística Básica para los Negocios", requisitos: ["Matemática Básica"] },
    { nombre: "Matemática Aplicada a los Negocios", requisitos: ["Matemática Básica"] },
  ],
  3: [
    { nombre: "Fundamentos de Administración", requisitos: ["Economía y Empresa"] },
    { nombre: "Introducción a las Finanzas", requisitos: ["Matemática Aplicada a los Negocios"] },
    { nombre: "Contabilidad General", requisitos: ["Matemática Aplicada a los Negocios"] },
    { nombre: "Matemática para la Gestión de Negocios", requisitos: ["Matemática Aplicada a los Negocios"] },
    { nombre: "Estadística para la Gestión Empresarial I", requisitos: ["Estadística Básica para los Negocios"] },
    { nombre: "Herramientas Informáticas para la Gestión I", requisitos: ["Economía y Empresa"] },
  ],
  4: [
    { nombre: "Planeamiento Estratégico I", requisitos: ["Fundamentos de Administración"] },
    { nombre: "Costos y Presupuestos", requisitos: ["Contabilidad General"] },
    { nombre: "Introducción al Marketing", requisitos: ["Fundamentos de Administración"] },
    { nombre: "Estadística para la Gestión Empresarial II", requisitos: ["Estadística para la Gestión Empresarial I"] },
    { nombre: "Microeconomía", requisitos: ["Economía y Empresa"] },
    { nombre: "Herramientas Informáticas para la Gestión II", requisitos: ["Herramientas Informáticas para la Gestión I"] },
  ],
  5: [
    { nombre: "Diseño Organizacional", requisitos: ["Planeamiento Estratégico I"] },
    { nombre: "Gestión de Personas", requisitos: ["Fundamentos de Administración"] },
    { nombre: "Elaboración de Estados Financieros", requisitos: ["Costos y Presupuestos", "Introducción a las Finanzas"] },
    { nombre: "Gestión Legal Empresarial", requisitos: ["Planeamiento Estratégico I"] },
    { nombre: "Marketing Estratégico", requisitos: ["Introducción al Marketing"] },
    { nombre: "Macroeconomía", requisitos: ["Microeconomía"] },
  ],
  6: [
    { nombre: "Planeamiento Estratégico II", requisitos: ["Diseño Organizacional"] },
    { nombre: "Análisis de la Información Financiera", requisitos: ["Elaboración de Estados Financieros"] },
    { nombre: "Comportamiento Organizacional", requisitos: ["Gestión de Personas"] },
    { nombre: "Investigación y Análisis de Mercado", requisitos: ["Marketing Estratégico", "Estadística para la Gestión Empresarial II"] },
    { nombre: "Administración de Operaciones", requisitos: ["Diseño Organizacional"] },
    { nombre: "Tecnologías de Información para la Gestión", requisitos: ["Herramientas Informáticas para la Gestión II"] },
  ],
  7: [
    { nombre: "Taller de Innovación y Creatividad Empresarial", requisitos: ["Planeamiento Estratégico II"] },
    { nombre: "Logística y Comercio Internacional", requisitos: ["Administración de Operaciones"] },
    { nombre: "Gestión Financiera", requisitos: ["Análisis de la Información Financiera"] },
    { nombre: "Taller de Liderazgo y Habilidades Gerenciales", requisitos: ["Comportamiento Organizacional"] },
    { nombre: "Legislación Laboral", requisitos: ["Gestión de Personas"] },
    { nombre: "Gestión Comercial", requisitos: ["Investigación y Análisis de Mercado"] },
    { nombre: "Gestión de Empresas Familiares (Electivo)", requisitos: ["Gestión Legal Empresarial"], electivo: true },
    { nombre: "Sistemas Integrados de Gestión (Electivo)", requisitos: ["Planeamiento Estratégico II"], electivo: true },
    { nombre: "Finanzas Personales y Nuevos Negocios (Electivo)", requisitos: ["Elaboración de Estados Financieros"], electivo: true },
    { nombre: "Gestión del Talento Global (Electivo)", requisitos: ["Gestión de Personas"], electivo: true },
    { nombre: "Gestión de Personas por Competencias (Electivo)", requisitos: ["Gestión de Personas"], electivo: true },
    { nombre: "Branding Estratégico (Electivo)", requisitos: ["Marketing Estratégico"], electivo: true },
    { nombre: "Taller de Marketing Digital (Electivo)", requisitos: ["Marketing Estratégico"], electivo: true },
  ],
  8: [
    { nombre: "Taller de Emprendimiento y Creación de Negocios", requisitos: ["Gestión Financiera"] },
    { nombre: "Gestión de la Cadena de Suministro", requisitos: ["Logística y Comercio Internacional"] },
    { nombre: "Mercado de Valores", requisitos: ["Gestión Financiera"] },
    { nombre: "Ética y Sostenibilidad Empresarial", requisitos: ["Legislación Laboral"] },
    { nombre: "Taller de Investigación Empresarial", requisitos: ["Planeamiento Estratégico II"] },
    { nombre: "E.R.P. para la Gestión Empresarial (Electivo)", requisitos: ["Tecnologías de Información para la Gestión"], electivo: true },
    { nombre: "Turismo Sostenible (Electivo)", requisitos: ["Diseño Organizacional"], electivo: true },
    { nombre: "Agilidad Organizacional (Electivo)", requisitos: ["Taller de Innovación y Creatividad Empresarial"], electivo: true },
    { nombre: "Gerencia de Activos Financieros (Electivo)", requisitos: ["Gestión Financiera"], electivo: true },
  ],
  9: [
    { nombre: "Inteligencia de Negocios", requisitos: ["Tecnologías de Información para la Gestión"] },
    { nombre: "Gerencia de Operaciones", requisitos: ["Gestión de la Cadena de Suministro"] },
    { nombre: "Gerencia Financiera", requisitos: ["Mercado de Valores"] },
    { nombre: "Seminario de Investigación en Administración I", requisitos: ["Taller de Investigación Empresarial"] },
    { nombre: "Gestión de Startups (Electivo)", requisitos: ["Taller de Emprendimiento y Creación de Negocios"], electivo: true },
    { nombre: "Juego de Negocios (Electivo)", requisitos: ["Taller de Emprendimiento y Creación de Negocios"], electivo: true },
    { nombre: "Gerencia de Proyectos (Electivo)", requisitos: ["Gestión de la Cadena de Suministro"], electivo: true },
    { nombre: "Gestión de Inversiones I (Electivo)", requisitos: ["Mercado de Valores"], electivo: true },
    { nombre: "Herramientas Informáticas para las Finanzas (Electivo)", requisitos: ["Mercado de Valores"], electivo: true },
    { nombre: "Gestión Ambiental (Electivo)", requisitos: ["Ética y Sostenibilidad Empresarial"], electivo: true },
    { nombre: "Resolución de Conflictos y Negociación (Electivo)", requisitos: ["Legislación Laboral"], electivo: true },
    { nombre: "Trade y Retail Marketing (Electivo)", requisitos: ["Gestión Comercial"], electivo: true },
  ],
  10: [
    { nombre: "Dirección Estratégica", requisitos: ["Gerencia Financiera"] },
    { nombre: "Gerencia de Personas", requisitos: ["Taller de Liderazgo y Habilidades Gerenciales"] },
    { nombre: "Seminario de Investigación en Administración II", requisitos: ["Seminario de Investigación en Administración I"] },
    { nombre: "Gerencia de Marketing", requisitos: ["Gestión Comercial"] },
    { nombre: "Business Analytics (Electivo)", requisitos: ["Inteligencia de Negocios"], electivo: true },
    { nombre: "Inteligencia Artificial para la Gestión (Electivo)", requisitos: ["Tecnologías de Información para la Gestión"], electivo: true },
    { nombre: "Gestión del Servicio (Electivo)", requisitos: ["Gestión de la Cadena de Suministro"], electivo: true },
    { nombre: "Modelos de Optimización Logística (Electivo)", requisitos: ["Gestión de la Cadena de Suministro"], electivo: true },
    { nombre: "Gestión de Riesgos y Seguros (Electivo)", requisitos: ["Gerencia Financiera"], electivo: true },
    { nombre: "Gestión de Inversiones II (Electivo)", requisitos: ["Gestión de Inversiones I"], electivo: true },
    { nombre: "Coaching, Mindfulness e Inteligencia Emocional (Electivo)", requisitos: ["Taller de Liderazgo y Habilidades Gerenciales"], electivo: true },
    { nombre: "Gobierno Corporativo y Compliance (Electivo)", requisitos: ["Ética y Sostenibilidad Empresarial"], electivo: true },
    { nombre: "Marketing B2B (Electivo)", requisitos: ["Gestión Comercial"], electivo: true },
  ]
};

const grid = document.getElementById("grid");

function guardarProgreso() {
  localStorage.setItem("progresoAdministracion", JSON.stringify(data));
}

function cargarProgreso() {
  const progreso = localStorage.getItem("progresoAdministracion");
  if (progreso) {
    const parsed = JSON.parse(progreso);
    for (const ciclo in parsed) {
      parsed[ciclo].forEach((curso, i) => {
        data[ciclo][i].estado = curso.estado;
      });
    }
  }
}

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "curso";
  div.dataset.state = curso.estado || "locked";
  div.innerHTML = `<h3>${curso.nombre}</h3>`;

  if (curso.requisitos) {
    const req = document.createElement("small");
    req.textContent = `Requiere: ${curso.requisitos.join(", ")}`;
    div.appendChild(req);
  }

  div.addEventListener("click", () => {
    if (div.dataset.state === "unlocked") {
      div.dataset.state = "completed";
      curso.estado = "completed";
      actualizarDesbloqueos();
      guardarProgreso();
    } else if (div.dataset.state === "completed") {
      div.dataset.state = "unlocked";
      curso.estado = "unlocked";
      actualizarDesbloqueos();
      guardarProgreso();
    }
  });

  curso.element = div;
  return div;
}

function actualizarDesbloqueos() {
  const completados = new Set();
  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      if (curso.estado === "completed") {
        completados.add(curso.nombre);
      }
    });
  }

  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      if (curso.estado === "completed") return;

      if (!curso.requisitos || curso.requisitos.every((req) => completados.has(req))) {
        curso.estado = "unlocked";
        curso.element.dataset.state = "unlocked";
      } else {
        curso.estado = "locked";
        curso.element.dataset.state = "locked";
      }
    });
  }
}

function reiniciar() {
  for (const ciclo in data) {
    data[ciclo].forEach((curso) => {
      curso.estado = "locked";
      curso.element.dataset.state = "locked";
    });
  }
  actualizarDesbloqueos();
  guardarProgreso();
}

function render() {
  grid.innerHTML = "";
  for (const ciclo in data) {
    const columna = document.createElement("section");
    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(titulo);

    data[ciclo].forEach((curso) => {
      const div = crearCurso(curso);
      columna.appendChild(div);
    });

    grid.appendChild(columna);
  }

  actualizarDesbloqueos();
}

cargarProgreso();
render();
