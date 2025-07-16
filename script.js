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
    { nombre: "Estadística Empresarial I", requisitos: ["Estadística Básica para los Negocios"] },
    { nombre: "Contabilidad General", requisitos: ["Matemática Aplicada a los Negocios"] },
    { nombre: "Antropología del Consumidor", electivo: true },
    { nombre: "Introducción a las Finanzas", requisitos: ["Matemática Aplicada a los Negocios"] },
    { nombre: "Matemática para la Gestión de Negocios", requisitos: ["Matemática Aplicada a los Negocios"] },
    { nombre: "Herramientas Informáticas para la Gestión I", requisitos: ["Economía y Empresa"] },
  ],
  4: [
    { nombre: "Costos y Presupuestos", requisitos: ["Contabilidad General"] },
    { nombre: "Sociología del Consumidor", requisitos: ["Antropología del Consumidor"] },
    { nombre: "Procesos de Marketing", requisitos: ["Antropología del Consumidor"] },
    { nombre: "Estadística Empresarial II", requisitos: ["Estadística Empresarial I"] },
    { nombre: "Administración Empresarial y Marketing", requisitos: ["Economía y Empresa"] },
    { nombre: "Microeconomía / Microeconomics", requisitos: ["Economía y Empresa"] },
    { nombre: "Herramientas Informáticas para la Gestión II (Electivo)", requisitos: ["Herramientas Informáticas para la Gestión I"], electivo: true },
  ],
  5: [
    { nombre: "Estadística Aplicada al Marketing", requisitos: ["Estadística Empresarial II"] },
    { nombre: "Consumidor y Experiencia del Cliente / Customer Experience", requisitos: ["Sociología del Consumidor"] },
    { nombre: "Elaboración de Estados Financieros", requisitos: ["Costos y Presupuestos", "Introducción a las Finanzas"] },
    { nombre: "Administración de Canales de Distribución", requisitos: ["Procesos de Marketing"] },
    { nombre: "Gestión de Producto y Marca", requisitos: ["Procesos de Marketing"] },
    { nombre: "Macroeconomía / Macroeconomics", requisitos: ["Microeconomía / Microeconomics"] },
  ],
  6: [
    { nombre: "Política y Fijación de Precios", requisitos: ["Macroeconomía / Macroeconomics"] },
    { nombre: "Operaciones Logísticas de Marketing", requisitos: ["Administración de Canales de Distribución"] },
    { nombre: "Investigación Cuantitativa de Mercados", requisitos: ["Estadística Aplicada al Marketing"] },
    { nombre: "Publicidad y Medios", requisitos: ["Gestión de Producto y Marca"] },
    { nombre: "Branding", requisitos: ["Gestión de Producto y Marca"] },
    { nombre: "Investigación Cualitativa de Mercados", requisitos: ["Consumidor y Experiencia del Cliente / Customer Experience"] },
    { nombre: "Ciencia de Datos Aplicado al Marketing", requisitos: ["Estadística Aplicada al Marketing"] },
  ],
  7: [
    { nombre: "Dirección Estratégica de Marketing", requisitos: ["Investigación Cuantitativa de Mercados"] },
    { nombre: "Finanzas para Marketing", requisitos: ["Elaboración de Estados Financieros"] },
    { nombre: "Marketing Social", requisitos: ["Investigación Cuantitativa de Mercados"] },
    { nombre: "Comunicación e Imagen Corporativa", requisitos: ["Publicidad y Medios"] },
    { nombre: "Transformación Digital y Marketing", requisitos: ["Publicidad y Medios"] },
    { nombre: "Endomarketing y Gestión de Personas", requisitos: ["Administración Empresarial y Marketing"] },
    { nombre: "Neuromarketing (Electivo)", requisitos: ["Investigación Cuantitativa de Mercados"], electivo: true },
    { nombre: "Promoción y Marketing BTL (Electivo)", requisitos: ["Política y Fijación de Precios"], electivo: true },
    { nombre: "Diseño de la Propuesta de Valor (Electivo)", requisitos: ["Gestión de Producto y Marca"], electivo: true },
    { nombre: "Métricas de Marketing (Electivo)", requisitos: ["Política y Fijación de Precios"], electivo: true },
    { nombre: "Metodologías Ágiles en Marketing (Electivo)", requisitos: ["Herramientas Informáticas para la Gestión I"], electivo: true },
  ],
  8: [
    { nombre: "Gerencia de Ventas", requisitos: ["Operaciones Logísticas de Marketing"] },
    { nombre: "Ética y Sostenibilidad Empresarial", requisitos: ["Endomarketing y Gestión de Personas"] },
    { nombre: "Herramientas Estratégicas de Negocios y Marketing", requisitos: ["Dirección Estratégica de Marketing"] },
    { nombre: "Métodos y Técnicas de Evaluación de Proyectos", requisitos: ["Finanzas para Marketing"] },
    { nombre: "E-Commerce", requisitos: ["Transformación Digital y Marketing"] },
    { nombre: "Inteligencia Comercial (Electivo)", requisitos: ["Dirección Estratégica de Marketing"], electivo: true },
    { nombre: "Taller de Investigación de Mercados (Electivo)", requisitos: ["Investigación Cuantitativa de Mercados"], electivo: true },
    { nombre: "Marketing Mobile (Electivo)", requisitos: ["Transformación Digital y Marketing"], electivo: true },
    { nombre: "Simulación de Decisiones de Marketing (Electivo)", requisitos: ["Dirección Estratégica de Marketing"], electivo: true },
    { nombre: "Gerencia de Marketing Deportivo (Electivo)", requisitos: ["Marketing Social"], electivo: true },
  ],
  9: [
    { nombre: "Trade Marketing y Merchandising", requisitos: ["Gerencia de Ventas"] },
    { nombre: "Marketing de Servicios", requisitos: ["Marketing Social"] },
    { nombre: "Seminario de Investigación en Marketing I", requisitos: ["Herramientas Estratégicas de Negocios y Marketing"] },
    { nombre: "Analítica de Datos", requisitos: ["Transformación Digital y Marketing"] },
    { nombre: "Negociación Comercial", requisitos: ["Comunicación e Imagen Corporativa"] },
    { nombre: "Marketing Personal (Electivo)", requisitos: ["Marketing Social"], electivo: true },
    { nombre: "Taller de Inbound Marketing (Electivo)", requisitos: ["Transformación Digital y Marketing"], electivo: true },
    { nombre: "Marketing de Retailers (Electivo)", requisitos: ["Herramientas Estratégicas de Negocios y Marketing"], electivo: true },
    { nombre: "Marketing y Ventas B2B (Electivo)", requisitos: ["Branding"], electivo: true },
    { nombre: "Emprendimientos de Marketing 5.0 (Electivo)", requisitos: ["E-Commerce"], electivo: true },
  ],
  10: [
    { nombre: "Seminario de Investigación en Marketing II", requisitos: ["Seminario de Investigación en Marketing I"] },
    { nombre: "Estrategias de Marketing Internacional", requisitos: ["Trade Marketing y Merchandising"] },
    { nombre: "Estrategia de Relacionamiento y Fidelización", requisitos: ["Herramientas Estratégicas de Negocios y Marketing"] },
    { nombre: "Plan de Marketing", requisitos: ["Métodos y Técnicas de Evaluación de Proyectos"] },
    { nombre: "Planeamiento Estratégico Publicitario", requisitos: ["Publicidad y Medios"] },
    { nombre: "Marketing de Centros Comerciales e Hipermercados (Electivo)", requisitos: ["Gerencia de Ventas"], electivo: true },
    { nombre: "Marketing en la Base de la Pirámide (Electivo)", requisitos: ["Métodos y Técnicas de Evaluación de Proyectos"], electivo: true },
    { nombre: "Patrocinio de Marcas y Sponsoring (Electivo)", requisitos: ["Marketing de Servicios"], electivo: true },
  ]
};

const grid = document.getElementById("grid");

function guardarProgreso() {
  localStorage.setItem("progresoMarketing", JSON.stringify(data));
}

function cargarProgreso() {
  const progreso = localStorage.getItem("progresoMarketing");
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
