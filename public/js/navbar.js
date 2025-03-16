// JavaScript para alternar entre os ícones e o menu
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuToggle.addEventListener("click", () => {
  // Alternar visibilidade do menu móvel
  mobileMenu.classList.toggle("hidden");

  // Alternar os ícones
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
