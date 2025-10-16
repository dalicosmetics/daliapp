// ================================
// app.js (versión adaptada con modal de confirmación)
// ================================

import { productosSeed } from "./seed.js";

// Referencias al DOM
const lista = document.getElementById("lista-productos");
const buscador = document.getElementById("buscador");
const ordenPrecio = document.getElementById("orden-precio");
const catalogoSection = document.getElementById("catalogo-section");
const btnCatalogo = document.getElementById("btn-catalogo");
const categorias = document.querySelector(".subnav-links");
const categoriasItems = document.querySelectorAll(".subnav-links a");
let paginaActual = 1;
const productosPorPagina = 8;
let productosFiltradosGlobal = productosSeed; // se actualiza con filtros/búsquedas

function renderProductos(productos) {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = "";

  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;
  const productosPagina = productos.slice(inicio, fin);

  productosPagina.forEach(p => {
    let etiqueta = "";
    let claseEstado = "";
    let botonDisabled = "";

    switch (p.estado) {
      case "agotado":
        etiqueta = `<span class="etiqueta agotado-label">AGOTADO</span>`;
        claseEstado = "agotado";
        botonDisabled = "disabled";
        break;
      case "nuevo":
        etiqueta = `<span class="etiqueta etiqueta-nuevo">NUEVO</span>`;
        break;
      case "promocion":
        etiqueta = `<span class="etiqueta etiqueta-promocion">PROMOCION</span>`;
        break;
      case "ultimos":
        etiqueta = `<span class="etiqueta etiqueta-ultimos">ULTIMAS UNIDADES</span>`;
        break;
      default:
        etiqueta = "";
    }

    lista.innerHTML += `
      <div class="producto-card ${claseEstado}">
        <div class="imagen-container">
          <a href="detalle-producto.html?id=${p.id}">
            <img src="${p.imagenes[0]}" alt="${p.nombre}">
          </a>
          ${etiqueta}
        </div>

        <h3>
          <a href="detalle-producto.html?id=${p.id}" class="link-nombre">
            ${p.nombre}
          </a>
        </h3>

        <p class="categoria">${p.categoria}</p>

        <div class="precios">
          <p class="precio-detalle">Detal: $${p.precioDetal.toLocaleString()}</p>
          <p class="precio-mayor">Mayor: $${p.precioMayor.toLocaleString()}</p>
        </div>

        <div class="cantidad-control">
          <button class="menos" data-id="${p.id}">-</button>
          <input type="number" value="1" min="1" class="cantidad" data-id="${p.id}">
          <button class="mas" data-id="${p.id}">+</button>
        </div>

        <button class="btn agregar" data-id="${p.id}" ${botonDisabled}> 
          ${p.estado === "agotado" ? "No disponible" : "Agregar al carrito"}
        </button>
      </div>
    `;
  });

  prepararBotonesAgregar();
  prepararCantidadBotones();
  renderPaginacion(productos);
}

// -----------------------------
// 🔹 Eventos de "Agregar al carrito"
// -----------------------------
function prepararBotonesAgregar() {
  document.querySelectorAll(".agregar").forEach(btn => {
    btn.addEventListener("click", e => {
      const boton = e.target;
      const id = parseInt(boton.dataset.id);
      const inputCantidad = document.querySelector(`.cantidad[data-id="${id}"]`);

      // Evitar clics repetidos
      boton.disabled = true;
      setTimeout(() => (boton.disabled = false), 1000);

      // Agregar producto
      agregarAlCarrito(id, inputCantidad.value);

      // ✅ Mostrar modal de confirmación
      const modal = document.getElementById("modal-carrito");
      modal.classList.add("mostrar");

      setTimeout(() => {
        modal.classList.remove("mostrar");
      }, 2000);
    });
  });
}

// -----------------------------
// 🔹 Actualizar la cantidad en el carrito
// -----------------------------
function actualizarCantidad(id, cantidad) {
  let carrito = obtenerCarrito();
  const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad = parseInt(cantidad);
    guardarCarrito(carrito);
  }
}

// -----------------------------
// 🔹 Filtros y búsqueda
// -----------------------------
function aplicarFiltros() {
  const texto = buscador.value.toLowerCase();
  const categoriaActiva = document.querySelector(".subnav-links .activo")?.dataset.categoria || "todos";

  let productosFiltrados = productosSeed.filter(p => {
    const filtroNombre = p.nombre.toLowerCase().includes(texto);
    const filtroCategoria = categoriaActiva === "todos" || p.categoria === categoriaActiva;

    if (categoriaActiva === "x" || categoriaActiva === "x") {
      return false;
    }

    return filtroNombre && filtroCategoria;
  });

  if (ordenPrecio.value === "asc") {
    productosFiltrados.sort((a, b) => a.precioDetal - b.precioDetal);
  } else if (ordenPrecio.value === "desc") {
    productosFiltrados.sort((a, b) => b.precioDetal - a.precioDetal);
  }

  // Reiniciar paginación
  paginaActual = 1;
  productosFiltradosGlobal = productosFiltrados;
  renderProductos(productosFiltrados);
}

