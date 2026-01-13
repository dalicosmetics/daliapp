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

const MIN_PRESUPUESTO = 10000;

/* ============================================================
   CALCULAR KIT
============================================================ */
export function calculateKit() {
  const budgetInput = document.getElementById("budgetInput");
  const budget = Number(budgetInput.value);

  // Guardamos presupuesto original solo la primera vez
  if (!window.presupuestoTotal) {
    window.presupuestoTotal = budget;
  }

  if (!budget || budget < MIN_PRESUPUESTO) {
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

  // Agrupar por categoría
  const categorias = {};
  activos.forEach((p) => {
    if (!categorias[p.categoria]) categorias[p.categoria] = [];
    categorias[p.categoria].push(p);
  });

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
  const maxUnidadesPorProducto = 4;
  const minUnidadesPorProducto = 2;
  let intentos = 0;
  const maxIntentos = 100;

  while (restante > 0 && intentos < maxIntentos) {
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
      Math.floor(
        Math.random() *
          (maxUnidades - minUnidadesPorProducto + 1)
      );

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
   RENDER KIT (CON CONSERVADOS)
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

  // Productos conservados
  if (window.productosConservados.length > 0) {
    contConservados.classList.remove("d-none");

    window.productosConservados.forEach((p) => {
      total += p.subtotal;
      listaConservados.innerHTML += cardProducto(p, false);
    });
  } else {
    contConservados.classList.add("d-none");
  }

  // Productos nuevos
  window.kitTemporal.forEach((p) => {
    total += p.subtotal;
    listaKit.innerHTML += cardProducto(p, true);
  });

  totalSpan.textContent = `$${total.toLocaleString()}`;
  resumen.classList.remove("d-none");
  btnRecalcular.classList.remove("d-none");

  // Saldo restante
  const gastado =
    window.productosConservados.reduce((a, p) => a + p.subtotal, 0) +
    window.kitTemporal.reduce((a, p) => a + p.subtotal, 0);

  const saldo = Math.max(window.presupuestoTotal - gastado, 0);
  saldoSpan.textContent = `$${saldo.toLocaleString()}`;

  document
    .getElementById("factura-kit")
    ?.addEventListener("click", abrirModalCliente);
}

/* ============================================================
   CARD DE PRODUCTO
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
   RECALCULAR CON SALDO RESTANTE
============================================================ */
window.recalcularKit = function () {
  const gastado = window.productosConservados.reduce(
    (a, p) => a + p.subtotal,
    0
  );

  const saldo = window.presupuestoTotal - gastado;

  if (saldo < 1000) {
    alert("El saldo restante es insuficiente para recalcular.");
    return;
  }

  document.getElementById("budgetInput").value = saldo;
  window.kitTemporal = [];

  calculateKit();
};

/* ============================================================
   MODAL CLIENTE
============================================================ */
function abrirModalCliente() {
  const envioModal = new bootstrap.Modal(
    document.getElementById("envioModalKit")
  );
  envioModal.show();

  document.getElementById("confirmarEnvioBtnKit").onclick = () => {
    const nombre = document.getElementById("nombreClienteKit").value.trim();
    const telefono =
      document.getElementById("telefonoClienteKit").value.trim();
    const celular =
      document.getElementById("celularClienteKit").value.trim();
    const direccion =
      document.getElementById("direccionClienteKit").value.trim();

    if (!nombre || !telefono || !celular || !direccion) {
      alert("Por favor completa todos los campos.");
      return;
    }

    envioModal.hide();
    generarFacturaBonita({ nombre, telefono, celular, direccion });
  };
}

/* ============================================================
   FACTURA PROFESIONAL (SIN CAMBIOS)
============================================================ */
async function generarFacturaBonita(cliente) {
  const doc = new jsPDF({ unit: "pt", format: "letter" });

  const logoDataURL = await getImageDataURL("./assets/img/minilogo.png");
  doc.addImage(logoDataURL, "PNG", 40, 40, 50, 50);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("FACTURA DE KIT EMPRENDEDOR", 110, 60);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Dali Cosmetics - Generada automáticamente", 110, 80);

  doc.setFont("helvetica", "bold");
  doc.text("Datos del Cliente:", 40, 120);
  doc.setFont("helvetica", "normal");
  doc.text(`Nombre: ${cliente.nombre}`, 40, 135);
  doc.text(`Teléfono: ${cliente.telefono}`, 40, 150);
  doc.text(`Celular: ${cliente.celular}`, 40, 165);
  doc.text(`Dirección: ${cliente.direccion}`, 40, 180);

  doc.line(40, 200, 550, 200);

  let y = 230;
  let total = 0;

  for (const p of [
    ...window.productosConservados,
    ...window.kitTemporal,
  ]) {
    total += p.subtotal;

    const imgData = await getImageDataURL(p.imagen);
    doc.addImage(imgData, "JPEG", 40, y - 12, 30, 30);

    doc.text(p.nombre.substring(0, 25), 80, y);
    doc.text(String(p.cantidad), 260, y);
    doc.text(`$${p.precio.toLocaleString()}`, 330, y);
    doc.text(`$${p.subtotal.toLocaleString()}`, 430, y);

    y += 40;
    if (y > 700) {
      doc.addPage();
      y = 60;
    }
  }

  doc.setFont("helvetica", "bold");
  doc.text(`TOTAL: $${total.toLocaleString()}`, 40, y + 20);

  doc.save("Factura_Kit.pdf");
}

/* ============================================================
   IMG → DATAURL
============================================================ */
function getImageDataURL(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 50;
      canvas.height = 50;
      canvas.getContext("2d").drawImage(img, 0, 0, 50, 50);
      resolve(canvas.toDataURL("image/jpeg"));
    };
    img.onerror = reject;
    img.src = url;
  });
}

window.calculateKit = calculateKit;
