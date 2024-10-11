// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Toggle dark mode class on header
    document.querySelector('header').classList.toggle('dark-mode');

    // Toggle dark mode class on all nav links
    document.querySelectorAll('nav ul li a').forEach((link) => {
        link.classList.toggle('dark-mode');
    });

    // Toggle dark mode class on all sections
    document.querySelectorAll('.section').forEach((section) => {
        section.classList.toggle('dark-mode');
    });

    // Toggle dark mode class on all project and testimonial items
    document.querySelectorAll('.project-item, .testimonial-item').forEach((item) => {
        item.classList.toggle('dark-mode');
    });

    // Toggle dark mode class on footer
    document.querySelector('footer').classList.toggle('dark-mode');
}

// Add event listener to the button
darkModeToggle.addEventListener('click', toggleDarkMode);

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formResponse = document.getElementById('form-response');
    formResponse.textContent = 'Thank you for your message! I will get back to you soon.';
    formResponse.style.color = 'green';
    this.reset();
});
