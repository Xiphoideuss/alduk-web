// ===== lightbox.js =====
// ===== LIGHTBOX FUNCTIONALITY =====

function initLightbox() {

  const links = document.querySelectorAll('.lightbox-item');
  if (!links.length) return;

  let images = [];
  let currentIndex = 0;

  let lightbox = document.getElementById('lightbox');

  // kreira lightbox ako ne postoji
  if (!lightbox) {

    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';

    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img class="lightbox-img" src="" alt="">
        <div class="lightbox-counter"></div>
      </div>

      <button class="lightbox-close">&times;</button>
      <button class="lightbox-prev">&#10094;</button>
      <button class="lightbox-next">&#10095;</button>
    `;

    document.body.appendChild(lightbox);
  }

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCounter = lightbox.querySelector('.lightbox-counter');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  const lightboxPrev = lightbox.querySelector('.lightbox-prev');
  const lightboxNext = lightbox.querySelector('.lightbox-next');

  // klik na sliku
  links.forEach(link => {

    link.addEventListener('click', function (e) {

      e.preventDefault();

      const category = link.closest('.rental-category');
      const scope = category || document;

      const scopedLinks = scope.querySelectorAll('.lightbox-item');

      images = Array.from(scopedLinks).map(item => {
        const img = item.querySelector('img');
        return {
          src: item.getAttribute('href'),
          alt: img ? img.alt : ''
        };
      });

      currentIndex = Array.from(scopedLinks).indexOf(link);

      openLightbox();

    });

  });

  function openLightbox() {

    if (!images.length) return;

    updateLightbox();

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {

    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {

    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }

  function showNext() {

    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }

  function updateLightbox() {

    const image = images[currentIndex];

    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;

    lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  // kontrole
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', showPrev);
  lightboxNext.addEventListener('click', showNext);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // tipkovnica
  document.addEventListener('keydown', (e) => {

    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // swipe za mobilne uređaje
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  lightbox.addEventListener('touchend', (e) => {

    touchEndX = e.changedTouches[0].screenX;

    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) showNext();
      else showPrev();
    }
  });
}

document.addEventListener('DOMContentLoaded', initLightbox);