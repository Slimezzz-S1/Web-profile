//  ROOT

const navHeaderButtons : NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-header-link')

navHeaderButtons.forEach((navHeaderButton) =>
{
    navHeaderButton.addEventListener('click', () =>
    {
        document.querySelector(`#${navHeaderButton.id.toString().replace('nav-header-link-', '')}`)?.scrollIntoView({behavior : 'smooth'})
    })
})

//  HOME
//  ABOUT
//  SKILLS
//  PORTFOLIO
//  CONTACT

//  OVERLAY

const portfolioVideoOverlay :string =
`
<div id="portfolio-video-overlay" class="main-overlay">
    <div class="main-overlay-content-section">
        <div class="main-overlay-navbar">
            <h1>
                My Animations
            </h1>

            <button class="main-overlay-exit-button" onclick="closeOverlay()">
                <img src="Media/Icons/inverted/xcross.svg" alt="X">
            </button>
        </div>

        <div id="portfolio-video-card-wrapper" class="main-overlay-content">
            <div id="portfolio-video-card1" class="portfolio-video-card">
                <div class="portfolio-video-card-video">
                    <video src="Media/Videos/fire.mp4" controls></video>
                </div>

                <div class="bottom">
                    <h5>
                        Fire.mp4
                    </h5>

                    <button class="interactive-button" onclick="window.location.assign('https://youtube.com/shorts/iEzjn6NvZwE?feature=share')">
                        View On Youtube
                    </button>
                </div>
            </div>

            <div id="portfolio-video=card2" class="portfolio-video-card">
                <div class="portfolio-video-card-video">
                    <video src="Media/Videos/motivation.mp4" controls></video>
                </div>

                <div class="bottom">
                    <h5>
                        motivation.mp4
                    </h5>

                    <button class="interactive-button" onclick="window.location.assign('https://youtube.com/shorts/qI_to6H_zCY?feature=share')">
                        View On Youtube
                    </button>
                </div>
            </div>

            <div id="portfolio-video=card3" class="portfolio-video-card">
                <div class="portfolio-video-card-video">
                    <video src="Media/Videos/skeleton banging meme.mp4" controls></video>
                </div>

                <div class="bottom">
                    <h5>
                        skeleton banging meme.mp4
                    </h5>

                    <button class="interactive-button" onclick="window.location.assign('https://youtube.com/shorts/H97fHxy0Mgg?feature=share')">
                        View On Youtube
                    </button>
                </div>
            </div>

            <div id="portfolio-video=card4" class="portfolio-video-card">
                <div class="portfolio-video-card-video">
                    <video src="Media/Videos/Slapping a watermelon.mp4" controls></video>
                </div>
                <div class="bottom">
                    <h5>
                        slapping a watermelon.mp4
                    </h5>

                    <button class="interactive-button" onclick="window.location.assign('https://youtube.com/shorts/0BzsUKt-Ank?feature=share')">
                        View On Youtube
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
`

function generateOverlay(titie : string, content : HTMLElement)
{
    return
}

function openOverlay(name :string)
{
    console.log('test')

    if (name == 'portfolio-video')
    {
        document.body.innerHTML += portfolioVideoOverlay
    }
    return
}

function closeOverlay()
{
    const mainOverlay = document.querySelector('.main-overlay') as HTMLElement

    mainOverlay.style.animation = 'fadeOut .4s ease forwards'

    setTimeout(() =>
    {
        mainOverlay.remove()
    }, 1000)
    return
}