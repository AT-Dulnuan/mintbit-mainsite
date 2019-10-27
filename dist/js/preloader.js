//Preloader
const preloader = document.querySelector(".preloader");
const page = document.getElementById("page");


window.addEventListener("load", removeLoader);

function removeLoader() {
    preloader.classList.add("preloader-finish");
    page.style.opacity = "1";
    page.style.transition = "opacity 1s ease-in";
}