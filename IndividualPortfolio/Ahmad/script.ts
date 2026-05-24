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