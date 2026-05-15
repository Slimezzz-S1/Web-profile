/*          */
/*  HEADER  */
/*          */

const navHome = document.querySelector('#nav-home') as HTMLAnchorElement
const navServices = document.querySelector('#nav-services') as HTMLAnchorElement
const navAbout = document.querySelector('#nav-about') as HTMLAnchorElement
const navPortfolio = document.querySelector('#nav-portfolio') as HTMLAnchorElement
const navTeam = document.querySelector('#nav-team') as HTMLAnchorElement
const navContact = document.querySelector('#nav-contact') as HTMLAnchorElement

navHome.addEventListener('click', () =>
{
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
})

navServices.addEventListener('click', () =>
{
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
})

navAbout.addEventListener('click', () =>
{
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
})

navPortfolio.addEventListener('click', () =>
{
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
})

navTeam.addEventListener('click', () =>
{
    document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
})

navContact.addEventListener('click', () =>
{
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
})


const header = document.querySelector('header') as HTMLElement
const navMenuCheckbox = document.querySelector('#nav-menu-checkbox') as HTMLInputElement

let lastScrollTop : Number = 0

window.addEventListener('scroll', () =>
{
    const currentScrollTop : Number = window.scrollY

    if (navMenuCheckbox.checked)
    {
        lastScrollTop = currentScrollTop

        return;
    }

    if (currentScrollTop > lastScrollTop) {
        header.classList.add('hidden')
    }
    else
    {
        header.classList.remove('hidden')
    }

    lastScrollTop = currentScrollTop
})

/*          */
/*  HOME    */
/*          */

const mainButton1 = document.querySelector('#main-button1') as HTMLButtonElement
const mainButton2 = document.querySelector('#main-button2') as HTMLButtonElement

mainButton1.addEventListener('click', () =>
{
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
})