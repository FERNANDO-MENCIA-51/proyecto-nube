// Funcionalidad de modo oscuro con animación de gatito
const toggleDarkModeBtn = document.createElement('button');
toggleDarkModeBtn.id = 'darkModeToggle';
toggleDarkModeBtn.innerHTML = 'Modo Oscuro <i class="fas fa-moon"></i>';
document.body.appendChild(toggleDarkModeBtn);

const catImg = document.createElement('img');
catImg.src = '/img/imagen2.jpg';
catImg.alt = 'Gatito animado';
catImg.id = 'catAnimation';
document.body.appendChild(catImg);

toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Animación del gatito
    catImg.classList.add('show-cat');
    setTimeout(() => {
        catImg.classList.remove('show-cat');
    }, 2000); // Dura 2 segundos

    // Cambiar el texto del botón y el ícono
    if (document.body.classList.contains('dark-mode')) {
        toggleDarkModeBtn.innerHTML = 'Modo Claro <i class="fas fa-sun"></i>';
    } else {
        toggleDarkModeBtn.innerHTML = 'Modo Oscuro <i class="fas fa-moon"></i>';
    }
});

// Guardar preferencia en localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleDarkModeBtn.innerHTML = 'Modo Claro <i class="fas fa-sun"></i>';
}

toggleDarkModeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});
