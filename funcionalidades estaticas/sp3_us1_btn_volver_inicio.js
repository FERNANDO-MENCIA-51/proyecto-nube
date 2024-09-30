// Botón de volver al inicio 
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostrar/Ocultar el botón según el desplazamiento
window.onscroll = function() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    scrollToTopBtn.style.display = (scrollTop > 200) ? 'block' : 'none';
};

// Función para desplazarse suavemente al inicio
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});