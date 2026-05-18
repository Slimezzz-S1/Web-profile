/*          */
/*  ROOT    */
/*          */

const initialVh :number = window.innerHeight as number
document.documentElement.style.setProperty('--initial-vh', 'blue')

const homeSection = document.querySelector('#home') as HTMLDivElement


homeSection.style.height = initialVh - 90 + 'px'

/*          */
/*  HEADER  */
/*          */

const navHeaderButtons = document.querySelectorAll('.nav-header-button') as NodeListOf<HTMLAnchorElement>
navHeaderButtons.forEach(navHeaderButton =>
{
    navHeaderButton.addEventListener('click', () => {
        document.getElementById(navHeaderButton.id.replace('nav-', ''))?.scrollIntoView({behavior : 'smooth'})
    })
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