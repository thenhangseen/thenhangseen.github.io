
const toggleButton = document.getElementById("menu");
const mobilenavigation = document.getElementById("mobile-navigationcontent");

toggleButton.addEventListener("click", () => {
    mobilenavigation.classList.toggle("active");
    // Change icon
    if (mobilenavigation.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // × (cross)
    } else {
        toggleButton.innerHTML = "&#9776;"; // ☰ (hamburger)
    }
});

const submenus = document.querySelectorAll("#mobile-menu .has-submenu");

submenus.forEach((item) => {

    const arrow = item.querySelector(".submenu-arrow");
    const submenu = item.querySelector(".submenu");

    arrow.addEventListener("click", () => {


        submenu.classList.toggle("active");


    });

});