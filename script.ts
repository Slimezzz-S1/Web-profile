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
    for (let i : number = 0; i < navHeaderButtonBackgrounds.length; i++)
    {
        setTimeout(() => {
            navHeaderButtonBackgrounds[i].classList.add('active')

            setTimeout(() => {
                navHeaderButtonBackgrounds[i].classList.remove('active')
            }, 1000)
        }, i * 1000)
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

        return
    }

    if (currentScrollTop > lastScrollTop)
    {
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
        amount : 30
    },

    {
        wrapper : document.querySelector('#about-card2') as HTMLDivElement,
        percent : document.querySelector('#about-card-stats2-value') as HTMLParagraphElement,
        line : document.querySelector('#about-card-stats2-line-inside') as HTMLDivElement,
        amount : 40
    },

    {
        wrapper : document.querySelector('#about-card3') as HTMLDivElement,
        percent : document.querySelector('#about-card-stats3-value') as HTMLParagraphElement,
        line : document.querySelector('#about-card-stats3-line-inside') as HTMLDivElement,
        amount : 73
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

function contactSend(formId : string)
{
    const overlayHTMLSuccess : string | HTMLDivElement =
    `
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
    `

    const overlayHTMLFail : string | HTMLDivElement =
    `
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
    `

    if (!document.getElementById('main-overlay-css'))
    {
        const overlayCSS : HTMLStyleElement = document.createElement('style')
    overlayCSS.id = 'main-overlay-css'
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
    `
        document.head.appendChild(overlayCSS)
    }

    const form = document.querySelector('#' + formId) as HTMLFormElement
    
    let emptyInputCount : number = 0
    const formInputs : NodeListOf<HTMLInputElement> = document.querySelectorAll('.contact-input')

    formInputs.forEach(formInputs =>
    {
        if (formInputs.value.trim() === '')
        {
            emptyInputCount ++
        }
    })

    if (emptyInputCount >= 4)
    {
        return
    }

    const overlayWrapper : HTMLDivElement = document.createElement('div')
    overlayWrapper.classList.add('body-overlay-wrapper')
    overlayWrapper.innerHTML = overlayHTMLSuccess
    document.body.appendChild(overlayWrapper)

    const mainOverlayNotification = document.querySelectorAll('.main-overlay-notification')[0] as HTMLDivElement
    const notificationPoint = document.getElementById('contact-notification-point') as HTMLDivElement
    const notificationTimer = document.getElementById('contact-notification-point-timer') as HTMLDivElement
    const seconds : number = 5

    for (let i : number = seconds; i > -2; i--)
    {
        setTimeout(() =>
        {
            notificationTimer.innerText = i + 's'

            if (i <= -1)
            {
                mainOverlayNotification.style.animation = 'notificationSlideOut .4s ease forwards'

                setTimeout(() => 
                {
                    notificationPoint.remove()
                }, 1000)
            }
        }, (seconds - i) * 1000)
    }
}

const contactInputs : NodeListOf<HTMLInputElement> = document.querySelectorAll('.contact-input')
const contactForm = document.querySelector('#contact-form') as HTMLFormElement

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

let isSent : boolean = false

contactForm.addEventListener('submit', (e : SubmitEvent) =>
{
    e.preventDefault()

    if (isSent)
    {
        return
    }

    contactSend(contactForm.id)

    isSent = true
})



/*          */
/*  MISC    */
/*          */

function scrollIntoElement(elementID :string, key :string, e :KeyboardEvent)
{
    if ((e.ctrlKey && e.key === key) || (e.altKey && e.key === key))
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