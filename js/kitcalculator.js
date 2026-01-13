/***************************************
 *  KIT CALCULATOR + FACTURA PROFESIONAL
 ***************************************/
import { productosSeed } from "./seed.js";

const { jsPDF } = window.jspdf;
const products = productosSeed;

/* =========================
   ESTADO GLOBAL
========================= */
window.kitTemporal = [];
window.productosConservados = [];
window.presupuestoTotal = 0;
window.descuentoKit = 0;
window.esRecalculo = false;

const MIN_PRESUPUESTO = 10000;

/* ============================================================
   CALCULAR KIT
============================================================ */
export function calculateKit() {
  const budgetInput = document.getElementById("budgetInput");
  const budget = Number(budgetInput.value);
  const btnGenerar = document.getElementById("btnGenerarKit");

  if (!budget) return;

  // 🧠 Guardar presupuesto solo la primera vez
  if (!window.presupuestoTotal) {
    window.presupuestoTotal = budget;

    // 🔒 Bloquear botón generar kit después del primer uso
    if (btnGenerar) {
      btnGenerar.disabled = true;
      btnGenerar.classList.add("disabled");
    }
  }

  // 🚫 Evitar usar "Generar kit" cuando ya existe un kit
  if (!window.esRecalculo && window.productosConservados.length > 0) {
    return;
  }

  // 🔒 Validar mínimo SOLO en el cálculo inicial
  if (!window.esRecalculo && budget < MIN_PRESUPUESTO) {
    document.getElementById("kitResults").innerHTML = `
      <div class="alert alert-danger">
        Ingresa un presupuesto válido de al menos $${MIN_PRESUPUESTO.toLocaleString()}.
      </div>`;
    return;
  }

  const activos = products.filter(
    (p) => p.precioMayor && p.estado !== "agotado"
  );
  if (activos.length === 0) return;

  let restante = budget;
  window.kitTemporal = [];

  const categorias = {};
  activos.forEach((p) => {
    if (!categorias[p.categoria]) categorias[p.categoria] = [];
    categorias[p.categoria].push(p);
  });

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  const maxUnidadesPorProducto = 4;
  const minUnidadesPorProducto = 2;
  let intentos = 0;

  while (restante > 0 && intentos < 100) {
    intentos++;

    const catKeys = Object.keys(categorias).filter(
      (k) => categorias[k].length > 0
    );
    if (catKeys.length === 0) break;

    const categoria =
      catKeys[Math.floor(Math.random() * catKeys.length)];
    const producto = shuffle(categorias[categoria])[0];

    const maxUnidadesPresupuesto = Math.floor(
      restante / producto.precioMayor
    );

    if (maxUnidadesPresupuesto < minUnidadesPorProducto) {
      categorias[categoria].shift();
      continue;
    }

    const maxUnidades = Math.min(
      maxUnidadesPorProducto,
      maxUnidadesPresupuesto,
      producto.stock ?? Infinity
    );

    const unidades =
      minUnidadesPorProducto +
      Math.floor(Math.random() * (maxUnidades - minUnidadesPorProducto + 1));

    const subtotal = unidades * producto.precioMayor;

    window.kitTemporal.push({
      id: producto.id,
      nombre: producto.nombre,
      cantidad: unidades,
      precio: producto.precioMayor,
      subtotal,
      imagen: producto.imagen || "https://via.placeholder.com/150",
    });

    restante -= subtotal;
    categorias[categoria].shift();
  }

  renderKit();
}

/* ============================================================
   RENDER KIT
============================================================ */
function renderKit() {
  const listaKit = document.getElementById("listaKit");
  const listaConservados = document.getElementById("listaConservados");
  const contConservados = document.getElementById("productosConservados");
  const totalSpan = document.getElementById("totalKit");
  const saldoSpan = document.getElementById("saldoRestante");
  const resumen = document.getElementById("resumenKit");
  const btnRecalcular = document.getElementById("btnRecalcular");

  listaKit.innerHTML = "";
  listaConservados.innerHTML = "";

  let total = 0;

  if (window.productosConservados.length > 0) {
    contConservados.classList.remove("d-none");
    window.productosConservados.forEach((p) => {
      total += p.subtotal;
      listaConservados.innerHTML += cardProducto(p, false);
    });
  } else {
    contConservados.classList.add("d-none");
  }

  window.kitTemporal.forEach((p) => {
    total += p.subtotal;
    listaKit.innerHTML += cardProducto(p, true);
  });

  totalSpan.textContent = `$${total.toLocaleString()}`;
  resumen.classList.remove("d-none");
  btnRecalcular.classList.remove("d-none");

  const totalConservados = window.productosConservados.reduce(
    (a, p) => a + p.subtotal,
    0
  );
  const totalKit = window.kitTemporal.reduce(
    (a, p) => a + p.subtotal,
    0
  );

  const saldoReal =
    window.presupuestoTotal - totalConservados - totalKit;

  saldoSpan.textContent = `$${Math.max(saldoReal, 0).toLocaleString()}`;
}

/* ============================================================
   CARD PRODUCTO
============================================================ */
function cardProducto(p, permitirConservar) {
  return `
  <div class="col-md-4">
    <div class="card h-100 shadow-sm">
      <img src="${p.imagen}" class="card-img-top">
      <div class="card-body">
        <h5>${p.nombre}</h5>
        <p>Cantidad: ${p.cantidad}</p>
        <p>Precio: $${p.precio.toLocaleString()}</p>
        <p>Subtotal: $${p.subtotal.toLocaleString()}</p>
        ${
          permitirConservar
            ? `<button class="btn btn-outline-primary btn-sm"
                onclick="conservarProducto(${p.id})">
                📌 Conservar
              </button>`
            : ""
        }
      </div>
    </div>
  </div>`;
}

/* ============================================================
   CONSERVAR PRODUCTO
============================================================ */
window.conservarProducto = function (id) {
  const index = window.kitTemporal.findIndex((p) => p.id === id);
  if (index === -1) return;

  const producto = window.kitTemporal.splice(index, 1)[0];
  window.productosConservados.push(producto);
  renderKit();
};

/* ============================================================
   RECALCULAR
============================================================ */
window.recalcularKit = function () {
  const totalConservados = window.productosConservados.reduce(
    (a, p) => a + p.subtotal,
    0
  );

  const disponible = window.presupuestoTotal - totalConservados;
  if (disponible <= 0) {
    alert("No queda presupuesto para recalcular.");
    return;
  }

  window.esRecalculo = true;
  document.getElementById("budgetInput").value = disponible;
  window.kitTemporal = [];
  calculateKit();
  window.esRecalculo = false;
};

window.calculateKit = calculateKit;
