function redirectToIndex() {
    window.location.href = "index.html";
}
document.getElementById('create-contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    createContact();
});

function createContact() {
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:8000/contactos', true);
    request.setRequestHeader('Content-Type', 'application/json');
    
    var nuevoContacto = {
        email: document.getElementById('email').value,
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value
    };

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // La solicitud fue exitosa
            alert('Contacto creado exitosamente');
        } else {
            // Se produjo un error en la solicitud
            alert('No se pudo crear el contacto');
        }
    };

    request.onerror = function() {
        // Hubo un error de conexión
        alert('Error de conexión. No se pudo crear el contacto');
    };

    request.send(JSON.stringify(nuevoContacto));
}