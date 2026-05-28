export function contactSend(formId) {
    const overlayHTMLSuccess = `
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
    `;
    const overlayHTMLFail = `
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
    `;
    if (!document.getElementById('main-overlay-css')) {
        const overlayCSS = document.createElement('style');
        overlayCSS.id = 'main-overlay-css';
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
    `;
        document.head.appendChild(overlayCSS);
    }
    const form = document.querySelector('#' + formId);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let emptyInputCount = 0;
        const formInputs = document.querySelectorAll('.contact-input');
        formInputs.forEach(formInputs => {
            if (formInputs.value.trim() === '') {
                emptyInputCount++;
            }
        });
        if (emptyInputCount >= 4) {
            return;
        }
        document.body.innerHTML += overlayHTMLSuccess;
        const mainOverlayNotification = document.querySelectorAll('.main-overlay-notification')[0];
        const notificationPoint = document.getElementById('contact-notification-point');
        const notificationTimer = document.getElementById('contact-notification-point-timer');
        const seconds = 5;
        for (let i = seconds; i > -2; i--) {
            setTimeout(() => {
                notificationTimer.innerText = i + 's';
                if (i <= -1) {
                    mainOverlayNotification.style.animation = 'notificationSlideOut .4s ease forwards';
                    setTimeout(() => {
                        notificationPoint.remove();
                    }, 1000);
                }
            }, (seconds - i) * 1000);
        }
    });
}