// -----------------------------
// 🔹 Manejo del Carrito (localStorage)
// -----------------------------
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(id, cantidad) {
  let carrito = obtenerCarrito();
  const producto = productosSeed.find(p => p.id === id);

  const item = carrito.find(p => p.id === id);
  if (item) {
    item.cantidad += parseInt(cantidad);
  } else {
    carrito.push({ ...producto, cantidad: parseInt(cantidad) });
  }

  guardarCarrito(carrito);
  actualizarCarritoEmergente();
}

// -----------------------------
// 🔹 Carrito emergente
// -----------------------------
function actualizarCarritoEmergente() {
  const carrito = obtenerCarrito();
  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const carritoEmergente = document.getElementById('carrito-emergente');
  const totalArticulosElem = document.getElementById('total-articulos');
  
  if (totalArticulos > 0) {
    carritoEmergente.style.display = 'block';
    totalArticulosElem.textContent = `${totalArticulos} Artículos`;

    setTimeout(() => {
      carritoEmergente.style.display = 'none';
    }, 5000);
  } else {
    carritoEmergente.style.display = 'none';
  }
}

// -----------------------------
// 🔹 Eventos UI
// -----------------------------
btnCatalogo.addEventListener("click", (e) => {
  e.preventDefault();
  catalogoSection.style.display = "block";
  catalogoSection.scrollIntoView({ behavior: "smooth" });

  document.querySelector(".subnav-links .activo")?.classList.remove("activo");
  btnCatalogo.classList.add("activo");

  aplicarFiltros();
});

categoriasItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".subnav-links .activo")?.classList.remove("activo");
    item.classList.add("activo");

    catalogoSection.style.display = "block";
    catalogoSection.scrollIntoView({ behavior: "smooth" });

    aplicarFiltros();
  });
});

buscador.addEventListener("input", aplicarFiltros);
ordenPrecio.addEventListener("change", aplicarFiltros);
// ==================
// 🔹 MENÚ RESPONSIVE
// ==================
// ==============================
// 📌 MENU RESPONSIVE (hamburguesa)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }
});

const btnPaso1 = document.getElementById("btn-paso1");

btnPaso1?.addEventListener("click", (e) => {
  e.preventDefault();
  catalogoSection.style.display = "block";
  catalogoSection.scrollIntoView({ behavior: "smooth" });

  document.querySelector(".subnav-links .activo")?.classList.remove("activo");
  btnCatalogo.classList.add("activo"); // Aquí puedes dejar btnCatalogo como referencia visual

  aplicarFiltros();
});

function renderPaginacion(productos) {
  const paginacion = document.getElementById("paginacion");
  paginacion.innerHTML = "";

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  if (totalPaginas <= 1) return; // No mostrar si solo hay una página

  // Anterior
  if (paginaActual > 1) {
    const btnAnterior = document.createElement("button");
    btnAnterior.textContent = "« Anterior";
    btnAnterior.addEventListener("click", () => {
      paginaActual--;
      renderProductos(productosFiltradosGlobal);
      catalogoSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    paginacion.appendChild(btnAnterior);
  }

  // Números
  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === paginaActual) btn.classList.add("activo");
    btn.addEventListener("click", () => {
      paginaActual = i;
      renderProductos(productosFiltradosGlobal);
      catalogoSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    paginacion.appendChild(btn);
  }

  // Siguiente
  if (paginaActual < totalPaginas) {
    const btnSiguiente = document.createElement("button");
    btnSiguiente.textContent = "Siguiente »";
    btnSiguiente.addEventListener("click", () => {
      paginaActual++;
      renderProductos(productosFiltradosGlobal);
    });
    paginacion.appendChild(btnSiguiente);
  }
}

function prepararCantidadBotones() {
  document.querySelectorAll(".mas").forEach(btn => {
    btn.addEventListener("click", e => {
      const input = e.target.parentElement.querySelector(".cantidad");
      input.value = parseInt(input.value) + 1;
      actualizarCantidad(input.dataset.id, input.value);
    });
  });

  document.querySelectorAll(".menos").forEach(btn => {
    btn.addEventListener("click", e => {
      const input = e.target.parentElement.querySelector(".cantidad");
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        actualizarCantidad(input.dataset.id, input.value);
      }
    });
  });
}

// -----------------------------
// 🔹 Render inicial
// -----------------------------
productosFiltradosGlobal = productosSeed;
renderProductos(productosFiltradosGlobal);
actualizarCarritoEmergente();


