// NAVBAR TOGGLE MENU
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.getElementById('ftco-nav');

function toggleNavbarCollapse() {
  navbarCollapse.classList.toggle('show');
  navbarCollapse.style.maxHeight = navbarCollapse.classList.contains('show') ? navbarCollapse.scrollHeight + 'px' : '0';
}

navbarToggler.addEventListener('click', toggleNavbarCollapse);

function checkScreenWidth() {
  var screenWidth = window.innerWidth;

  if (screenWidth >= 991.98) {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.toggle('show');
    }
    navbarCollapse.style.overflow = 'visible';
    navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + 'px';
    navbarCollapse.style.transition = 'none';
  } else {
    navbarCollapse.style.maxHeight = navbarCollapse.classList.contains('show') ? navbarCollapse.scrollHeight + 'px' : '0';
    navbarCollapse.style.overflow = 'hidden';
    navbarCollapse.style.transition = 'max-height 0.4s ease-in-out';
  }
}

window.addEventListener('resize', checkScreenWidth);

checkScreenWidth();
