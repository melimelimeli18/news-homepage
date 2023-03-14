document.addEventListener("DOMContentLoaded", function (event) {
    const navbar = document.querySelector(".navigation-bar ul");
    const hamburgerMenu = document.getElementById("nav-check");
    const body = document.body;
    const pages = document.querySelector(".pages");

function navbarChecked(){
  const showNavbar = ["h-screen","w-0","w-[65%]","translate-x-full","translate-x-0","opacity-0", "opacity-100"];
  for (let i = 0; i < showNavbar.length; i++) {
      navbar.classList.toggle(showNavbar[i]);
    }
  const pagesStyle = ["block", "bg-black", "absolute", "inset-0", "opacity-40", "transition-all", "duration-300", "ease-out"];
  for (let i = 0; i < pagesStyle.length; i++) {
      pages.classList.toggle(pagesStyle[i]);
    }
  }

hamburgerMenu.addEventListener("change", function(){
  if (this.checked) {
      navbarChecked();
      body.style.overflowY = "hidden";
      body.style.overflowX = "hidden";
    } else {
      navbarChecked();
      body.style.overflowY = "scroll";
      body.style.overflowX = "hidden";
    }  

})
})



