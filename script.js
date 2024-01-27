const newAppointmentButton = document.getElementById('new-appointment');
const newAppointmentOptions = document.querySelectorAll('.menu-new-appointment__option');

const darkLayer = document.createElement('div');
darkLayer.style.position = 'fixed';
darkLayer.style.top = '0';
darkLayer.style.left = '0';
darkLayer.style.width = '100%';
darkLayer.style.height = '100%';
darkLayer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';


newAppointmentButton.addEventListener('click', () => {
    newAppointmentOptions.forEach(element => {
        element.classList.toggle('hidden');
        element.classList.toggle('animate-button');
    });

    const existingDarkLayer = document.body.contains(darkLayer);

    if (existingDarkLayer) {
        document.body.removeChild(darkLayer);
    } else {
        document.body.appendChild(darkLayer);
    }
});
