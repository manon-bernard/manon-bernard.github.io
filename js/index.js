const mobileMenuToggle = document.querySelector('.mobile-nav__toggle');
const nav = document.querySelector('nav');
const mobileMenuOpen = document.querySelector('.menu__icon--open');
const mobileMenuClose = document.querySelector('.menu__icon--close');

mobileMenuToggle.addEventListener('click', handleMenuToggle);

function handleMenuToggle(event){
    console.log(event);
    nav.classList.toggle('visually-hidden');
    mobileMenuOpen.classList.toggle('visually-hidden');
    mobileMenuClose.classList.toggle('visually-hidden');
};

const navLinks = document.querySelectorAll('.nav__link');

for (let navLink of navLinks) {
    navLink.addEventListener('click', handleMenuLinks)
};

function handleMenuLinks(){
    nav.classList.toggle('visually-hidden');
    mobileMenuOpen.classList.toggle('visually-hidden');
    mobileMenuClose.classList.toggle('visually-hidden');
};