// --- Datos de ciclos y cursos ---
const data = [
  {
    ciclo: 1,
    cursos: [
      { nombre: "Matemática Básica", req: [] },
      { nombre: "Comunicación Oral y Escrita", req: [] },
      { nombre: "Fundamentos de Administración", req: [] },
      { nombre: "Contabilidad General", req: [] },
      { nombre: "Fundamentos de Economía", req: [] },
      { nombre: "Metodología del Estudio Universitario", req: [] }
    ]
  },
  {
    ciclo: 2,
    cursos: [
      { nombre: "Matemática Financiera", req: ["Matemática Básica"] },
      { nombre: "Psicología Organizacional", req: [] },
      { nombre: "Administración de Empresas", req: ["Fundamentos de Administración"] },
      { nombre: "Contabilidad de Costos", req: ["Contabilidad General"] },
      { nombre: "Microeconomía", req: ["Fundamentos de Economía"] },
      { nombre: "Desarrollo Personal", req: [] }
    ]
  },
  {
    ciclo: 3,
    cursos: [
      { nombre: "Estadística Descriptiva", req: ["Matemática Financiera"] },
      { nombre: "Comportamiento Organizacional", req: ["Psicología Organizacional"] },
      { nombre: "Administración de Recursos Humanos I", req: ["Administración de Empresas"] },
      { nombre: "Contabilidad Financiera", req: ["Contabilidad de Costos"] },
      { nombre: "Macroeconomía", req: ["Microeconomía"] },
      { nombre: "Ciudadanía y Responsabilidad Social", req: [] }
    ]
  },
  {
    ciclo: 4,
    cursos: [
      { nombre: "Estadística Inferencial", req: ["Estadística Descriptiva"] },
      { nombre: "Marketing I", req: ["Comportamiento Organizacional"] },
      { nombre: "Administración de Recursos Humanos II", req: ["Administración de Recursos Humanos I"] },
      { nombre: "Legislación Empresarial", req: ["Contabilidad Financiera"] },
      { nombre: "Gestión de la Calidad", req: ["Macroeconomía"] },
      { nombre: "Ética Profesional", req: [] }
    ]
  },
  {
    ciclo: 5,
    cursos: [
      { nombre: "Investigación de Mercados", req: ["Estadística Inferencial"] },
      { nombre: "Marketing II", req: ["Marketing I"] },
      { nombre: "Comercio Internacional", req: ["Macroeconomía"] },
      { nombre: "Costos y Presupuestos", req: ["Legislación Empresarial"] },
      { nombre: "Gestión del Talento Humano", req: ["Administración de Recursos Humanos II"] },
      { nombre: "Gestión Ambiental", req: [] }
    ]
  },
  {
    ciclo: 6,
    cursos: [
      { nombre: "Planeamiento Estratégico", req: ["Marketing II", "Gestión del Talento Humano"] },
      { nombre: "Finanzas Empresariales", req: ["Costos y Presupuestos"] },
      { nombre: "Negocios Internacionales", req: ["Comercio Internacional"] },
      { nombre: "Sistemas de Información Gerencial", req: [] },
      { nombre: "Electivo 1", req: [], electivo: true },
      { nombre: "Electivo 2", req: [], electivo: true }
    ]
  },
  {
    ciclo: 7,
    cursos: [
      { nombre: "Gestión de Proyectos", req: ["Planeamiento Estratégico"] },
      { nombre: "Administración Financiera", req: ["Finanzas Empresariales"] },
      { nombre: "Desarrollo de Nuevos Productos", req: ["Negocios Internacionales"] },
      { nombre: "Gestión de Operaciones", req: ["Sistemas de Información Gerencial"] },
      { nombre: "Electivo 3", req: [], electivo: true },
      { nombre: "Electivo 4", req: [], electivo: true }
    ]
  },
  {
    ciclo: 8,
    cursos: [
      { nombre: "Seminario de Investigación I", req: ["Gestión de Proyectos"] },
      { nombre: "Evaluación de Proyectos", req: ["Administración Financiera"] },
      { nombre: "Marketing Digital", req: ["Desarrollo de Nuevos Productos"] },
      { nombre: "Simulación Empresarial", req: ["Gestión de Operaciones"] },
      { nombre: "Electivo 5", req: [], electivo: true },
      { nombre: "Electivo 6", req: [], electivo: true }
    ]
  },
  {
    ciclo: 9,
    cursos: [
      { nombre: "Seminario de Investigación II", req: ["Seminario de Investigación I"] },
      { nombre: "Gestión del Cambio Organizacional", req: [] },
      { nombre: "Consultoría Empresarial", req: [] },
      { nombre: "Electivo 7", req: [], electivo: true },
      { nombre: "Electivo 8", req: [], electivo: true }
    ]
  },
  {
    ciclo: 10,
    cursos: [
      { nombre: "Tesis de Grado", req: ["Seminario de Investigación II"] },
      { nombre: "Electivo 9", req: [], electivo: true },
      { nombre: "Electivo 10", req: [], electivo: true }
    ]
  }
];

// --- Lógica interactiva ---
const STORAGE_KEY = "admin_malla_state_v1";
let saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
const cursoElements = new Map();

function render() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  data.forEach((nivel) => {
    const col = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent = `Ciclo ${nivel.ciclo}`;
    col.appendChild(title);

    nivel.cursos.forEach((c) => {
      const div = document.createElement("div");
      div.className = "curso";
      div.dataset.state = "locked";
      div.dataset.nombre = c.nombre;
      const nombreMostrar = c.electivo ? `${c.nombre} (Electivo)` : c.nombre;
      div.innerHTML = `<h3>${nombreMostrar}</h3>${
        c.req.length ? `<small>Req: ${c.req.join(", ")}</small>` : ""
      }`;
      div.addEventListener("click", () => toggleCurso(c.nombre));
      col.appendChild(div);
      cursoElements.set(c.nombre, { el: div, req: c.req });
    });

    grid.appendChild(col);
  });

  updateStates();
}

function toggleCurso(nombre) {
  const obj = cursoElements.get(nombre);
  if (!obj) return;

  const state = obj.el.dataset.state;
  if (state !== "unlocked" && state !== "completed") return;

  saved[nombre] = !saved[nombre];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  updateStates();
}

function updateStates() {
  cursoElements.forEach(({ el, req }, nombre) => {
    const completed = !!saved[nombre];
    const unlocked = req.every((r) => !!saved[r]);

    el.dataset.state = completed
      ? "completed"
      : unlocked
      ? "unlocked"
      : "locked";
  });
}

function resetMalla() {
  localStorage.removeItem(STORAGE_KEY);
  saved = {};
  updateStates();
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  const resetButton = document.getElementById("reiniciar");
  if (resetButton) resetButton.addEventListener("click", resetMalla);
});
