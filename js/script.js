// nav active class
document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');


    navItems.forEach(function (navItem) {

        navItem.addEventListener('click', function () {

            navItems.forEach(function (item) {
                item.classList.remove('active');
            });


            this.classList.add('active');
        });
    });
});

//header color
window.addEventListener('scroll', function () {
    // Get the current scroll position
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Get the target div element
    var targetDiv = document.getElementById('header');

    // Check if scrolling down
    if (scrollPosition > 30) {
        // Add the class for the new background color
        targetDiv.classList.add('scroll-down-bg');
        targetDiv.classList.add('nl');
    } else {
        // Remove the class for the new background color
        targetDiv.classList.remove('scroll-down-bg');
        targetDiv.classList.remove('nl');
    }
});

// logo shrink
$(document).ready(function () {
    $(document).scroll(function () {
        if ($(document).scrollTop() >= 30) {
            $('.navbar-brand img').addClass('js-scrolling');
        } else {
            $('.navbar-brand img').removeClass('js-scrolling');
        }
    });
});


// back to top
window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop() {
    const heroSection = document.getElementById('hero');
    heroSection.scrollIntoView({ behavior: 'smooth' });
}


function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}
