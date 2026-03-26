/* ============================================
   modal.js — Work Case Study Modal (Fixed + Accessible)
   ============================================ */

let projects = [];
let lastFocusedEl = null; // store the opener element for accessibility

export async function initModal() {
  const res = await fetch('./data/projects.json');
  projects = await res.json();

  renderWorkGrid();

  // Close on backdrop click
  document.getElementById('modalBg').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalBg')) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function renderWorkGrid() {
  const grid = document.getElementById('workGrid');
  if (!grid) return;

  grid.innerHTML = projects.map((p, i) => `
    <article
      class="work-item reveal${i > 0 ? ` reveal-delay-${i}` : ''}"
      role="button"
      tabindex="0"
      aria-label="View case study: ${p.title}"
      data-index="${i}"
      data-open-modal
    >
      <img
        class="work-img"
        src="${p.img}"
        alt="${p.category} project for ${p.client}"
        loading="lazy"
      >
      <div class="work-overlay" aria-hidden="true">
        <span class="work-category">${p.category}</span>
        <h3 class="work-title">${p.title}</h3>
        <p class="work-client">${p.client} — ${p.year}</p>
        <div class="work-view">View Case Study <span aria-hidden="true">&#8594;</span></div>
      </div>
      <div class="work-bar" aria-hidden="true"></div>
    </article>
  `).join('');

  // Click + keyboard open
  grid.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('click', () => openModal(+item.dataset.index));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(+item.dataset.index);
      }
    });
  });
}

export function openModal(i) {
  const p = projects[i];
  const modal = document.getElementById('modal');
  const bg = document.getElementById('modalBg');

  // Save opener for accessibility
  lastFocusedEl = document.activeElement;

  document.getElementById('mImg').src = p.img;
  document.getElementById('mImg').alt = `${p.category} campaign hero image`;
  document.getElementById('mCat').textContent = p.category;
  document.getElementById('mTitle').textContent = p.title;
  document.getElementById('mClient').textContent = p.client;
  document.getElementById('mYear').textContent = p.year;
  document.getElementById('mServ').textContent = p.services;
  document.getElementById('mInd').textContent = p.industry;
  document.getElementById('mBrief').textContent = p.brief;
  document.getElementById('mApproach').textContent = p.approach;

  document.getElementById('mGallery').innerHTML = p.gallery
    .map(src => `<img src="${src}" alt="Project gallery image" loading="lazy">`)
    .join('');

  document.getElementById('mResults').innerHTML = p.results
    .map(r => `
      <div>
        <div class="modal-rn">${r.number}</div>
        <div class="modal-rl">${r.label}</div>
      </div>
    `).join('');

  bg.classList.add('active');
  bg.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.scrollTop = 0;

  // Move focus into the modal
  document.querySelector('.modal-x').focus();
}

export function closeModal() {
  const bg = document.getElementById('modalBg');

  // Remove focus from inside modal
  document.activeElement.blur();

  bg.classList.remove('active');
  bg.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Restore focus to opener
  if (lastFocusedEl) lastFocusedEl.focus();
}
