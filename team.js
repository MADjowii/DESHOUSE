/* ============================================
   team.js — Team Grid
   To add/edit team members: update the TEAM
   array below directly.
   ============================================ */

const TEAM = [
  {
    name: "Helen Charles",
    role: "Chief Executive Officer",
    alt: "CEO of DES HOUSE"
  },
  {
    "name": "Abdulkabir Mohammed",
    "role": "Chief Operating Officer",
    "alt": "COO of DES HOUSE"
  },
  {
    "name": "Kaaya Allotey",
    "role": "Chief Strategy Officer",
    "alt": "Chief Strategy Officer at DES HOUSE"
  },
  {
    "name": "Joseph Madaki",
    "role": "Director of Sales & Biz Dev",
    "alt": "Director of Sales at DES HOUSE"
  },
  {
    "name": "Nathália Rodrigues",
    "role": "Pre-Production & Admin",
    "alt": "Admin and Pre-Production at DES HOUSE"
  }
];

export function initTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;

  grid.innerHTML = TEAM.map((member, i) => `
    <article class="team-card reveal reveal-delay-${i + 1}">
      <img
        class="team-photo"
        src="${member.photo}"
        alt="${member.alt}"
        loading="lazy"
        width="500"
        height="320"
      >
      <div class="team-info">
        <h3 class="team-name">${member.name}</h3>
        <p class="team-role">${member.role}</p>
        <div class="team-bar" aria-hidden="true"></div>
      </div>
    </article>
  `).join('');
}
