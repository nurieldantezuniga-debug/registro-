const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
}    event.preventDefault(); // Evita el envío del formulario
const nombreInput = document.getElementById('name');
const edadInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('phone');

//Element
const errorName = document.getElementById('errorname');
const errorAge = document.getElementById('errorage');
const errorEmail = document.getElementById('erroremail');
const errorPhone = document.getElementById('errorphone');
const errorMessage = document.getElementById('errormessage');

//TECNICA DEL CENTINELA
let isValid = true;

const nombre = nombreInput.value.trim();
const edad = edadInput.value.trim();
const email = emailInput.value.trim();
const telefono = telefonoInput.value.trim();

if (nombre === '' || edad === '' || email === '' || telefono === '') {
    errorMessage.textContent = 'Todos los campos son obligatorios.';
    return;
}