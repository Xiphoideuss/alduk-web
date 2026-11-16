/*===== scroll-top-btn.js =====*/
/*===== SCROLL TOP =====*/

const scrollTop = document.getElementById('scroll-top');

if (scrollTop) {

  const checkScroll = () => {
    if (window.scrollY >= 300) {
      scrollTop.classList.add('show-scroll');
    } else {
      scrollTop.classList.remove('show-scroll');
    }
  };

  window.addEventListener('scroll', checkScroll);

  // Provjera odmah nakon učitavanja
  checkScroll();

  scrollTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

}