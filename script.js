// ===== 1. MODO OSCURO / CLARO =====
function modoOscuro() {
  document.body.classList.toggle("dark");
}

// ===== 2. BOTÓN "DESCUBRÍ MÁS" (cambia un texto) =====
function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "Los Pogues están listos para una nueva aventura...";
}

// ===== 3. MOSTRAR / OCULTAR INFORMACIÓN =====
function mostrarInfo() {
  const info = document.getElementById("infoExtra");
  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
}

// ===== CONECTAR LOS BOTONES =====
document.getElementById("btnTema").addEventListener("click", modoOscuro);
document.getElementById("btnDescubri").addEventListener("click", mostrarMensaje);
document.getElementById("btnInfo").addEventListener("click", mostrarInfo);
