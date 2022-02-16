const menu = document.querySelector("#menu-toggle");
const navMenu = document.querySelector(".nav-bar");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    navMenu.classList.toggle("active");
});

