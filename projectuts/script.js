// =============================================
//  script.js – Muhammad Aminuddin Portfolio
// =============================================

// --- MOBILE NAV TOGGLE ---
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// --- CONTACT FORM SUBMIT ---
function handleSubmit(event) {
  event.preventDefault();
  const successMsg = document.getElementById('successMsg');
  if (successMsg) {
    successMsg.style.display = 'block';
    event.target.reset();
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 4000);
  }
}

// --- SCROLL ANIMATION (Intersection Observer) ---
const animateOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  const targets = document.querySelectorAll(
    '.project-card, .portfolio-item, .service-card, .edu-item, .contact-item'
  );

  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    observer.observe(el);
  });
};

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', animateOnScroll);
