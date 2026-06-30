import { Analytics } from "@vercel/analytics/next"


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
document.addEventListener("click", (event) => {
    const target = event.target;
    if (!target?.classList.contains("hamburger")) {
        const navBar = document.getElementById("nav-bar");
        if (navBar && !navBar.classList.contains("hidden")) {
            navBar.classList.add("hidden");
        }
    }
});