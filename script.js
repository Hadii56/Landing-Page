document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector("nav");
    let menulinks = document.querySelector(".menu-links");

    function toggleMenu() {
        if (menulinks) {
            menulinks.classList.toggle("show-menu");
        } else {
            console.error('Menu links element not found');
        }
    }

    if (navbar) {
        window.onscroll = function () {
            if (window.scrollY > 0) {
                navbar.style.background = "#eefff9";
            } else {
                navbar.style.background = "transparent";
            }
        };
    } else {
        console.error('Navbar element not found');
    }

    let menuIcon = document.querySelector(".menu");
    if (menuIcon) {
        menuIcon.onclick = toggleMenu;
    } else {
        console.error('Menu icon element not found');
    }
});
