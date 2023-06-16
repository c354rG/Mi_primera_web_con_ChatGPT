// Obtener referencia al formulario
const form = document.querySelector('form');

// Agregar evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos del formulario
  const nombre = document.querySelector('input[name="nombre"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const mensaje = document.querySelector('textarea[name="mensaje"]').value;

  // Validar los campos del formulario
  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor, complete todos los campos del formulario.');
  } else {
    alert('El formulario se ha enviado correctamente.');
    form.reset(); // Reiniciar el formulario después del envío
  }
});
