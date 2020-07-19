// Navbar Toggle Menu

/* This hamburger toggle menu is modified from in-class js sample code */

// Declare our element variables
const navBarToggle = document.querySelector('.toggle-btn');
const menu = document.querySelector('nav ul');

// function statement
function menuToggle() {
console.log('Menu is toggled');

// This line of code runs only when `button` is clicked. The 'visible' class will be removed/added (or toggled) each time this event handler is invoked
menu.classList.toggle('visible');
}

// The code in the `eventHandler` function (defined above) will be run (or "invoked") each time `button` is clicked
navBarToggle.addEventListener('click', menuToggle);

