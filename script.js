// Toggle mobile navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Simple contact form handler (front-end only)
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // For demo: show success message (no actual sending)
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'Thank you! Your message has been received.';

    // Clear form
    form.reset();

    // Hide message after 4 seconds
    setTimeout(() => {
        responseMessage.style.display = 'none';
    }, 4000);
});
