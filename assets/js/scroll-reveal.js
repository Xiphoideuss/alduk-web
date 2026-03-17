const sr = ScrollReveal({
    distance: '120px',
    duration: 800,
    easing: 'ease',
    reset: false,
});

// GENERIC
function reveal(selector, options = {}) {
    sr.reveal(selector, options);
}

// PRESETOVI
export function revealLeft(selector) {
    reveal(selector, { origin: 'left' });
}

export function revealRight(selector) {
    reveal(selector, { origin: 'right' });
}

export function revealTop(selector) {
    reveal(selector, { origin: 'top' });
}

export function revealBottom(selector) {
    reveal(selector, { origin: 'bottom' });
}

// CUSTOM
export function revealCustom(selector, options) {
    reveal(selector, options);
}

// SEQUENTIAL ANIMATION
sr.reveal('.equipment__data, .packages__card, .rental-item, .package-wrapper, .gallery-item, .about-hero, .contact-item, .hero', {
    origin: 'left',
    distance: '50px',
    duration: 700,
    interval: 120
});

// HTML TRIGGERI
revealLeft('.reveal-left');
revealRight('.reveal-right');
revealTop('.reveal-top');
revealBottom('.reveal-bottom');