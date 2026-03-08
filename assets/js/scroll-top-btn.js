/*===== scroll-top-btn.js =====*/
/*===== SCROLL TOP =====*/
const scrollTop = document.getElementById('scroll-top');

if (scrollTop) {

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
      scrollTop.classList.add('show-scroll');
    } else {
      scrollTop.classList.remove('show-scroll');
    }
  });

  scrollTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

}