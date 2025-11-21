// Mobile Menu Toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};

// Typing Effect
var typed = new Typed('.typing', {
    strings: ["Software Engineer", "Web Developer", "ML Enthusiast"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true
});
