"use strict";
/*          */
/*  HEADER  */
/*          */
const navHome = document.querySelector('#nav-home');
const navServices = document.querySelector('#nav-services');
const navAbout = document.querySelector('#nav-about');
const navPortfolio = document.querySelector('#nav-portfolio');
const navTeam = document.querySelector('#nav-team');
const navContact = document.querySelector('#nav-contact');
navHome.addEventListener('click', () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
});
navServices.addEventListener('click', () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
});
navAbout.addEventListener('click', () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});
navPortfolio.addEventListener('click', () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
});
navTeam.addEventListener('click', () => {
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
});
navContact.addEventListener('click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
