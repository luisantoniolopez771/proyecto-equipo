// Sistema de Inscripción Escolar — lógica del lado del cliente
//
// TODO (rama feature-validacion): completar la validación del formulario
// de contacto antes de que el "envío" se considere exitoso.

document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validar que ningún campo esté vacío
  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Error: Ningún campo debe estar vacío.");
    return;
  }

  // Validar que el correo tenga @ y .
  if (!correo.includes("@") || !correo.includes(".")) {
    alert("Error: Por favor ingresa un correo válido con '@' y '.'.");
    return;
  }

  // Mensaje de éxito si todo está bien
  alert("¡Mensaje enviado con éxito!");
});