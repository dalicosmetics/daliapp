// ================================
// 🔹 MANEJO DEL MODAL FACTURA
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-factura");
  const btnFactura = document.getElementById("factura");
  const spanCerrar = modal.querySelector(".cerrar");
  const formFactura = document.getElementById("form-factura");

  // Abrir modal al dar clic en "Generar factura"
  btnFactura.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Cerrar modal con la X
  spanCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal clickeando fuera
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Submit del formulario
  formFactura.addEventListener("submit", (e) => {
    e.preventDefault();

    const datosCliente = {
      nombre: document.getElementById("modalNombre").value.trim(),
      telefono: document.getElementById("modalTelefono").value.trim(),
      direccion: document.getElementById("modalDireccion").value.trim(),
      correo: document.getElementById("modalCorreo").value.trim(),
    };

    console.log("✅ Datos cliente:", datosCliente);

    // 🔹 Llamar a la función global de carrito.js
    if (typeof generarFactura === "function") {
      generarFactura(datosCliente);
    } else {
      console.error("⚠️ generarFactura no está definida.");
    }

    modal.style.display = "none";
  });
});