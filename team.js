/* ============================================
   team.js — Render team cards from JSON
   ============================================ */

export async function initTeam() {
  const grid = document.getElementById('teamGrid');
  if (!grid) return;

  const res = await fetch('./team.json');
  const team = await res.json();

  grid.innerHTML = team.map((member, i) => `
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
