// Contador de vistas
const visitCountElement = document.getElementById('visitCounter'); 
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0; 
visitCount++;
localStorage.setItem('visitCount', visitCount);
visitCountElement.textContent = visitCount; 