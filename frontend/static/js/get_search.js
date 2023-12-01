function redirectToIndex() {
    window.location.href = "index.html";
}
function buscarContacto() {
    const email = document.getElementById('email-buscar').value;
    fetch(`http://localhost:8000/contactos/${email}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(contact => {
            alert(`Contacto encontrado: ${contact.email}, ${contact.nombre}, ${contact.telefono}`);
            getAllContacts();
        })
        .catch(error => console.error('Error:', error));
}
const buscarContactForm = document.getElementById('buscar-contact-form');
buscarContactForm.addEventListener('submit', event => {
    event.preventDefault();
    buscarContacto();
});