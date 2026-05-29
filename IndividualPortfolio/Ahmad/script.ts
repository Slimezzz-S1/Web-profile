//  ROOT

const initialVh = window.innerHeight as number
document.documentElement.style.setProperty('--initial-vh', initialVh + 'px')

const navHeaderButtons : NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-header-link')

navHeaderButtons.forEach((navHeaderButton) =>
{
    navHeaderButton.addEventListener('click', () =>
    {
        document.querySelector(`#${navHeaderButton.id.toString().replace('nav-header-link-', '')}`)?.scrollIntoView({behavior : 'smooth'})
    })
})

//  HEADER

const header = document.querySelector('header') as HTMLDivElement
const navMenuCheckbox = document.querySelector('#nav-menu-checkbox') as HTMLInputElement

let lastScrollTop : number = 0

window.addEventListener('scroll', () =>
{
    const currentScrollTop : number = window.scrollY

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

//  HOME
//  ABOUT
//  SKILLS
//  PORTFOLIO
//  CONTACT

const contactForm = document.querySelector('#contact-form') as HTMLFormElement

//  OVERLAY

const portfolioVideoOverlay : string | HTMLElement =
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
                    <video class='landscape' src="Media/Videos/Fire.mp4" controls></video>
                </div>

                <div class="bottom">
                    <h5>
                        Fire.mp4
                    </h5>

                    <a class="interactive-button" href="https://youtube.com/shorts/iEzjn6NvZwE?feature=share">
                        View On Youtube
                    </a>
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

                    <a class="interactive-button" href="https://youtube.com/shorts/qI_to6H_zCY?feature=share">
                        View On Youtube
                    </a>
                </div>
            </div>

            <div id="portfolio-video=card3" class="portfolio-video-card">
                <div class="portfolio-video-card-video">
                    <video class='landscape' src="Media/Videos/skeleton banging meme.mp4" controls></video>
                </div>

                <div class="bottom">
                    <h5>
                        skeleton banging meme.mp4
                    </h5>

                    <a class="interactive-button" href="https://youtube.com/shorts/H97fHxy0Mgg?feature=share">
                        View On Youtube
                    </a>
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

                    <a class="interactive-button" href="https://youtube.com/shorts/0BzsUKt-Ank?feature=share">
                        View On Youtube
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
`

const portfolioCodeOverlay : string | HTMLElement =
`
        <div id="portfolio-code-overlay" class="main-overlay">
            <div class="main-overlay-content-section">
                <div class="main-overlay-navbar">
                    <h1>
                        My scripts
                    </h1>

                    <button class="main-overlay-exit-button" onclick="closeOverlay()">
                        <img src="Media/Icons/inverted/xcross.svg" alt="X">
                    </button>
                </div>

                <div class="main-overlay-content">
                    <div id="portfolio-code-card1" class="portfolio-code-card">
                        <div class="top">
                            <h4>
                                Caesar-cipher.py
                            </h4>
                        </div>

                        <div class="bottom">
                            <pre>
<code>import string
import base64

def caesar_cipher(
        input_text :str,
        shift :int,
        isdecode :bool = False
    ) -> str:
    result :str = ""

    for char in input_text:
        if char.isalpha():
            base :int = ord("A") if char.isupper() else ord("a")

            result += chr((ord(char) - base + (-shift if isdecode else shift)) % 26 + base)
        else:
            result += char
    return result

def vigenere_cipher(
        input_text :str,
        keyword :str,
        isdecode :bool = False
    ) -> str:
    result :str = ""
    keyword_index :int = 0

    for char in input_text:
        if char.isalpha():
            base :int = ord("A") if char.isupper() else ord("a")

            shift :int = ord(keyword[keyword_index % len(keyword)].lower()) - ord("a")
            result += chr((ord(char) - base + (-shift if isdecode else shift)) % 26 + base)

            keyword_index +=1
        else:
            result += char
    return result

### WIP ###
def bacon_cipher(
        input_text :str,
        key1 :str,
        key2 :str,
        isdecode :bool = False
    ) -> str:
    result :str = ""

    for char in input_text:
        if char.isalpha():

            result += ...
    

    return result
### WIP ###

#def reverse_text(input_text :str) -> str:
#    return ''.join(reversed(input_text))

reverse_text = lambda input_text : ''.join(reversed(input_text))

def base64_code(input_text :str | bytes, isdecode :bool = False) -> str:
    if isdecode:
        return base64.b64decode(input_text).decode("utf-8")

    return ''.join([chr(i) for i in base64.b64encode(input_text.encode("utf-8"))])

def base32_code(input_text :str | bytes, isdecode :bool = False) -> str:
    if isdecode:
        return base64.b32decode(input_text).decode()

    return ''.join([chr(i) for i in base64.b32encode(input_text.encode())])</code>
                            </pre>
                        </div>
                    </div>

                    <div id="portfolio-code-card2" class="portfolio-code-card">
                        <div class="top">
                            <h4>
                                About-card.ts
                            </h4>
                        </div>

                        <div class="bottom">
                            <pre>
<code>interface AboutCard
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
        amount : 20
    },

    {
        wrapper : document.querySelector('#about-card3') as HTMLDivElement,
        percent : document.querySelector('#about-card-stats3-value') as HTMLParagraphElement,
        line : document.querySelector('#about-card-stats3-line-inside') as HTMLDivElement,
        amount : 50
    }
]


