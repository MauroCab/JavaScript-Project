const navegador = document.querySelector('.main-header');
const boton = document.querySelector('.menu-button');


function menuButtonClick() {
    navegador.classList.toggle('mobile-menu');
}

function pingo(){
    console.log("sexoooo");
}

// Ejemplo de cómo asignar la función a un botón con id="miBoton"
document.getElementById(boton).addEventListener('click', pingo);