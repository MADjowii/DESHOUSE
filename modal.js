/* ============================================
   modal.js — Work Case Study Modal
   To add/edit projects: update the PROJECTS
   array below directly.
   ============================================ */

const PROJECTS = [
  {
    category: "Music Campaign",
    title: "Placeholder Project Title",
    client: "Client Name",
    year: "2025",
    services: "Campaign Strategy, Content Production",
    industry: "Music / Entertainment",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80",
    brief: "Placeholder brief — describe the client's challenge, goals, and what they came to DES HOUSE looking for.",
    approach: "Placeholder approach — describe DES HOUSE's creative strategy, the key ideas, the rollout plan, and what made this campaign unique.",
    gallery: [
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ],
    results: [
      { number: "2.5M+", label: "Impressions" },
      { number: "340%", label: "Engagement Lift" },
      { number: "#1", label: "Trending" }
    ]
  },
  {
    category: "Sports Marketing",
    title: "Placeholder Project Title",
    client: "Client Name",
    year: "2025",
    services: "Brand Identity, Digital & Social",
    industry: "Sports",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
    brief: "Placeholder brief — describe the sporting brand or athlete's challenge.",
    approach: "Placeholder approach — detail the creative direction and campaign mechanics.",
    gallery: [
      "https://images.unsplash.com/photo-1461896836934-bd45ba248c88?w=800&q=80",
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80"
    ],
    results: [
      { number: "1.8M", label: "Reach" },
      { number: "45%", label: "Brand Recall" },
      { number: "12K", label: "New Followers" }
    ]
  },
  {
    category: "Brand Identity",
    title: "Placeholder Project Title",
    client: "Client Name",
    year: "2025",
    services: "Brand Identity, Creative Direction",
    industry: "Fashion / Lifestyle",
    img: "https://unsplash.com/photos/black-camera-on-top-of-brown-desk-9SyOKYrq-rE",
    brief: "Placeholder brief — describe the brand's vision and identity challenge.",
    approach: "Placeholder approach — walk through the visual identity process.",
    gallery: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
    ],
    results: [
      { number: "100%", label: "Brand Refresh" },
      { number: "3x", label: "Social Growth" },
      { number: "28%", label: "Revenue Increase" }
    ]
  },
  {
    category: "Event Activation",
    title: "Placeholder Project Title",
    client: "Client Name",
    year: "2025",
    services: "Events & Experiences, Content Production",
    industry: "Culture / Entertainment",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80",
    brief: "Placeholder brief — describe the event concept and goals.",
    approach: "Placeholder approach — detail the experiential design and programming.",
    gallery: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80"
    ],
    results: [
      { number: "5K+", label: "Attendees" },
      { number: "92%", label: "Satisfaction" },
      { number: "500K", label: "Social Reach" }
    ]
  },
  {
    category: "Fashion Campaign",
    title: "Placeholder Project Title",
    client: "Client Name",
    year: "2025",
    services: "Campaign Strategy, Talent Partnerships",
    industry: "Fashion",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    brief: "Placeholder brief — describe the fashion brand's campaign needs.",
    approach: "Placeholder approach — describe the talent partnerships and visual direction.",
    gallery: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
    ],
    results: [
      { number: "4M+", label: "Views" },
      { number: "18%", label: "Conversion Rate" },
      { number: "60+", label: "Press Mentions" }
    ]
  },
  {
    category: "Digital Campaign",
    title: "Placeholder Project Title",
    client: "Client Name",
    year: "2025",
    services: "Digital & Social, Campaign Strategy",
    industry: "Tech / Culture",
    img: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=1200&q=80",
    brief: "Placeholder brief — describe the digital challenge and objectives.",
    approach: "Placeholder approach — outline the multi-platform strategy.",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    ],
    results: [
      { number: "8M", label: "Impressions" },
      { number: "220%", label: "ROI" },
      { number: "#3", label: "App Store Rank" }
    ]
  }
];

export function initModal() {
  renderWorkGrid();

  document.getElementById('modalBg').addEventListener('click', (e) => {
    if (e.target === document.getElementById('modalBg')) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function renderWorkGrid() {
  const grid = document.getElementById('workGrid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p, i) => `
    <article
      class="work-item reveal${i > 0 ? ` reveal-delay-${i}` : ''}"
      role="button"
      tabindex="0"
      aria-label="View case study: ${p.title}"
      data-index="${i}"
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
  const p = PROJECTS[i];
  const modal = document.getElementById('modal');
  const bg = document.getElementById('modalBg');

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
  document.querySelector('.modal-x').focus();
}

export function closeModal() {
  const bg = document.getElementById('modalBg');
  bg.classList.remove('active');
  bg.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
