// Function to update element styles based on scroll
function updateStylesOnScroll() {
    let value = window.scrollY;

    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains_behind = document.getElementById('mountains_behind');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let mountains_front = document.getElementById('mountains_front');
    let header = document.querySelector('header');

    stars.style.left = value * 0.25 +'px';
    moon.style.top = value + 'px';
    mountains_behind.style.top = value * 0.25 + 'px';
    mountains_front.style.top = 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 0.5 + 'px';
    header.style.top = value + 'px';
}

// Function to update active link based on section in view
function updateActiveLink() {
    const sections = document.querySelectorAll('section'); // Assuming your sections are <section> elements
    let currentSectionId;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSectionId = section.id;
        }
        console.log(`Section: ${section.id}, Top: ${sectionTop}, Bottom: ${sectionBottom}, Current Scroll: ${window.scrollY}`);
    });


    const navLinks = document.querySelectorAll('header ul li a');
    navLinks.forEach((link) => {
        if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Scroll event listener
window.addEventListener('scroll', function(event) {
    updateStylesOnScroll();
    updateActiveLink();
});
