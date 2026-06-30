document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        hamburger.addEventListener("click", toggleNavBar);
    }

    const closeButton = document.querySelector(".close-button");
    if (closeButton) {
        closeButton.addEventListener("click", toggleNavBar);
    }
});

function toggleNavBar() {
    const navBar = document.getElementById("nav-bar");
    if (navBar) {
        navBar.classList.toggle("hidden");
    }
}