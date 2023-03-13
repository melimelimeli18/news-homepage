document.addEventListener("DOMContentLoaded", function (event) {
    const navbar = document.querySelector(".navigation-bar ul");
    const hamburgerMenu = document.querySelector(".hamburger input");
    const body = document.body;
    const pages = document.querySelector(".pages");

// hamburgerMenu.addEventListener("click", function() {
    // const showNavbar = ["h-screen","w-[65%]","translate-x-full","translate-x-0","opacity-0", "opacity-100"];
    // for (let i = 0; i < showNavbar.length; i++) {
    //     navbar.classList.toggle(showNavbar[i]);
    //   }
    // //   w-[65%] h-screen
    // const pagesStyle = ["block", "bg-black", "absolute", "inset-0", "opacity-40", "transition-all", "duration-300", "ease-out"];
    // for (let i = 0; i < pagesStyle.length; i++) {
    //     pages.classList.toggle(pagesStyle[i]);
    //   }



// hamburgerMenu.addEventListener("change", function(){
//     if (this.checked) {
//         const showNavbar = ["h-screen","w-[65%]","translate-x-0","opacity-100","opacity-0"];
//         for (let i = 0; i < showNavbar.length; i++) {
//             navbar.classList.toggle(showNavbar[i]);
//         }

//         const pagesStyle = ["block", "bg-black", "absolute", "inset-0", "opacity-40", "transition-all", "duration-300", "ease-out"];
//         for (let i = 0; i < pagesStyle.length; i++) {
//             pages.classList.toggle(pagesStyle[i]);
//         }
//     }else{
//         const hideNavbar = ["h-0", "w-0","translate-x-full", "opacity-0"];
//         for (let i = 0; i < hideNavbar.length; i++) {
//             navbar.classList.toggle(hideNavbar[i]);
//         }
//         const pagesStyleModal = ["hidden", "bg-black", "absolute", "inset-0", "opacity-40", "transition-all", "duration-300", "ease-out"];
//         for (let i = 0; i < pagesStyleModal.length; i++) {
//             pages.classList.toggle(pagesStyleModal[i]);
//         }
//     }})

function navbarChecked(){
    const showNavbar = ["h-screen","w-[65%]","h-0","w-0","translate-x-full","translate-x-0","opacity-0", "opacity-100"];
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
        body.style.overflowX = "scroll";
      }  
})


})



// hamburgerMenu.addEventListener("click", function() {
//     navbar.classList.toggle("show");
//     pages.classList.toggle("modal");
// })
// The toggle() method of the classList property adds the class if it doesn't exist, and removes it if it does exist. Therefore, if you toggle a class that already exists on an element, it will remove the class, and if you toggle a class that doesn't exist on an element, it will add the class.



