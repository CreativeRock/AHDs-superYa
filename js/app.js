const hamburguesa = document.querySelector(".hamburguesa");
const navMenu = document.querySelector("nav ul");

hamburguesa.addEventListener("click", () => {
    navMenu.classList.toggle("verMenu");
});