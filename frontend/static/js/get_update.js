function updateContact() {
    var emailActual = document.getElementById('email-actual').value;
    var emailNuevo = document.getElementById('email-update').value;
    var nombre = document.getElementById('nombre-update').value;
    var telefono = document.getElementById('telefono-update').value;
  
    var request = new XMLHttpRequest();
    request.open('PUT', 'http://localhost:8000/contactos/' + emailActual);
    request.setRequestHeader('Content-Type', 'application/json');
    
    var contactoActualizado = {
        email: emailNuevo,
        nombre: nombre,
        telefono: telefono
    };
  
    request.send(JSON.stringify(contactoActualizado));
  
  request.onload = function () {
      if (request.status === 200) {
          const response = request.responseText;
          const data = JSON.parse(response);
          console.log("Respuesta (PUT):", data);
          alert("El contacto ha sido actualizado exitosamente.");
      } else {
          console.error("Error al actualizar el contacto (PUT): " +  request.status);
          alert("Hubo un error al actualizar el contacto.");
      }
  };

  request.onerror = function () {
      console.error("Error de conexión (PUT)");
      alert("Hubo un error de conexión.");
  };
}
function redirectToIndex() {
  window.location.href = "index.html";
}