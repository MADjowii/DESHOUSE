/* ============================================
   main.js — Entry Point
   ============================================ */

import { initNav } from './nav.js';
import { initModal, closeModal } from './modal.js';
import { initTeam } from './team.js';
import { initScrollReveal } from './scroll.js';
import { initForm } from './form.js';

/* --- Loader --- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2200);
});

/* --- Cursor Glow --- */
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

/* --- Smooth Scroll --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* --- Showreel --- */
function playReel() {
  document.getElementById('reelIframe').src =
    'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0';
  document.getElementById('reelPlaceholder').style.display = 'none';
  document.getElementById('reelEmbed').style.display = 'block';
}
window.playReel = playReel;
window.closeModal = closeModal;

/* --- Init --- */
initNav();
initModal();
initTeam();
initScrollReveal();
initForm();
