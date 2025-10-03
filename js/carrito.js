// ================================
// carrito.js
// ================================

const listaCarrito = document.getElementById("lista-carrito");
const totalElement = document.getElementById("total");
const btnContinuar = document.getElementById("continuar");
const btnFactura = document.getElementById("factura");
const overlay = document.getElementById("overlay");

// -----------------------------
// 🔹 Funciones del carrito
// -----------------------------
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// 🔹 Obtener precio aplicando regla detal/mayor
function getPrecioUnitario(p) {
  if (p.precioDetal === undefined || p.precioMayor === undefined) {
    return p.precio;
  }
  return p.cantidad >= 2 ? p.precioMayor : p.precioDetal;
}

function renderCarrito() {
  const carrito = obtenerCarrito();
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
    totalElement.textContent = "";
    return;
  }

  let total = 0;

  carrito.forEach(p => {
    const precioUnitario = getPrecioUnitario(p);
    const subtotal = precioUnitario * p.cantidad;
    total += subtotal;

    const item = document.createElement("div");
    item.classList.add("item-carrito");

    // 🔹 Conservamos estructura anterior con img, detalle y controles
    item.innerHTML = `
      <div class="img-container">
        <img src="${p.imagen}" alt="${p.nombre}" class="miniatura">
      </div>
      <div class="detalle">
        <h3>${p.nombre}</h3>
        <p>Precio: $${precioUnitario.toLocaleString()}</p>
        <p>Subtotal: $${subtotal.toLocaleString()}</p>
      </div>
      <div class="controles">
        <button class="menos" data-id="${p.id}">-</button>
        <span>${p.cantidad}</span>
        <button class="mas" data-id="${p.id}">+</button>
        <button class="eliminar" data-id="${p.id}">❌</button>
      </div>
    `;

    listaCarrito.appendChild(item);
  });

  totalElement.textContent = `Total a pagar: $${total.toLocaleString()}`;
}

// -----------------------------
// 🔹 Eventos
// -----------------------------
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

// Seguir comprando
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

  // Mostrar overlay
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

    // ================================
    // 🔹 ENCABEZADO
    // ================================
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

    // ================================
    // 🔹 DATOS DEL CLIENTE
    // ================================
    doc.setFontSize(12);
    let y = 60;
    doc.text(`Cliente: ${nombre}`, 10, y);
    doc.text(`Tel: ${telefono}`, 10, y + 10);
    doc.text(`Dir: ${direccion}`, 10, y + 20);
    if (correo) doc.text(`Email: ${correo}`, 10, y + 30);

    y += 45;

    // ================================
    // 🔹 TABLA DE PRODUCTOS
    // ================================
    doc.text("Producto", 40, y);
    doc.text("Cant.", 110, y);
    doc.text("Precio", 135, y);
    doc.text("Subtotal", 170, y);

    y += 10;

    let total = 0;

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

    for (let p of carrito) {
      const precioUnitario = getPrecioUnitario(p);
      const subtotal = precioUnitario * p.cantidad;
      total += subtotal;

      if (y > 260) {
        doc.addPage();
        y = 20;
        doc.setFontSize(12);
        doc.text("Producto", 40, y);
        doc.text("Cant.", 110, y);
        doc.text("Precio", 135, y);
        doc.text("Subtotal", 170, y);
        y += 10;
      }

      try {
        const imgBase64 = await toBase64(p.imagen);
        doc.addImage(imgBase64, "PNG", 10, y - 5, 20, 20);
      } catch (err) {
        console.warn("No se pudo cargar la imagen de:", p.nombre);
      }

      doc.text(p.nombre.substring(0, 25), 40, y);
      doc.text(String(p.cantidad), 115, y);
      doc.text(`$${precioUnitario.toLocaleString()}`, 135, y);
      doc.text(`$${subtotal.toLocaleString()}`, 170, y);

      y += 25;
    }

    // ================================
    // 🔹 TOTAL
    // ================================
    doc.setFontSize(14);
    doc.text(`TOTAL: $${total.toLocaleString()}`, 135, y + 10);

    doc.setFontSize(11);
    doc.text("¡Gracias por tu compra en Dali Cosmetics!", 10, y + 30);
    doc.text(
      "Recuerda enviar esta factura a nuestro Whatsapp para Finalizar el proceso de compra",
      10,
      y + 40
    );

    // Guardar PDF
    doc.save("factura.pdf");

    // ================================
    // 🔹 ENVIAR A WHATSAPP
    // ================================
    const numero = "573106948018"; // tu número de WhatsApp

    const mensajePlano = [
      "🛍️ *Pedido Dali Cosmetics*",
      "",
      `👤 *Cliente:* ${nombre}`,
      `📞 *Tel:* ${telefono}`,
      `🏠 *Dir:* ${direccion}`,
      correo ? `📧 *Email:* ${correo}` : null,
      "",
      "📎 Por favor recuerda *adjuntar tu factura recién descargada* 🙏",
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
// 🔹 Inicialización
// -----------------------------
renderCarrito();
