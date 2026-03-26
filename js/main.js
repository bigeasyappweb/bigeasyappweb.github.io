// ===== Mobile Nav Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.textContent = isOpen ? '\u2715' : '\u2630';
  });

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '\u2630';
    });
  });
}

// ===== Navbar scroll shadow =====
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// ===== Screenshot Carousel Dots =====
const carousel = document.querySelector('.screenshots-carousel');
const dots = document.querySelectorAll('.carousel-dot');

if (carousel && dots.length) {
  const updateDots = () => {
    const scrollLeft = carousel.scrollLeft;
    const itemWidth = carousel.querySelector('.screenshot-item')?.offsetWidth || 1;
    const gap = 20; // 1.25rem approx
    const index = Math.round(scrollLeft / (itemWidth + gap));
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  carousel.addEventListener('scroll', updateDots, { passive: true });
  updateDots();

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      const item = carousel.querySelectorAll('.screenshot-item')[i];
      if (item) {
        item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  });
}

// ===== Smooth scroll fallback for older browsers =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
