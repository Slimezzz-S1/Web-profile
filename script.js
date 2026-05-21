"use strict";
/*          */
/*  ROOT    */
/*          */
const initialVh = window.innerHeight;
document.documentElement.style.setProperty('--initial-vh', initialVh + 'px');
const homeSection = document.querySelector('#home');
homeSection.style.height = initialVh - 90 + 'px';
/*          */
/*  HEADER  */
/*          */
const navHeaderButtons = document.querySelectorAll('.nav-header-button');
const navHeaderButtonBackgrounds = document.querySelectorAll('.nav-header-button-background');
navHeaderButtons.forEach(navHeaderButton => {
    navHeaderButton.addEventListener('click', () => {
        document.getElementById(navHeaderButton.id.replace('nav-', ''))?.scrollIntoView({ behavior: 'smooth' });
    });
});
/*  TEST    */
function navHeaderButtonBackgroundBlink() {
    for (let i = 0; i < navHeaderButtonBackgrounds.length; i++) {
        (function (i) {
            setTimeout(() => {
                navHeaderButtonBackgrounds[i].classList.add('active');
                navHeaderButtons[i].style.color = 'black';
                setTimeout(() => {
                    navHeaderButtonBackgrounds[i].classList.remove('active');
                    navHeaderButtons[i].style.color = 'white';
                }, 1000);
            }, i * 1000);
        })(i);
    }
}
window.onload = () => {
    navHeaderButtonBackgroundBlink();
    setInterval(() => {
        navHeaderButtonBackgroundBlink();
    }, (navHeaderButtons.length * 1000) + (1 * 1000));
};
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
const homeButtons = document.querySelectorAll('.home-button');
homeButtons[0].addEventListener('click', () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
});
const aboutCards = [
    {
        wrapper: document.querySelector('#about-card1'),
        percent: document.querySelector('#about-card-stats1-value'),
        line: document.querySelector('#about-card-stats1-line-inside'),
        amount: 30
    },
    {
        wrapper: document.querySelector('#about-card2'),
        percent: document.querySelector('#about-card-stats2-value'),
        line: document.querySelector('#about-card-stats2-line-inside'),
        amount: 20
    },
    {
        wrapper: document.querySelector('#about-card3'),
        percent: document.querySelector('#about-card-stats3-value'),
        line: document.querySelector('#about-card-stats3-line-inside'),
        amount: 50
    }
];
function aboutCardActionHover(aboutCard, aboutCardPercent, aboutCardLine, aboutCardAmount) {
    aboutCardLine.style.setProperty('--x', `${aboutCardAmount}%`);
    aboutCard.addEventListener('mouseenter', () => {
        for (let i = 0; i < (aboutCardAmount + 1); i++) {
            setTimeout(() => {
                aboutCardPercent.innerHTML = i + '%';
            }, i * 10);
        }
    });
    aboutCard.addEventListener('mouseleave', () => {
        for (let i = aboutCardAmount; i > -1; i--) {
            setTimeout(() => {
                aboutCardPercent.innerHTML = i + '%';
            }, (aboutCardAmount - i) * 10);
        }
    });
}
aboutCards.forEach(aboutCard => {
    aboutCardActionHover(aboutCard['wrapper'], aboutCard['percent'], aboutCard['line'], aboutCard['amount']);
});
/*          */
/*  MISC    */
/*          */
function scrollIntoElement(elementID, key, e) {
    if (e.ctrlKey && e.key === key) {
        document.getElementById(elementID)?.scrollIntoView({ behavior: 'smooth' });
        return;
    }
}
const isIndexHTML = window.location.toString().includes('index.html');
if (isIndexHTML) {
    window.addEventListener('keydown', (e) => {
        scrollIntoElement('home', '1', e);
        scrollIntoElement('services', '2', e);
        scrollIntoElement('about', '3', e);
        scrollIntoElement('portfolio', '4', e);
        scrollIntoElement('team', '5', e);
        scrollIntoElement('contact', '6', e);
    });
}
