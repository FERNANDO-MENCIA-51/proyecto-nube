const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

// Manejar cambio de formulario
btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});

const formSignIn = document.getElementById("form-sign-in");
formSignIn.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "principal.html"; 
});

// Manejar el evento de registro
const formSignUp = document.getElementById("form-sign-up");
formSignUp.addEventListener("submit", (event) => {
    event.preventDefault(); 
    window.location.href = "login.html"; 
});
