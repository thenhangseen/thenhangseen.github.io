
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