// Obtener los elementos del DOM
const textoEntrada = document.querySelector('.texto-entrada');
const textoSalida = document.querySelector('.texto-salida');
const botonCopiar = document.querySelector('.boton-copiar');
const imagenMuñeco = document.querySelector('.texto-salida');

// Función para encriptar el texto
function encriptar() {
    let textoSalida = document.querySelector('.texto-salida');
    textoSalida.value = ''; // Limpia el área de texto de salida
    let textoEntrada = document.querySelector('.texto-entrada').value;
    let textoEncriptado = textoEntrada
   
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        textoSalida.style.backgroundImage = 'none'; // Elimina la imagen de fondo

    
    mostrarResultado(textoEncriptado);
    MostrarBtnCopiar();
}

// Función para desencriptar el texto
function desencriptar() {
    let textoEntrada = document.querySelector('.texto-entrada').value;
    let textoDesencriptado = textoEntrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en el área de texto de salida
function mostrarResultado(texto) {
    const textoSalida = document.querySelector('.texto-salida');
    const mensajeTitulo = document.querySelector('.mensaje-titulo');
    const mensajeDescripcion = document.querySelector('.mensaje-descripcion');

    if (texto === '') {
        mensajeTitulo.textContent = 'Ningún mensaje fue encontrado';
        mensajeDescripcion.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
    } else {
        mensajeTitulo.textContent = '';
        mensajeDescripcion.textContent = '';
        textoSalida.value = texto;
        textoEntrada.value = '';
    }
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiar() {
    const textoSalida = document.querySelector('.texto-salida');
    
    // Copiar el texto al portapapeles usando la API del Portapapeles
    navigator.clipboard.writeText(textoSalida.value)
        .then(() => {
            mostrarNotificacion('Texto copiado al portapapeles');
            textoSalida.value='';
        })
        .catch(err => {
            console.error('Error al copiar el texto:', err);
            mostrarNotificacion('Error al copiar el texto');
        });
}

function MostrarBtnCopiar(){
    if (botonCopiar) {
        botonCopiar.style.display = 'block'; 
    }
}

// Función para mostrar una notificación al copiar
function mostrarNotificacion(mensaje) {
    const notificacion = document.querySelector('.notificacion');
    notificacion.textContent = mensaje;
    notificacion.style.display = 'block';
    setTimeout(() => {
        notificacion.style.display = 'none';
    }, 2000);
}
