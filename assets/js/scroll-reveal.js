/* ===== CUSTOM SCROLL REVEAL (IntersectionObserver) ====== */

const sr = (() => {

	const defaults = {
		origin: 'bottom',
		distance: '0px',
		duration: 600,
		delay: 0,
		interval: 0,
		opacity: 0,
		scale: 1,
		easing: 'cubic-bezier(0.5, 0, 0, 1)',
		reset: false,
		viewFactor: 0.15
	};

	const VARS = [
		'--sr-x',
		'--sr-y',
		'--sr-scale',
		'--sr-opacity',
		'--sr-duration',
		'--sr-delay',
		'--sr-easing'
	];

	function reveal(selector, options = {}) {

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return;
		}

		const settings = { ...defaults, ...options };

		// preskoči elemente koje je već obradio raniji poziv (prvi poziv ima prednost)
		const elements = [...document.querySelectorAll(selector)]
			.filter(el => !el.classList.contains('js-reveal'));

		if (!elements.length) return;

		let x = '0px';
		let y = '0px';

		switch (settings.origin) {
			case 'left': x = `-${settings.distance}`; break;
			case 'right': x = settings.distance; break;
			case 'top': y = `-${settings.distance}`; break;
			case 'bottom': y = settings.distance; break;
		}

		const observer = new IntersectionObserver((entries, observer) => {

			// stagger po grupi elemenata koji se pojave istovremeno
			let batchIndex = 0;

			entries.forEach(entry => {
				const el = entry.target;

				if (entry.isIntersecting) {

					const delay = settings.delay + batchIndex * settings.interval;
					batchIndex++;

					el.style.setProperty('--sr-delay', `${delay}ms`);
					el.classList.add('is-revealed');

					if (!settings.reset) {
						observer.unobserve(el);

						// nakon animacije skini klase da hover transition iz style.css opet radi
						setTimeout(() => {
							el.classList.remove('js-reveal', 'is-revealed');
							VARS.forEach(v => el.style.removeProperty(v));
						}, settings.duration + delay + 50);
					}

				} else if (settings.reset) {
					el.classList.remove('is-revealed');
				}
			});

		}, {
			threshold: settings.viewFactor
		});

		elements.forEach(element => {

			element.style.setProperty('--sr-x', x);
			element.style.setProperty('--sr-y', y);
			element.style.setProperty('--sr-scale', settings.scale);
			element.style.setProperty('--sr-opacity', settings.opacity);
			element.style.setProperty('--sr-duration', `${settings.duration}ms`);
			element.style.setProperty('--sr-delay', `${settings.delay}ms`);
			element.style.setProperty('--sr-easing', settings.easing);

			element.classList.add('js-reveal');

			observer.observe(element);
		});
	}

	return { reveal };

})();


/* ===== GENERIC FUNCTION ====== */

function reveal(selector, options = {}) {
	sr.reveal(selector, options);
}


/* ===== PRESETS ===== */

export function revealLeft(selector) {
	reveal(selector, {
		origin: 'left',
		distance: '10px',
		duration: 800,
		easing: 'ease'
	});
}

export function revealRight(selector) {
	reveal(selector, {
		origin: 'right',
		distance: '40px'
	});
}

export function revealTop(selector) {
	reveal(selector, { origin: 'top', distance: '40px' });
}

export function revealBottom(selector) {
	reveal(selector, { origin: 'bottom', distance: '40px' });
}

export function revealCustom(selector, options) {
	reveal(selector, options);
}


/* =========================================
   SEQUENTIAL ANIMATIONS
   (redoslijed je bitan: prvi poziv koji uhvati element ima prednost)
========================================= */

// DIVIDER U HERO SEKCIJI (mora prije grupe s .reveal)
reveal('.page-hero__divider', {
	scale: 0.1,
	distance: '0px',
	duration: 500,
	delay: 200,
	easing: 'ease'
});


// LOGO
reveal('.reveal-scale-logo', {
	scale: 0.1,
	duration: 1000,
	distance: '0px',
	easing: 'ease',
	origin: 'bottom'
});


// NASLOVI
reveal('.reveal-heading', {
	scale: 0.85,
	duration: 800,
	distance: '0px',
	easing: 'ease'
});

// SECTION-LINE
reveal('.section-line', {
	scale: 0.25,
	duration: 800,
	distance: '0px',
	easing: 'ease'
});


// ELEMENTI SLIJEVA
reveal(
	'.equipment__data, .gallery-item, .contact-item, .grupacije__cijena',
	{
		origin: 'left',
		distance: '40px',
		duration: 400,
		interval: 50,
		easing: 'ease'
	}
);

// CONTAINER SCALE
reveal('.package-wrapper, .packages__card, .reveal-container', {
	scale: 0.9,
	distance: '0px',
	duration: 800,
	interval: 80,
	easing: 'ease'
});

// ELEMENTI OD DOLJE
reveal(
	'.reveal',
	{
		origin: 'bottom',
		distance: '100px',
		duration: 800,
		interval: 80,
		easing: 'ease',
	}
);

reveal('.reveal-scale-optimized', {
	scale: 0.85,
	duration: 800,
	distance: '0px',
	easing: 'ease'
});


/* ===== HTML TRIGGERS ===== */

revealLeft('.reveal-left');
revealRight('.reveal-right');
revealTop('.reveal-top');
revealBottom('.reveal-bottom');
