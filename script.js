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
        setTimeout(() => {
            navHeaderButtonBackgrounds[i].classList.add('active');
            setTimeout(() => {
                navHeaderButtonBackgrounds[i].classList.remove('active');
            }, 1000);
        }, i * 1000);
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
homeButtons[1].addEventListener('click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
        amount: 40
    },
    {
        wrapper: document.querySelector('#about-card3'),
        percent: document.querySelector('#about-card-stats3-value'),
        line: document.querySelector('#about-card-stats3-line-inside'),
        amount: 73
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
/*  TEAMS   */
/*          */
const teamButtons = document.querySelectorAll('.team-card-button');
const teamHTMLFolder = 'IndividualPortfolio';
const teamHTMLFiles = [
    `${teamHTMLFolder}/Ahmad/index.html`,
    `${teamHTMLFolder}/Arfa/index.html`,
    `${teamHTMLFolder}/Dikha/index.html`
];
for (let i = 0; i < teamButtons.length; i++) {
    teamButtons[i].addEventListener('click', () => {
        document.location.assign(teamHTMLFiles[i]);
    });
}
function loadLocalIcons() {
    const githubLinks = document.querySelectorAll('.github-icon');
    const youtubeLinks = document.querySelectorAll('.youtube-icon');
    const instagramLinks = document.querySelectorAll('.instagram-icon');
    githubLinks.forEach((githubLink) => {
        githubLink.innerHTML += '<img src="Media/Icons/inverted/github.svg" alt="Github">';
    });
    youtubeLinks.forEach((youtubeLink) => {
        youtubeLink.innerHTML += '<img src="Media/Icons/inverted/youtube.svg" alt="Github">';
    });
    instagramLinks.forEach((instagramLink) => {
        instagramLink.innerHTML += '<img src="Media/Icons/inverted/instagram.svg" alt="Github">';
    });
}
/*          */
/*  CONTACT */
/*          */
function contactSend(formId) {
    const overlayHTMLSuccess = `
    <div class="main-overlay">
        <div class="main-overlay-container main-overlay-notification">
            <div id="contact-notification-point" class="notification-point">
                <div class="notification-point-header">
                    <div class="left title">
                        Notification
                    </div>

                    <div class="right extra">
                        <div id="contact-notification-point-timer" class="timer">
                            0s
                        </div>  
                    </div>
                </div>

                <div class="notification-point-body">
                    Contact sent!
                </div>
            </div>
        </div>
    </div>
    `;
    const overlayHTMLFail = `
    <div class="main-overlay">
        <div class="main-overlay-container main-overlay-notification">
            <div id="contact-notification-point" class="notification-point">
                <div class="notification-point-header">
                    <div class="left title">
                        Notification
                    </div>

                    <div class="right extra">
                        <div id="contact-notification-point-timer" class="timer">
                            0s
                        </div>  
                    </div>
                </div>

                <div class="notification-point-body">
                    Contact did not send.
                </div>
            </div>
        </div>
    </div>
    `;
    if (!document.getElementById('main-overlay-css')) {
        const overlayCSS = document.createElement('style');
        overlayCSS.id = 'main-overlay-css';
        overlayCSS.textContent =
            `
@keyframes notificationSlideIn
{
    from
    {
        bottom: -100%;
    }
    to
    {
        bottom: 0;
    }
}

@keyframes notificationSlideOut
{
    from
    {
        bottom: 0%;
    }
    to
    {
        bottom: -100%;
    }
}

.main-overlay
{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: 99999;
    pointer-events: none;
}

.main-overlay *
{
    color: white;
}

.main-overlay-notification
{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    max-width: 90vw;
    max-height: 90dvh;
    padding: 15px;
    background: none;
    z-index: 99999;

    animation: notificationSlideIn .5s ease-out forwards;
}

.main-overlay-notification .notification-point
{
    padding: 15px 10px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    background-color: blue;
}

.notification-point .notification-point-header
{
    display: flex;  
    align-items: center;
}

.notification-point .notification-point-header .left
{
    flex: 1;
    font-size: 20px;
}

.notification-point .notification-point-header .right
{
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

.notification-point .notification-point-header .right .cross-exit
{
    width: 15px;
    height: 15px;
}

.notification-point .notification-point-header .right .cross-exit img
{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
    `;
        document.head.appendChild(overlayCSS);
    }
    const form = document.querySelector('#' + formId);
    let emptyInputCount = 0;
    const formInputs = document.querySelectorAll('.contact-input');
    formInputs.forEach(formInputs => {
        if (formInputs.value.trim() === '') {
            emptyInputCount++;
        }
    });
    if (emptyInputCount >= 4) {
        return;
    }
    const overlayWrapper = document.createElement('div');
    overlayWrapper.classList.add('body-overlay-wrapper');
    overlayWrapper.innerHTML = overlayHTMLSuccess;
    document.body.appendChild(overlayWrapper);
    const mainOverlayNotification = document.querySelectorAll('.main-overlay-notification')[0];
    const notificationPoint = document.getElementById('contact-notification-point');
    const notificationTimer = document.getElementById('contact-notification-point-timer');
    const seconds = 5;
    for (let i = seconds; i > -2; i--) {
        setTimeout(() => {
            notificationTimer.innerText = i + 's';
            if (i <= -1) {
                mainOverlayNotification.style.animation = 'notificationSlideOut .4s ease forwards';
                setTimeout(() => {
                    notificationPoint.remove();
                }, 1000);
            }
        }, (seconds - i) * 1000);
    }
}
const contactInputs = document.querySelectorAll('.contact-input');
const contactForm = document.querySelector('#contact-form');
contactInputs.forEach((contactInput) => {
    contactInput.addEventListener('input', () => {
        if (contactInput.value) {
            document.querySelector(`#contact-input-label-${contactInput.id.replace('contact-input-', '')}`)?.classList.add('contact-hidden');
        }
        else {
            document.querySelector(`#contact-input-label-${contactInput.id.replace('contact-input-', '')}`)?.classList.remove('contact-hidden');
        }
    });
    if (contactInput.value) {
        document.querySelector(`#contact-input-label-${contactInput.id.replace('contact-input-', '')}`)?.classList.add('contact-hidden');
    }
    else {
        document.querySelector(`#contact-input-label-${contactInput.id.replace('contact-input-', '')}`)?.classList.remove('contact-hidden');
    }
});
loadLocalIcons();
let isSent = false;
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isSent) {
        return;
    }
    contactSend(contactForm.id);
    isSent = true;
});
/*          */
/*  MISC    */
/*          */
function scrollIntoElement(elementID, key, e) {
    if ((e.ctrlKey && e.key === key) || (e.altKey && e.key === key)) {
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
