/*          */
/*  ROOT    */
/*          */

const initialVh = window.innerHeight as number
document.documentElement.style.setProperty('--initial-vh', initialVh + 'px')

const homeSection = document.querySelector('#home') as HTMLDivElement


homeSection.style.height = initialVh - 90 + 'px'

/*          */
/*  HEADER  */
/*          */

const navHeaderButtons = document.querySelectorAll('.nav-header-button') as NodeListOf<HTMLAnchorElement>
const navHeaderButtonBackgrounds = document.querySelectorAll('.nav-header-button-background') as NodeListOf<HTMLAnchorElement>
navHeaderButtons.forEach(navHeaderButton =>
{
    navHeaderButton.addEventListener('click', () => {   
        document.getElementById(navHeaderButton.id.replace('nav-', ''))?.scrollIntoView({behavior : 'smooth'})
    })
})

/*  TEST    */
function navHeaderButtonBackgroundBlink() {
    for (let i = 0; i < navHeaderButtonBackgrounds.length; i++)
    {
        (function (i)
        {
            setTimeout(() => {
                navHeaderButtonBackgrounds[i].classList.add('active')

                setTimeout(() => {
                    navHeaderButtonBackgrounds[i].classList.remove('active')
                }, 1000)
            }, i * 1000)
        })(i)
    }
}

window.onload = () => {
    navHeaderButtonBackgroundBlink()

    setInterval(() =>
    {
        navHeaderButtonBackgroundBlink()
    }, (navHeaderButtons.length * 1000) + (1 * 1000))
}


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


const homeButtons = document.querySelectorAll('.home-button') as NodeListOf<HTMLButtonElement>

homeButtons[0].addEventListener('click', () =>
{
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
})

homeButtons[1].addEventListener('click', () =>
{
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
})

/*          */
/*  ABOUT   */
/*          */

interface AboutCard
{
    readonly wrapper : HTMLDivElement
    readonly percent : HTMLParagraphElement
    readonly line : HTMLDivElement
    readonly amount : number
}

const aboutCards : AboutCard[] =
[
    {
        wrapper : document.querySelector('#about-card1') as HTMLDivElement,
        percent : document.querySelector('#about-card-stats1-value') as HTMLParagraphElement,
        line : document.querySelector('#about-card-stats1-line-inside') as HTMLDivElement,
        amount : 60
    },

    {
        wrapper : document.querySelector('#about-card2') as HTMLDivElement,
        percent : document.querySelector('#about-card-stats2-value') as HTMLParagraphElement,
        line : document.querySelector('#about-card-stats2-line-inside') as HTMLDivElement,
        amount : 55
    },

    {
        wrapper : document.querySelector('#about-card3') as HTMLDivElement,
        percent : document.querySelector('#about-card-stats3-value') as HTMLParagraphElement,
        line : document.querySelector('#about-card-stats3-line-inside') as HTMLDivElement,
        amount : 48
    }
]


function aboutCardActionHover (aboutCard : HTMLDivElement, aboutCardPercent : HTMLParagraphElement, aboutCardLine : HTMLDivElement, aboutCardAmount : number)
{
    aboutCardLine.style.setProperty('--x', `${aboutCardAmount}%`)

    aboutCard.addEventListener('mouseenter', () =>
    {
        for (let i :number = 0; i < (aboutCardAmount + 1); i++)
        {
            setTimeout(() =>
            {
                aboutCardPercent.innerHTML = i + '%'
            }, i * 10)
        }
    })

    aboutCard.addEventListener('mouseleave', () =>
    { 
        for (let i :number = aboutCardAmount; i > -1; i--)
        {
            setTimeout(() =>
            {
                aboutCardPercent.innerHTML = i + '%'
            }, (aboutCardAmount - i) * 10)
        }
    })
}

aboutCards.forEach(aboutCard =>
{
    aboutCardActionHover(
        aboutCard['wrapper'],
        aboutCard['percent'],
        aboutCard['line'],
        aboutCard['amount'],
    )
})

/*          */
/*  TEAMS   */
/*          */

const teamButtons : NodeListOf<HTMLButtonElement> = document.querySelectorAll('.team-card-button')
const teamHTMLFolder :string = 'IndividualPortfolio'
const teamHTMLFiles : string[] =
[
    `${teamHTMLFolder}/Ahmad/index.html`,
    `${teamHTMLFolder}/Arfa/index.html`,
    `${teamHTMLFolder}/Dikha/index.html`
]

for (let i : number = 0; i < teamButtons.length; i++)
{
    teamButtons[i].addEventListener('click', () =>
    {
        document.location.assign(teamHTMLFiles[i])
    })
}

function loadLocalIcons()
{
    const githubLinks : NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.github-icon');
    const youtubeLinks : NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.youtube-icon');
    const instagramLinks : NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.instagram-icon');

    githubLinks.forEach((githubLink : HTMLAnchorElement) => {
        githubLink.innerHTML += '<img src="Media/Icons/inverted/github.svg" alt="Github">';
    })

    youtubeLinks.forEach((youtubeLink : HTMLAnchorElement) => {
        youtubeLink.innerHTML += '<img src="Media/Icons/inverted/youtube.svg" alt="Github">';
    })

    instagramLinks.forEach((instagramLink : HTMLAnchorElement) => {
        instagramLink.innerHTML += '<img src="Media/Icons/inverted/instagram.svg" alt="Github">';
    })
}

/*          */
/*  CONTACT */
/*          */
const contactInputs : NodeListOf<HTMLInputElement> = document.querySelectorAll('.contact-input')

contactInputs.forEach((contactInput : HTMLInputElement) =>
{
    contactInput.addEventListener('input', () =>
    {
        if (contactInput.value)
        {
            document.querySelector(`#contact-input-label-${contactInput.id.replace('contact-input-', '')}`)?.classList.add('contact-hidden')
        }
        else
        {
            document.querySelector(`#contact-input-label-${contactInput.id.replace('contact-input-', '')}`)?.classList.remove('contact-hidden')
        }
    })

    if (contactInput.value)
    {
        document.querySelector(`#contact-input-label-${contactInput.id.replace('contact-input-', '')}`)?.classList.add('contact-hidden')
    }
    else
    {
        document.querySelector(`#contact-input-label-${contactInput.id.replace('contact-input-', '')}`)?.classList.remove('contact-hidden')
    }
})


loadLocalIcons()

/*          */
/*  MISC    */
/*          */

function scrollIntoElement(elementID :string, key :string, e :KeyboardEvent)
{
    if (e.ctrlKey && e.key === key)
    {
        document.getElementById(elementID)?.scrollIntoView({behavior : 'smooth'})
        return
    }
}

const isIndexHTML : boolean = window.location.toString().includes('index.html')

if (isIndexHTML)
{
    window.addEventListener('keydown', (e) => {
        scrollIntoElement('home', '1', e)
        scrollIntoElement('services', '2', e)
        scrollIntoElement('about', '3', e)
        scrollIntoElement('portfolio', '4', e)
        scrollIntoElement('team', '5', e)
        scrollIntoElement('contact', '6', e)
    })
}