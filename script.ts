/*          */
/*  ROOT    */
/*          */

/*              */
/*  WINDOW LOAD */
/*              */

const tempOverlay :string = "<div id='wip-overlay' class='body-overlay flex-center'><p>Work In Progress</p></div>"

window.onload = () =>
{
    document.body.innerHTML += tempOverlay
    document.body.style.position = "relative"

    setTimeout(() => {
        document.getElementById('wip-overlay')?.classList.add('hidden');
    }, 2000)
}