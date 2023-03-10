document.addEventListener("DOMContentLoaded", function (event) {
    const navbar = document.querySelector(".navigation-bar ul");
    const hamburgerMenu = document.querySelector(".hamburger input");
    const body = document.body;
    const pages = document.querySelector(".pages");


// hamburgerMenu.addEventListener("click", function() {
//     navbar.classList.toggle("show");
//     pages.classList.toggle("modal");
// })

// navbar is a ul
// REMOVE


// hamburgerMenu.addEventListener("click", function() {
//     navbar.classList.toggle("invisible");
//     navbar.classList.toggle("translate-x-full");
//     pages.classList.toggle("modal");
// })

// The toggle() method of the classList property adds the class if it doesn't exist, and removes it if it does exist. Therefore, if you toggle a class that already exists on an element, it will remove the class, and if you toggle a class that doesn't exist on an element, it will add the class.

hamburgerMenu.addEventListener("click", function() {
    navbar.classList.toggle("invisible")
    navbar.classList.toggle("visible");

    navbar.classList.toggle("translate-x-full");
    navbar.classList.toggle("translate-x-0");
    pages.classList.toggle("modal");
})


if (navbar.classList.contains("show")) {
    body.style.overflowY = "hidden";
} else {
    body.style.overflowY = "scroll";
}

})

