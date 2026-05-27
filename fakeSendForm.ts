export function contactSend(formId : string)
{
    const overlayCSS : HTMLStyleElement = document.createElement('style')
    const overlayHTML : string | HTMLElement =
    `
    
    `
    const form = document.querySelector('#' + formId) as HTMLFormElement
    
    form.addEventListener('click', (e) =>
    {
        e.preventDefault()

        document.body.innerHTML += 
    })
}