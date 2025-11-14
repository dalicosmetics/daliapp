/***************************************
 *  KIT CALCULATOR + FACTURA PROFESIONAL
 ***************************************/
import { productosSeed } from "./seed.js";

const { jsPDF } = window.jspdf;
const products = productosSeed;

window.kitTemporal = [];
window.descuentoKit = 0;

/* ============================================================
   CALCULAR KIT
============================================================ */
export function calculateKit() {
  const budget = Number(document.getElementById("budgetInput").value);
  const resultsDiv = document.getElementById("kitResults");
  const MIN_PRESUPUESTO = 10000;

  if (!budget || budget < MIN_PRESUPUESTO) {
    resultsDiv.innerHTML = `<div class="alert alert-danger">Ingresa un presupuesto válido de al menos $${MIN_PRESUPUESTO.toLocaleString()}.</div>`;
    return;
  }

  const activos = products.filter((p) => p.precioMayor && p.estado !== "agotado");
  if (activos.length === 0) {
    resultsDiv.innerHTML = `<div class="alert alert-warning">No hay productos disponibles para tu presupuesto.</div>`;
    return;
  }

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
  const maxIntentos = 100;

  while (restante >= MIN_PRESUPUESTO * 0.01 && intentos < maxIntentos) {
    intentos++;
    const catKeys = Object.keys(categorias).filter((k) => categorias[k].length > 0);
    if (catKeys.length === 0) break;

    const categoria = catKeys[Math.floor(Math.random() * catKeys.length)];
    const productosCat = shuffle(categorias[categoria]);
    const producto = productosCat[0];

    const maxUnidadesPresupuesto = Math.floor(restante / producto.precioMayor);
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
  const resultsDiv = document.getElementById("kitResults");

  if (!window.kitTemporal || window.kitTemporal.length === 0) {
    resultsDiv.innerHTML = `<p class="text-center">Tu kit está vacío 🛒</p>`;
    return;
  }

  let total = 0;
  let html = `<h3 class="fw-bold mb-3">Tu kit sugerido</h3><div class="row g-3">`;

  window.kitTemporal.forEach((p) => {
    total += p.precio * p.cantidad;
    html += `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
          <div class="card-body">
            <h5 class="card-title">${p.nombre}</h5>
            <p>Cantidad: ${p.cantidad}</p>
            <p>Precio unitario: $${p.precio.toLocaleString()}</p>
            <p>Subtotal: $${(p.precio * p.cantidad).toLocaleString()}</p>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>
    <div class="mt-4 fw-bold">Total a pagar: $${total.toLocaleString()}</div>
    <div class="text-center mt-3">
      <button id="factura-kit" class="btn btn-success">Facturar Kit</button>
    </div>`;

  resultsDiv.innerHTML = html;

  // Abre el modal
  document.getElementById("factura-kit")?.addEventListener("click", abrirModalCliente);
}

/* ============================================================
   ABRIR MODAL PARA PEDIR DATOS DEL CLIENTE
============================================================ */
function abrirModalCliente() {
    // Usamos el id único del modal
    const envioModal = new bootstrap.Modal(document.getElementById("envioModalKit"));
    envioModal.show();
  
    // Cambiamos el listener al botón con id único
    document.getElementById("confirmarEnvioBtnKit").onclick = () => {
      const nombre = document.getElementById("nombreClienteKit").value.trim();
      const telefono = document.getElementById("telefonoClienteKit").value.trim();
      const celular = document.getElementById("celularClienteKit").value.trim();
      const direccion = document.getElementById("direccionClienteKit").value.trim();
  
      if (!nombre || !telefono || !celular || !direccion) {
        alert("Por favor completa todos los campos.");
        return;
      }
  
      envioModal.hide();
  
      generarFacturaBonita({
        nombre,
        telefono,
        celular,
        direccion,
      });
    };
  }
  

/* ============================================================
   FACTURA PROFESIONAL
============================================================ */
async function generarFacturaBonita(cliente) {
    const doc = new jsPDF({ unit: "pt", format: "letter" });
  
    // Mini logo de Dali Cosmetics
    const logoURL = "./assets/img/minilogo.png"; // ruta de tu mini logo
    const logoDataURL = await getImageDataURL(logoURL);
  
    doc.addImage(logoDataURL, "PNG", 40, 40, 50, 50); // x, y, width, height
  
    // Encabezado
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("FACTURA DE KIT EMPRENDEDOR", 110, 60); // ajustado para no tapar el logo
  
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text("Dali Cosmetics - Generada automáticamente", 110, 80);
  
    // Datos del cliente
    doc.setFont("helvetica", "bold");
    doc.text("Datos del Cliente:", 40, 120);
    doc.setFont("helvetica", "normal");
    doc.text(`Nombre: ${cliente.nombre}`, 40, 135);
    doc.text(`Teléfono: ${cliente.telefono}`, 40, 150);
    doc.text(`Celular: ${cliente.celular}`, 40, 165);
    doc.text(`Dirección: ${cliente.direccion}`, 40, 180);
  
    doc.setDrawColor(0);
    doc.line(40, 200, 550, 200);
  
    // Tabla de productos con miniaturas
    let y = 230;
    doc.setFont("helvetica", "bold");
    doc.text("Producto", 80, y); // espacio para miniatura
    doc.text("Cant.", 250, y);
    doc.text("Precio", 330, y);
    doc.text("Subtotal", 430, y);
  
    doc.setFont("helvetica", "normal");
    y += 20;
  
    let total = 0;
  
    for (const p of window.kitTemporal) {
      total += p.subtotal;
  
      // Miniatura del producto
      const imgData = await getImageDataURL(p.imagen);
      doc.addImage(imgData, "JPEG", 40, y - 12, 30, 30); // x, y, width, height
  
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
  
    // Total
    doc.setFont("helvetica", "bold");
    doc.text(`TOTAL: $${total.toLocaleString()}`, 40, y + 20);
  
    // Mensaje motivador
    doc.setFont("helvetica", "italic");
    doc.setFontSize(12);
    doc.text(
      "Emprender es creer en ti mismo. ¡Cada paso te acerca al éxito!",
      40,
      y + 50
    );
  
  

  // Descargar PDF
  doc.save("Factura_Kit.pdf");

  // WhatsApp
  const mensaje = `
Hola! Adjunto la factura de mi kit emprendedor.

Cliente: ${cliente.nombre}
Tel: ${cliente.telefono}
Cel: ${cliente.celular}
Dirección: ${cliente.direccion}

Estoy listo para crecer con mi negocio 💪✨
`;

  const whatsappURL = `https://wa.me/573106948018?text=${encodeURIComponent(
    mensaje
  )}`;
  window.open(whatsappURL, "_blank");
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
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, 50, 50);
      resolve(canvas.toDataURL("image/jpeg"));
    };
    img.onerror = reject;
    img.src = url;
  });
}

window.calculateKit = calculateKit;
