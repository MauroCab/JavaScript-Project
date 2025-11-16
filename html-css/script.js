const navegador = document.querySelector('.main-header');
const boton = document.querySelector('.menu-button');


function menuButtonClick() {
    navegador.classList.toggle('mobile-menu');

}


// Ejemplo de cómo asignar la función a un botón con id="miBoton"
boton.addEventListener('click', menuButtonClick);