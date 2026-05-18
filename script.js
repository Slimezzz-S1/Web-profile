"use strict";
/*          */
/*  ROOT    */
/*          */
const initialVh = window.innerHeight;
document.documentElement.style.setProperty('--initial-vh', 'blue');
const homeSection = document.querySelector('#home');
homeSection.style.height = initialVh - 90 + 'px';
/*          */
/*  HEADER  */
/*          */
const navHeaderButtons = document.querySelectorAll('.nav-header-button');
navHeaderButtons.forEach(navHeaderButton => {
    navHeaderButton.addEventListener('click', () => {
        document.getElementById(navHeaderButton.id.replace('nav-', ''))?.scrollIntoView({ behavior: 'smooth' });
    });
});
const header = document.querySelector('header');
const navMenuCheckbox = document.querySelector('#nav-menu-checkbox');
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const currentScrollTop = window.scrollY;
    if (navMenuCheckbox.checked) {
        lastScrollTop = currentScrollTop;
        return;
    }
    if (currentScrollTop > lastScrollTop) {
        header.classList.add('hidden');
    }
    else {
        header.classList.remove('hidden');
    }
    lastScrollTop = currentScrollTop;
});
/*          */
/*  HOME    */
/*          */
const mainButton1 = document.querySelector('#main-button1');
const mainButton2 = document.querySelector('#main-button2');
mainButton1.addEventListener('click', () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
});
