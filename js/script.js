// Funcionalidad 1: Control del carrusel de imágenes
let currentIndex = 0; // Variable que almacena el índice actual del carrusel.
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length; 

// Función para mover el carrusel 
function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems; 
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}%)`;
}

// Funcionalidad 2: Reproducción automática del carrusel

function startAutoPlay() {
    return setInterval(() => moveCarousel(1), 2000); // segundos 
}

let autoPlay = startAutoPlay();

// Funcionalidad 3: Detener la reproducción automática cuando se pasa el ratón sobre el carrusel
document.querySelector('.carousel').addEventListener('mouseover', () => {
    clearInterval(autoPlay); // Detiene la reproducción automática.
});

document.querySelector('.carousel').addEventListener('mouseout', () => {
    autoPlay = startAutoPlay();
});

// Funcionalidad 4: Desvanecimiento de la imagen de bienvenida

// Se ejecuta cuando la página ha terminado de cargar.
window.addEventListener('load', () => {
    const overlay = document.getElementById('welcome-overlay'); 


    setTimeout(() => {
        overlay.style.opacity = 0; 
       
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1000); 
    }, 2000);
});
