document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn"); // tombol hamburger
  const mobileMenu = document.getElementById("mobileMenu");

  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("-translate-x-full");
  });
});