function aboutCardActionHover (aboutCard : HTMLDivElement, aboutCardPercent : HTMLParagraphElement, aboutCardLine : HTMLDivElement, aboutCardAmount : number)
{
    aboutCardLine.style.setProperty('--x', aboutCardAmount.toString() + %)

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
})</code>
                            </pre>
                        </div>
                    </div>
                    
                    <div id="portfolio-code-card3" class="portfolio-code-card">
                        <div class="top">
                            <h4>
                                rsync.py
                            </h4>
                        </div>

                        <div class="bottom">
                            <pre>
<code>import os
import subprocess
from pathlib import Path
import tomllib
import time

# Requires bash, rsync
# Requires config.toml
# Configs:
# source_folders :list[str]
# target_uuid :str
#

############
### INIT ###
############

class DriveNotFoundError(Exception):
    pass

def simple_run(cmd :list[str], isstrip :bool = False):
    result = subprocess.run(cmd, capture_output = True, text = True)

    if isstrip:
        return result.stdout.strip()

    return result.stdout

############
### VAR ####
############

BASE_DIR :Path = Path(__file__).parent

with open(BASE_DIR / "config.toml", "rb") as f:
    config :dict[str, dict[str, str | list[str]]] = tomllib.load(f)["settings"]

user :str = simple_run(["whoami"]).strip()

source_folders :list[str] = [os.path.expanduser(f) for f in config["source_folders"]]

target_uuid :str = config["target_uuid"]

mountpoints :list[str] = simple_run(["lsblk", "-o", "MOUNTPOINT", "-nr"]).splitlines()

target_mountpoint :Path | None = Path(next((mountpoint for mountpoint in mountpoints if mountpoint.endswith(target_uuid)), None))


############
### MAIN ###
############

def main() -> None:
    print("\n".join([
        "Source Folders :",
        "\t" + "\n\t".join(source_folders),
        "Target drive : ",
        "\t" + str(target_mountpoint)
    ]))

    print("Preparing to backup in ", end = "")
    for i in range(3, 0, -1):
        print(str(i) + ("." * 3))
        time.sleep(1)

    for f in source_folders:
        print("\n".join([
            "#" * (len(f) + 5),
            f"{source_folders.index(f) + 1}. {f}",
            "#" * (len(f) + 5)
        ]))

#        rsync -av --progress --omit-dir-times --delete /home/uwu/Documents /run/media/uwu/2522BBE03628AF93/Backup/Documents/
        subprocess.run(["rsync", "-avh", "--omit-dir-times", "--delete", f + "/", str(target_mountpoint / Path("Backup") / Path(f.removeprefix(f"/home/{user}/"))) + "/"])

        print(f"\n\n{f} finished!\n\n")

    print("All folders finished!")

    return None

if __name__ == '__main__':
    main()</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`

function openOverlay(name :string)
{
    console.log('test')

    if (name == 'portfolio-video')
    {
        document.body.innerHTML += portfolioVideoOverlay
    }
    else if (name == 'portfolio-code')
    {
        document.body.innerHTML += portfolioCodeOverlay
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