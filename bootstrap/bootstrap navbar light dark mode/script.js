// script.js

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const modeToggleBtn = document.getElementById('modeToggleBtn');

    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    }

    // Toggle between light and dark modes
    modeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});
