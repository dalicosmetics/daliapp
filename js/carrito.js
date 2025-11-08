// ================================
// carrito.js (con modo admin + descuento + inputs cantidad + precio editable + salir admin)
// ================================

// --- Constantes para elementos DOM ---
const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");
const btnContinuar = document.getElementById("continuar");
const btnFactura = document.getElementById("factura");
const overlay = document.getElementById("overlay");

// -----------------------------
// 🔹 Detección y manejo de sesión
// -----------------------------
function iniciarSesion() {
  const sesionActiva = localStorage.getItem("sesionActiva");
  if (sesionActiva) {
    document.body.classList.add("modo-admin");
    console.log("🛍️ Modo ADMIN activo en carrito");
    agregarBotonSalirAdmin();
  } else {
    document.body.classList.add("modo-visitante");
    console.log("👤 Modo VISITANTE activo en carrito");
  }
  renderCarrito();
}

// -----------------------------
// 🔹 Funciones para carrito
// -----------------------------
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function getPrecioUnitario(p) {
  // ✅ Si el admin modificó manualmente el precio, usar ese
  if (p.precioManual !== undefined && p.precioManual > 0) {
    return p.precioManual;
  }

  if (p.precioDetal === undefined || p.precioMayor === undefined) {
    return p.precio;
  }
  return p.cantidad >= 2 ? p.precioMayor : p.precioDetal;
}

// -----------------------------
// 🔹 Renderizar carrito con descuento y modo admin
// -----------------------------
function renderCarrito() {
  const carrito = obtenerCarrito();
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
    totalElement.textContent = "";
    return;
  }

  let total = 0;
  const sesionActiva = localStorage.getItem("sesionActiva");

  carrito.forEach(p => {
    const precioUnitario = getPrecioUnitario(p);
    const subtotal = precioUnitario * p.cantidad;
    total += subtotal;

    const item = document.createElement("div");
    item.classList.add("item-carrito");

    // 🔹 Inputs editables solo en modo admin
    const cantidadHTML = sesionActiva
      ? `<input type="number" class="input-cantidad" data-id="${p.id}" min="1" value="${p.cantidad}" style="width:50px;">`
      : `<span>${p.cantidad}</span>`;

    const precioHTML = sesionActiva
      ? `<input type="number" class="input-precio" data-id="${p.id}" min="0" step="100" value="${precioUnitario}" style="width:80px;">`
      : `<span>$${precioUnitario.toLocaleString()}</span>`;

    item.innerHTML = `
      <div class="img-container">
        <img src="${p.imagen}" alt="${p.nombre}" class="miniatura">
      </div>
      <div class="detalle">
        <h3>${p.nombre}</h3>
        <p>Precio: ${precioHTML}</p>
        <p>Subtotal: $${subtotal.toLocaleString()}</p>
      </div>
      <div class="controles">
        <button class="menos" data-id="${p.id}">-</button>
        ${cantidadHTML}
        <button class="mas" data-id="${p.id}">+</button>
        <button class="eliminar" data-id="${p.id}">❌</button>
      </div>
    `;

    listaCarrito.appendChild(item);
  });

  // 🔹 Mostrar input descuento solo en modo admin
  let descuentoHTML = "";
  if (sesionActiva) {
    descuentoHTML = `
      <div id="seccion-descuento">
        <label>Descuento (%):</label>
        <input type="number" id="input-descuento" min="0" max="100" value="${window.descuentoActual || 0}" style="width:80px;">
      </div>
    `;
  }

  totalElement.innerHTML = `
    ${descuentoHTML}
    <p id="texto-total">Total a pagar: $${total.toLocaleString()}</p>
  `;

  // 🔹 Escuchar cambio en descuento para actualizar total con descuento
  const inputDescuento = document.getElementById("input-descuento");
  if (inputDescuento) {
    inputDescuento.addEventListener("input", () => {
      window.descuentoActual = parseFloat(inputDescuento.value) || 0;
      const totalConDescuento = total - (total * (window.descuentoActual / 100));
      document.getElementById("texto-total").textContent =
        `Total con descuento: $${totalConDescuento.toLocaleString()}`;
    });
  }

  // Aplicar descuento previo si existe
  if (window.descuentoActual && window.descuentoActual > 0) {
    const totalConDescuento = total - (total * (window.descuentoActual / 100));
    document.getElementById("texto-total").textContent =
      `Total con descuento: $${totalConDescuento.toLocaleString()}`;
  }
}

// -----------------------------
// 🔹 Eventos para botones cantidad, eliminar, precio y cantidad (modo admin)
// -----------------------------
function configurarEventosCarrito() {
  listaCarrito.addEventListener("click", e => {
    let carrito = obtenerCarrito();

    if (e.target.classList.contains("mas")) {
      const id = e.target.dataset.id;
      carrito = carrito.map(p => {
        if (p.id == id) p.cantidad++;
        return p;
      });
    }

    if (e.target.classList.contains("menos")) {
      const id = e.target.dataset.id;
      carrito = carrito.map(p => {
        if (p.id == id && p.cantidad > 1) p.cantidad--;
        return p;
      });
    }

    if (e.target.classList.contains("eliminar")) {
      const id = e.target.dataset.id;
      carrito = carrito.filter(p => p.id != id);
    }

    guardarCarrito(carrito);
    renderCarrito();
  });

  // 🔹 Cambios en cantidad o precio (modo admin)
  listaCarrito.addEventListener("input", e => {
    const id = e.target.dataset.id;
    let carrito = obtenerCarrito();

    // Editar cantidad
    if (e.target.classList.contains("input-cantidad")) {
      let valor = parseInt(e.target.value);
      if (isNaN(valor) || valor < 1) valor = 1;
      carrito = carrito.map(p => {
        if (p.id == id) p.cantidad = valor;
        return p;
      });
    }

    // Editar precio unitario (solo modo admin)
    if (e.target.classList.contains("input-precio")) {
      let nuevoPrecio = parseFloat(e.target.value);
      if (isNaN(nuevoPrecio) || nuevoPrecio < 0) nuevoPrecio = 0;
      carrito = carrito.map(p => {
        if (p.id == id) p.precioManual = nuevoPrecio;
        return p;
      });
    }

    guardarCarrito(carrito);
    renderCarrito();
  });
}

