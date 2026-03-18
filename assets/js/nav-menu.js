/*===== nav-menu.js =====*/
/*===== MENU SHOW =====*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      toggle.classList.toggle('active');   // animacija hamburgera
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(n => n.addEventListener('click', () => {
  const navMenu = document.getElementById('nav-menu');
  const toggle = document.getElementById('nav-toggle');

  if (navMenu) navMenu.classList.remove('show');
  if (toggle) toggle.classList.remove('active');
}));


