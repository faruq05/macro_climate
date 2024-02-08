// nav scroll snap transition
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get target section id
            const targetSection = document.querySelector(targetId); // Get target section element

            if (targetSection) {
                // Scroll to the target section with smooth behavior
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});