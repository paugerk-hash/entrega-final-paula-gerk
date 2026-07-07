
const campoNombre = document.getElementById('tuNombre');
const campoCorreo = document.getElementById('tuCorreo');
const campoAsunto = document.getElementById('asunto');
const campoMensaje = document.getElementById('tuMensaje');
const formulario = document.getElementById('formularioContacto');

document.addEventListener('DOMContentLoaded', () => {
    campoNombre.value = localStorage.getItem('contacto_nombre' || '');
    campoCorreo.value = localStorage.getItem('contacto_correo' || '');
    campoAsunto.value = sessionStorage.getItem('contacto_asunto' || '');
    campoMensaje.value = sessionStorage.getItem('contacto_mensaje' || '');

})

campoNombre.addEventListener('input', () => {
    localStorage.setItem('contacto_nombre', campoNombre.value);
});

campoCorreo.addEventListener('input', () => {
    localStorage.setItem('contacto_correo', campoCorreo.value);
});

campoAsunto.addEventListener('input', () => {
    sessionStorage.setItem('contacto_asunto', campoAsunto.value);
});

campoMensaje.addEventListener('input', () => {
    sessionStorage.setItem('contacto_mensaje', campoMensaje.value);
});

formulario.addEventListener('submit', () => {
    localStorage.removeItem('contacto_nombre');
    localStorage.removeItem('contacto_correo');
    sessionStorage.removeItem('contacto_asunto');
    sessionStorage.removeItem('contacto_mensaje');
});