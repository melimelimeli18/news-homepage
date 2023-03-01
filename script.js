document.addEventListener("DOMContentLoaded", function (event) {
    const navbar = document.querySelector(".navigation-bar ul");
    const hamburgerMenu = document.querySelector(".hamburger input");
    const content = document.querySelector(".content");
    const pages = document.querySelector(".pages");


hamburgerMenu.addEventListener("click", function() {
navbar.classList.toggle("show");
pages.classList.toggle("modal");


});
})

// if hamburger menu be clicked. logo and the whole content be ditimpa sama abu abu diatas dan seolah olah menjadi ketimpa

/* Step through :
- Nge konekin input dari humberger menu,
- ketika di pencet, maka otomatis humburger menu, dan list navigation z-indexnya naik ke atas
, dan content. 
- content akan ditambel ama div di atasnya , yang opacitynya lebih rendah

- > humberger (3) INDEX > list(2) INDEX> pages(2) INDEX, DISPLAY
*/ 
// apakah ketika di pencet, class modal muncul?
// cari tahu bagaimana cara toggle js work  https://www.w3schools.com/howto/howto_js_toggle_class.asp