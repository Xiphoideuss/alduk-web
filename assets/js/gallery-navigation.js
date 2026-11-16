// ===== GALLERY NAVIGATION =====

// Navigacija između galerija
document.addEventListener('click', (e) => {

  const link = e.target.closest('.gallery-nav__link');

  if (!link) return;

  // Ostavi otvaranje u novoj kartici i slično
  if (
    e.button !== 0 ||
    e.ctrlKey ||
    e.metaKey ||
    e.shiftKey ||
    e.altKey
  ) return;

  e.preventDefault();

  if (link.href === window.location.href) return;

  window.location.replace(link.href);

});


// ===== SCROLL RESET ON REFRESH =====

const navigationEntry = performance.getEntriesByType('navigation')[0];

if (navigationEntry?.type === 'reload') {

  const root = document.documentElement;
  const originalScrollBehavior = root.style.scrollBehavior;

  history.scrollRestoration = 'manual';

  const forceTop = () => {
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
  };

  let resetDone = false;

  const resetToTop = () => {

    if (resetDone) return;
    resetDone = true;

    forceTop();

    requestAnimationFrame(() => {

      forceTop();

      requestAnimationFrame(() => {

        forceTop();

        history.scrollRestoration = 'auto';
        root.style.scrollBehavior = originalScrollBehavior;

      });

    });

  };

  forceTop();

  window.addEventListener('load', resetToTop, { once: true });
  window.addEventListener('pageshow', resetToTop, { once: true });

}

