# DES HOUSE — Website

Entertainment & Sports Marketing Agency website.

## File Structure

```
/
├── index.html              # Markup only — no inline styles or JS logic
├── css/
│   ├── variables.css       # CSS custom properties & reset
│   ├── base.css            # Buttons, loader, footer, marquee, stats
│   ├── layout.css          # Nav, hero, services, work, about, team
│   └── components.css      # Contact form, modal, animations, responsive
├── js/
│   ├── main.js             # Entry point — imports & inits all modules
│   ├── nav.js              # Navigation & mobile menu
│   ├── modal.js            # Work grid rendering & case study modal
│   ├── team.js             # Team grid rendering
│   ├── scroll.js           # Scroll reveal & stat counter animation
│   └── form.js             # Contact form with Formspree integration
├── data/
│   ├── projects.json       # All work/case study data — edit here
│   └── team.json           # Team member data — edit here
└── assets/
    └── images/             # Local images (replace Unsplash placeholders)
```

## Updating Content

### Add / Edit a Project
Open `data/projects.json` and add or edit an entry. Each project supports:
- `category`, `title`, `client`, `year`, `services`, `industry`
- `img` — hero image URL
- `brief`, `approach` — body copy
- `gallery` — array of 2 image URLs
- `results` — array of `{ "number": "...", "label": "..." }`

### Add / Edit a Team Member
Open `data/team.json` and add or edit an entry:
- `name`, `role`, `photo`, `alt`

## Contact Form Setup (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form → copy the endpoint ID (e.g. `xpwzgkna`)
3. Open `js/form.js` and replace `YOUR_FORM_ID` with your ID:
   ```js
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpwzgkna';
   ```
4. Submissions will appear in your Formspree dashboard and be emailed to you

## Showreel Video Setup

1. Upload your showreel to YouTube
2. Copy the video ID from the URL (e.g. `dQw4w9WgXcQ`)
3. Open `js/main.js` and replace `YOUR_VIDEO_ID`:
   ```js
   'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0'
   ```

## Deployment (GitHub Pages)

The site uses ES modules (`type="module"`), which require a server to run locally.
Use one of these local dev options:

```bash
# Option 1: VS Code Live Server extension (easiest)
# Right-click index.html → Open with Live Server

# Option 2: Python
python3 -m http.server 8000

# Option 3: Node
npx serve .
```

For GitHub Pages, push to your `main` branch and ensure GitHub Pages is set
to serve from the root of `main` in your repo Settings → Pages.

> **Note:** GitHub Pages serves files from the root correctly.
> ES module `fetch()` calls to `./data/*.json` work fine when deployed.
