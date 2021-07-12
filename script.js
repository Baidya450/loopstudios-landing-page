const menu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', (e) => {
    menu.classList.toggle("show");
    hamburger.classList.toggle("close")
});