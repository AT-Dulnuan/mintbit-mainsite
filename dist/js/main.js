// Mobile Fullscreen Nav Toggle
const navBurger = document.querySelector(".navbar-burger");
const navMobile = document.querySelector(".menu-mobile");

navBurger.addEventListener("click", toggleMenu);

function toggleMenu() {
    navBurger.classList.toggle("is-active");
    navMobile.classList.toggle("open");
}

