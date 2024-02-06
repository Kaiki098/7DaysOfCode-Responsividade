const newAppointmentButton = document.getElementById('new-appointment');
const newAppointmentOptions = document.querySelectorAll('.menu-new-appointment__option');

const openFormButton = document.getElementById('open-form-button');
const formContainer = document.getElementById('form-container');
const addAppointmentDiv = document.getElementById('add-appointment-div');

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
        element.classList.add('animate-button');
    });

    const existingDarkLayer = document.body.contains(darkLayer);

    if (existingDarkLayer) {
        document.body.removeChild(darkLayer);
    } else {
        document.body.appendChild(darkLayer);
    }
});

darkLayer.addEventListener('click', () => {
    newAppointmentOptions.forEach(element => {
        element.classList.toggle('hidden');
        element.classList.remove('animate-button');
    });

    document.body.removeChild(darkLayer);
})

openFormButton.addEventListener('click', function() {
    formContainer.style.bottom = '100%';
})