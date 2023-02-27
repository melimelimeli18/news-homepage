document.addEventListener("DOMContentLoaded", function (event) {
    const navbar = document.querySelector(".navigation-bar ul");
const hamburgerMenu = document.querySelector(".hamburger input");

hamburgerMenu.addEventListener("click", function() {
navbar.classList.toggle("show");
});
})
