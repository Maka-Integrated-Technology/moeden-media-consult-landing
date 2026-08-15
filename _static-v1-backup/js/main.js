// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Service cards — accordion (one open at a time), click/keyboard to toggle
const serviceCards = Array.from(document.querySelectorAll('.service-card'));

function openServiceCard(card, { scroll = false } = {}) {
  serviceCards.forEach(c => c.classList.toggle('is-open', c === card));
  if (scroll) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

serviceCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.service-card__explore')) return; // let the link work
    const alreadyOpen = card.classList.contains('is-open');
    if (alreadyOpen) {
      card.classList.remove('is-open');
    } else {
      openServiceCard(card);
    }
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

// Deep-link support: #service-xxx opens & scrolls to the matching card
function handleServiceHash() {
  const hash = window.location.hash.replace('#', '');
  const card = document.getElementById(hash);
  if (card && card.classList.contains('service-card')) {
    openServiceCard(card, { scroll: true });
  }
}
window.addEventListener('hashchange', handleServiceHash);

// Process timeline — connector labels + step cards stay in sync
const stepLabels = document.querySelectorAll('.process-connector .step-label');
const stepCards = document.querySelectorAll('.process-step');

function activateStep(n) {
  stepLabels.forEach(l => l.classList.toggle('active', l.dataset.step === n));
  stepCards.forEach(c => c.classList.toggle('active', c.dataset.step === n));
}

stepLabels.forEach(label => {
  label.addEventListener('click', () => activateStep(label.dataset.step));
});
stepCards.forEach(card => {
  card.addEventListener('click', () => activateStep(card.dataset.step));
  card.addEventListener('mouseenter', () => activateStep(card.dataset.step));
});
