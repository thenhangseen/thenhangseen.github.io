
const toggleButton = document.getElementById("menu");
const menu = document.getElementById("navigationcontent");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // × (cross)
    } else {
        toggleButton.innerHTML = "&#9776;"; // ☰ (hamburger)
    }
});

const submenus = document.querySelectorAll(".has-submenu");

submenus.forEach((item) => {

    const link = item.querySelector(".menu-item a");
    const submenu = item.querySelector(".submenu");

    link.addEventListener("click", (e) => {

        if (window.innerWidth <= 850) {
            e.preventDefault();

            submenu.classList.toggle("active");
        }

    });

});