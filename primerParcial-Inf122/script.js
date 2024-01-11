// Agrega funcionalidades JS según los requisitos mencionados
document.getElementById('download-btn').addEventListener('click', () => {
    alert('Downloading Document');
});

document.getElementById('contact-btn').addEventListener('click', () => {
    window.location.href = 'mailto:contact@me.com';
});

const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        
        window.location.href = 'https://twitter.com/?lang=es';
        window.location.href = 'https://bo.linkedin.com/';
        window.location.href = 'https://github.com';

    });
});
