const fotos = [
    "./images/seccion/foto1.jpg",
    "./images/seccion/foto2.jpg",
    "./images/seccion/foto3.jpg"
];

let currentIndexUno = 0;

function changeBackground() {
    currentIndexUno++;
    if (currentIndexUno >= fotos.length) {
        currentIndexUno = 0;
    }
    const seccion = document.querySelector('.seccionFotos');
    seccion.style.backgroundImage = `url(${fotos[currentIndexUno]})`;
    seccion.style.backgroundPosition = 'center';
    seccion.style.backgroundSize = 'cover';
}

setInterval(changeBackground, 2000);