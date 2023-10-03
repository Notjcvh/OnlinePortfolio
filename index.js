// Function to update element styles based on scroll
function updateStylesOnScroll() {
    let value = window.scrollY;

    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains_behind = document.getElementById('mountains_behind');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let mountains_front = document.getElementById('mountains_front');
    //let header = document.querySelector('header');

    stars.style.left = value * 0.25 +'px';
    moon.style.top = value + 'px';
    mountains_behind.style.top = value * 0.25 + 'px';
    mountains_front.style.top = 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 0.5 + 'px';
    //header.style.top = value + 'px';
}

// Function to update active link based on section in view
function updateActiveLink() {
    const sections = document.querySelectorAll('.home, div');
    let currentSectionId;
    let minDistanceFromMidpoint = Infinity;  // To track the smallest distance to viewport's midpoint

    const viewportMidpoint = window.scrollY + (window.innerHeight / 2);  // Midpoint of the viewport

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom =  section.offsetHeight;
        const sectionMidpoint = sectionTop + (sectionBottom / 2);  // Midpoint of the section

        // Calculate the distance from the viewport's midpoint
        const distanceFromMidpoint = Math.abs(viewportMidpoint - sectionMidpoint);

        // If this section's midpoint is closest to the viewport's midpoint, update currentSectionId
        if (distanceFromMidpoint < minDistanceFromMidpoint) {
            minDistanceFromMidpoint = distanceFromMidpoint;
            currentSectionId = section.id;
        }
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

function headerTransparency(){
    const viewportMidpoint = window.scrollY + (window.innerHeight / 2);

    const header = document.querySelector('header');

    if (viewportMidpoint >= 1000){ //When the mniddle of the screen passes 600 the transition will trigger
        // If user is on the "home" section
        header.style.backgroundColor = 'rgba(38, 41, 43, 1)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}

// Scroll event listener
window.addEventListener('scroll', function(event) {
    updateStylesOnScroll();
    updateActiveLink();
    headerTransparency();
});
