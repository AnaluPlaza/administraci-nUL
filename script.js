
const data = {
  1: [
    { id: "mat1", nombre: "Matemática Básica", requisitos: [] },
    { id: "adm1", nombre: "Fundamentos de Administración", requisitos: [] },
    { id: "com1", nombre: "Comunicación Oral y Escrita", requisitos: [] },
    { id: "eco1", nombre: "Introducción a la Economía", requisitos: [] },
  ],
  2: [
    { id: "mat2", nombre: "Estadística I", requisitos: ["mat1"] },
    { id: "adm2", nombre: "Administración General", requisitos: ["adm1"] },
    { id: "com2", nombre: "Técnicas de Investigación", requisitos: ["com1"] },
    { id: "eco2", nombre: "Microeconomía", requisitos: ["eco1"] },
  ],
  3: [
    { id: "mat3", nombre: "Estadística II", requisitos: ["mat2"] },
    { id: "fin1", nombre: "Contabilidad General", requisitos: ["adm2"] },
    { id: "eco3", nombre: "Macroeconomía", requisitos: ["eco2"] },
    { id: "leg1", nombre: "Derecho Empresarial", requisitos: [] },
  ],
  4: [
    { id: "fin2", nombre: "Contabilidad de Costos", requisitos: ["fin1"] },
    { id: "adm3", nombre: "Comportamiento Organizacional", requisitos: ["adm2"] },
    { id: "mar1", nombre: "Marketing", requisitos: ["adm2"] },
    { id: "mat4", nombre: "Matemática Financiera", requisitos: ["mat3"] },
  ],
  5: [
    { id: "adm4", nombre: "Gestión del Talento Humano", requisitos: ["adm3"] },
    { id: "fin3", nombre: "Finanzas I", requisitos: ["mat4", "fin2"] },
    { id: "sis1", nombre: "Sistemas de Información", requisitos: [] },
    { id: "met1", nombre: "Metodología de la Investigación", requisitos: ["com2"] },
  ],
  6: [
    { id: "adm5", nombre: "Gestión de Operaciones", requisitos: ["adm3"] },
    { id: "fin4", nombre: "Finanzas II", requisitos: ["fin3"] },
    { id: "mar2", nombre: "Investigación de Mercados", requisitos: ["mar1"] },
    { id: "proy1", nombre: "Formulación de Proyectos", requisitos: ["fin3"] },
  ],
  7: [
    { id: "adm6", nombre: "Planeamiento Estratégico", requisitos: ["adm5"] },
    { id: "mar3", nombre: "Marketing Estratégico", requisitos: ["mar2"] },
    { id: "leg2", nombre: "Legislación Laboral", requisitos: ["leg1"] },
    { id: "proy2", nombre: "Evaluación de Proyectos", requisitos: ["proy1"] },
  ],
  8: [
    { id: "inv1", nombre: "Seminario de Investigación I", requisitos: ["met1"] },
    { id: "emp1", nombre: "Emprendimiento", requisitos: ["adm6"] },
    { id: "ger1", nombre: "Gerencia Financiera", requisitos: ["fin4"] },
    { id: "cal1", nombre: "Gestión de la Calidad", requisitos: ["adm5"] },
  ],
  9: [
    { id: "inv2", nombre: "Seminario de Investigación II", requisitos: ["inv1"] },
    { id: "dir1", nombre: "Dirección Empresarial", requisitos: ["adm6"] },
    { id: "com3", nombre: "Comercio Internacional", requisitos: ["eco3"] },
    { id: "soc1", nombre: "Responsabilidad Social", requisitos: [] },
  ],
  10: [
    { id: "tit1", nombre: "Trabajo de Titulación", requisitos: ["inv2"] },
    { id: "est1", nombre: "Prácticas Pre Profesionales", requisitos: ["dir1"] },
    { id: "elec1", nombre: "Electivo I", requisitos: [] },
    { id: "elec2", nombre: "Electivo II", requisitos: [] },
  ]
};

function crearCurso(curso) {
  const div = document.createElement("div");
  div.classList.add("curso");
  div.setAttribute("id", curso.id);
  div.setAttribute("data-state", "locked");

  const h3 = document.createElement("h3");
  h3.textContent = curso.nombre;

  div.appendChild(h3);
  return div;
}

function renderMalla() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  Object.entries(data).forEach(([ciclo, cursos]) => {
    const columna = document.createElement("div");
    columna.classList.add("columna");

    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${ciclo}`;
    columna.appendChild(titulo);

    cursos.forEach(curso => {
      const cursoElem = crearCurso(curso);
      columna.appendChild(cursoElem);
    });

    grid.appendChild(columna);
  });

  restaurarEstado();
  actualizarEstados();
  agregarListeners();
}

function agregarListeners() {
  document.querySelectorAll(".curso").forEach(elem => {
    elem.addEventListener("click", () => {
      const estado = elem.getAttribute("data-state");
      if (estado === "unlocked") {
        elem.setAttribute("data-state", "completed");
      } else if (estado === "completed") {
        elem.setAttribute("data-state", "unlocked");
      }
      guardarEstado();
      actualizarEstados();
    });
  });
}

function actualizarEstados() {
  document.querySelectorAll(".curso").forEach(elem => {
    const id = elem.id;
    const curso = encontrarCurso(id);
    const completados = obtenerCursosCompletados();

    if (completados.includes(id)) {
      elem.setAttribute("data-state", "completed");
    } else if (curso.requisitos.every(req => completados.includes(req))) {
      elem.setAttribute("data-state", "unlocked");
    } else {
      elem.setAttribute("data-state", "locked");
    }
  });
}

function encontrarCurso(id) {
  for (let ciclo in data) {
    for (let curso of data[ciclo]) {
      if (curso.id === id) return curso;
    }
  }
  return null;
}

function obtenerCursosCompletados() {
  return Array.from(document.querySelectorAll(".curso[data-state='completed']")).map(c => c.id);
}

function guardarEstado() {
  const estado = {};
  document.querySelectorAll(".curso").forEach(curso => {
    estado[curso.id] = curso.getAttribute("data-state");
  });
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function restaurarEstado() {
  const estado = JSON.parse(localStorage.getItem("estadoMalla") || "{}");
  document.querySelectorAll(".curso").forEach(curso => {
    if (estado[curso.id]) {
      curso.setAttribute("data-state", estado[curso.id]);
    }
  });
}

function reiniciarProgreso() {
  localStorage.removeItem("estadoMalla");
  renderMalla();
}

document.addEventListener("DOMContentLoaded", renderMalla);
