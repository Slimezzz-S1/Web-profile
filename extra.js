export function loadLocalIcons()
{
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
};