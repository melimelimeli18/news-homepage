document.addEventListener("DOMContentLoaded", function (event) {
    const navbar = document.querySelector(".navigation-bar ul");
    const hamburgerMenu = document.querySelector(".hamburger input");
    const body = document.body;
    const pages = document.querySelector(".pages");

// hamburgerMenu.addEventListener("click", function() {
//     navbar.classList.toggle("show");
//     pages.classList.toggle("modal");
// })

// The toggle() method of the classList property adds the class if it doesn't exist, and removes it if it does exist. Therefore, if you toggle a class that already exists on an element, it will remove the class, and if you toggle a class that doesn't exist on an element, it will add the class.

hamburgerMenu.addEventListener("click", function() {
    const showNavbar = ["opacity-0","opacity-100","translate-x-full","translate-x-0"];
    for (let i = 0; i < showNavbar.length; i++) {
        navbar.classList.toggle(showNavbar[i]);
      }

    const pagesStyle = ["block", "bg-black", "absolute", "inset-0", "opacity-40", "transition-all", "duration-300", "ease-out"];
    for (let i = 0; i < pagesStyle.length; i++) {
        pages.classList.toggle(pagesStyle[i]);
      }
})

if (navbar.classList.contains("visible")) {
    body.style.overflowY = "hidden";
} else {
    body.style.overflowY = "scroll";
}

})

