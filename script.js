document.addEventListener("DOMContentLoaded", function (event) {
    const humbergerMenu = document.querySelector(".hamburger-menu");
    const navbar = document.querySelector(".navigation-bar");

    humbergerMenu.addEventListener("click", function(){
        navbar.classList.toggle("show"); //slide responsive
        navbar.classList.toggle("cross")
        
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 767) {
        navbar.classList.remove('show');
        }
    });
})
