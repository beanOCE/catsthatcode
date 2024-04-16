
window.onscroll = function () {stickyNav()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickyNav() {
    if (document.body.scrollTop > 410 || document.documentElement.scrollTop > 410) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}