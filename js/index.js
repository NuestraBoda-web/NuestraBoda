const images = [
    "./images/fondo-panel2.jpg",
    "./images/fondo-panel3.jpg",
    "./images/fondo-panel4.jpg",
    "./images/fondo-panel5.jpg",

];

let currentIndex = 0;

function changeBackground() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const panel2Element = document.querySelector('.panel2');
    panel2Element.style.backgroundImage = `url(${images[currentIndex]})`;
}

setInterval(changeBackground, 2000);