// -----------------------------
// 🔹 Botón salir modo admin
// -----------------------------
function agregarBotonSalirAdmin() {
  if (document.getElementById("btnSalirAdmin")) return; // evitar duplicado
  const btnSalirAdmin = document.createElement("button");
  btnSalirAdmin.id = "btnSalirAdmin";
  btnSalirAdmin.textContent = "Salir Modo Admin";
  btnSalirAdmin.style = "position: fixed; top: 10px; right: 10px; z-index: 1000;";
  document.body.appendChild(btnSalirAdmin);

  btnSalirAdmin.addEventListener("click", () => {
    localStorage.removeItem("sesionActiva");
    location.reload();
  });
}

// -----------------------------
// 🔹 Seguir comprando (botón continuar)
// -----------------------------
btnContinuar.addEventListener("click", () => {
  window.location.href = "index.html";
});

// -----------------------------
// 🔹 Generar Factura PDF + WhatsApp
// -----------------------------
async function generarFactura(datosCliente) {
  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  overlay.style.display = "flex";

  try {
    const { nombre, telefono, direccion, correo } = datosCliente;

    if (!nombre || !telefono || !direccion) {
      alert("Por favor completa todos los datos obligatorios.");
      overlay.style.display = "none";
      return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const logo = new Image();
    logo.src = "./assets/img/minilogo.png";
    doc.addImage(logo, "PNG", 10, 5, 30, 30);

    doc.setFontSize(18);
    doc.text("Factura de Compra", 70, 20);
    doc.setFontSize(12);
    doc.text("Dali Cosmetics", 70, 28);

    const fecha = new Date().toLocaleDateString();
    doc.text(`Fecha: ${fecha}`, 10, 45);
    doc.line(10, 50, 200, 50);

    let y = 60;
    doc.text(`Cliente: ${nombre}`, 10, y);
    doc.text(`Tel: ${telefono}`, 10, y + 10);
    doc.text(`Dir: ${direccion}`, 10, y + 20);
    if (correo) doc.text(`Email: ${correo}`, 10, y + 30);

    y += 45;

    doc.text("Producto", 40, y);
    doc.text("Cant.", 110, y);
    doc.text("Precio", 135, y);
    doc.text("Subtotal", 170, y);
    y += 10;

    const toBase64 = (url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = reject;
        img.src = url;
      });

    let total = 0;

    for (let p of carrito) {
      const precioUnitario = getPrecioUnitario(p);
      const subtotal = precioUnitario * p.cantidad;
      total += subtotal;

      if (y > 260) {
        doc.addPage();
        y = 20;
        doc.text("Producto", 40, y);
        doc.text("Cant.", 110, y);
        doc.text("Precio", 135, y);
        doc.text("Subtotal", 170, y);
        y += 10;
      }

      try {
        const imgBase64 = await toBase64(p.imagen);
        doc.addImage(imgBase64, "PNG", 10, y - 5, 20, 20);
      } catch {}

      doc.text(p.nombre.substring(0, 25), 40, y);
      doc.text(String(p.cantidad), 115, y);
      doc.text(`$${precioUnitario.toLocaleString()}`, 135, y);
      doc.text(`$${subtotal.toLocaleString()}`, 170, y);
      y += 25;
    }

    // 🔹 Aplicar descuento si existe
    let descuentoAplicado = 0;
    const inputDescuento = document.getElementById("input-descuento");
    if (inputDescuento) {
      descuentoAplicado = parseFloat(inputDescuento.value) || 0;
      if (descuentoAplicado > 0) {
        const descuentoValor = total * (descuentoAplicado / 100);
        total -= descuentoValor;
        doc.setFontSize(12);
        doc.text(`Descuento aplicado: ${descuentoAplicado}%`, 135, y);
        y += 10;
      }
    }

    doc.setFontSize(14);
    doc.text(`TOTAL: $${total.toLocaleString()}`, 135, y + 10);

    doc.setFontSize(11);
    doc.text("¡Gracias por tu compra en Dali Cosmetics!", 10, y + 30);

    doc.save("factura.pdf");

    const numero = "573106948018";
    const mensajePlano = [
      "🛍️ *Pedido Dali Cosmetics*",
      "",
      `👤 *Cliente:* ${nombre}`,
      `📞 *Tel:* ${telefono}`,
      `🏠 *Dir:* ${direccion}`,
      correo ? `📧 *Email:* ${correo}` : null,
      "",
      "📎 Recuerda *adjuntar tu factura descargada* 🙏",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensajePlano)}`;
    window.open(url, "_blank");
  } catch (err) {
    console.error("Error generando factura:", err);
    alert("Ocurrió un error generando la factura.");
  } finally {
    overlay.style.display = "none";
  }
}

// -----------------------------
// 🔹 Inicialización principal
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
  iniciarSesion();
  configurarEventosCarrito();

  if (btnFactura) {
    btnFactura.addEventListener("click", () => {
      const datosCliente = {
        nombre: document.getElementById("input-nombre")?.value || "",
        telefono: document.getElementById("input-telefono")?.value || "",
        direccion: document.getElementById("input-direccion")?.value || "",
        correo: document.getElementById("input-correo")?.value || "",
      };
      generarFactura(datosCliente);
    });
  }
});
