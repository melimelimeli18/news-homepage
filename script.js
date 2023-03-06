document.addEventListener("DOMContentLoaded", function (event) {
    const navbar = document.querySelector(".navigation-bar ul");
    const hamburgerMenu = document.querySelector(".hamburger input");
    const body = document.body;
    const pages = document.querySelector(".pages");


hamburgerMenu.addEventListener("click", function() {
    navbar.classList.toggle("show");
    pages.classList.toggle("modal");
})
if (navbar.classList.contains("show")) {
    body.style.overflowY = "hidden";
} else {
    body.style.overflowY = "scroll";
}

})

