// facturakitmodal.js
import jsPDF from "https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.es.min.js";

/**
 * Inicializa el modal de factura para la calculadora
 * @param {Object} config
 * @param {string} config.modalId - ID del modal
 * @param {string} config.formId - ID del formulario
 * @param {string} config.btnId - ID del botón de abrir modal
 * @param {string} config.nombreId - ID input nombre
 * @param {string} config.telefonoId - ID input teléfono
 * @param {string} config.direccionId - ID input dirección
 * @param {string} config.correoId - ID input correo
 */
export function initFacturaModal({ modalId, formId, btnId, nombreId, telefonoId, direccionId, correoId }) {
  const modal = document.getElementById(modalId);
  const btnFactura = document.getElementById(btnId);
  const spanCerrar = modal.querySelector(".cerrar");
  const form = document.getElementById(formId);

  let productosCalculados = [];

  function setProductosCalculados(productos) {
    productosCalculados = productos;
  }

  // Abrir modal
  btnFactura.addEventListener("click", () => {
    if (!productosCalculados || productosCalculados.length === 0) {
      alert("Primero genera tu kit de productos");
      return;
    }
    modal.style.display = "block";
  });

  // Cerrar modal
  spanCerrar.addEventListener("click", () => modal.style.display = "none");
  window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

  // Submit formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const datosCliente = {
      nombre: document.getElementById(nombreId).value.trim(),
      telefono: document.getElementById(telefonoId).value.trim(),
      direccion: document.getElementById(direccionId).value.trim(),
      correo: document.getElementById(correoId).value.trim(),
    };

    generarFactura(datosCliente, productosCalculados);
    modal.style.display = "none";
  });

  // Función global para generar PDF y WhatsApp
  function generarFactura(datosCliente, productos) {
    // 1️⃣ Crear PDF
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Factura Kit Emprendedor", 20, 20);
    doc.setFontSize(12);
    doc.text(`Nombre: ${datosCliente.nombre}`, 20, 30);
    doc.text(`Teléfono: ${datosCliente.telefono}`, 20, 38);
    doc.text(`Dirección: ${datosCliente.direccion}`, 20, 46);
    doc.text(`Correo: ${datosCliente.correo}`, 20, 54);

    let y = 70;
    doc.text("Productos:", 20, y);
    productos.forEach((p, i) => {
      y += 8;
      doc.text(`${i + 1}. ${p.nombre} x ${p.cantidad} = ${p.total.toLocaleString()} COP`, 20, y);
    });

    const pdfBlob = doc.output("bloburl");
    window.open(pdfBlob);

    // 2️⃣ WhatsApp
    const textoWhats = `
Hola! Quisiera hacer un pedido:
Nombre: ${datosCliente.nombre}
Teléfono: ${datosCliente.telefono}
Dirección: ${datosCliente.direccion}
Productos:
${productos.map(p => `- ${p.nombre} x ${p.cantidad} = ${p.total.toLocaleString()} COP`).join("\n")}
`.trim();

    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(textoWhats)}`;
    window.open(whatsappUrl, "_blank");
  }

  // Hacemos disponible globalmente
  window.generarFactura = generarFactura;

  return { setProductosCalculados };
}
