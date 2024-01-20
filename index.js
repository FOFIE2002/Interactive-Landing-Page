document.addEventListener('DOMContentLoaded', function () {
    const notifications = document.querySelectorAll('.notification');

    notifications.forEach((notification, index) => {
        setTimeout(() => {
            notification.classList.add('loaded');
        }, index * 1000); // Adjust the delay as needed

        const closeButton = notification.querySelector('[data-trigger="notifications._close"]');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                notification.classList.remove('loaded');
                setTimeout(() => {
                    notification.remove();
                }, 300); // Match the CSS transition duration
            });
        }
    });
});

function deleteText(){
    var textELement = document.getElementById("notification");
    textELement.remove();
};