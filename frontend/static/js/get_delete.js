function redirectToIndex() {
  window.location.href = "index.html";
}
document.getElementById('delete-contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  deleteContact();
});

function deleteContact() {
  const email = document.getElementById('email-delete').value;
  fetch(`http://localhost:8000/contactos/${email}`, {
      method: 'DELETE'
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al eliminar el contacto');
      }
      return response.json();
  })
  .then(() => {
      alert('Contacto eliminado exitosamente');
  })
  .catch(error => {
      console.error('Error:', error);
      alert('No se pudo eliminar el contacto');
  });
}

function getContacts() {
  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:8000/contactos');
  request.onload = function () {
      if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          createTableRows(data);
      } else {
          console.error("Error al obtener los contactos (GET): " +  request.status);
      }
  };
  request.onerror = function () {
      console.error("Error de conexión (GET)");
  };
  request.send();
}

// Función para crear las filas en la tabla
function createTableRows(data) {
  var tableBody = document.getElementById('contact-list');
  data.forEach(function (contacto) {
      var row = document.createElement('tr');
      row.innerHTML = '<td>' + contacto.email + '</td><td>' + contacto.nombre + '</td><td>' + contacto.telefono + '</td>';
      tableBody.appendChild(row);
  });
}

// Llama a la función getContacts cuando la página se carga
window.onload = getContacts;
  