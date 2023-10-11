/* RELOADING THE PAGE */
window.onload = function () {
  window.scrollTo(0, 0);
}

/* ANIMATIONS */
function animateOnScroll() {
  var reveals = document.querySelectorAll(".animation-div");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible && !reveals[i].classList.contains("active")) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", animateOnScroll);

animateOnScroll();

const heroSectionHeight = document.querySelector('.hero').offsetHeight;

/* STICKY NAV BAR */
const navbar = document.querySelector('.navbar');

function toggleStickyNav() {
  if (window.scrollY >= heroSectionHeight) {
    if (!navbar.classList.contains('sticky-nav')) {
      navbar.classList.add('sticky-nav');
      navbar.classList.add('animation-active');
    }
  } else {
    if (navbar.classList.contains('sticky-nav')) {
      navbar.classList.remove('animation-active');
      navbar.classList.remove('sticky-nav');
    }
  }
}

window.addEventListener('scroll', toggleStickyNav);

toggleStickyNav();

/* GO TO TOP BUTTON */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY >= heroSectionHeight) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});