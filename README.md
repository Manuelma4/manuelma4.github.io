# manuelma4.github.io

Personal portfolio / virtual CV for **Manuel David Maya Rosero** — AI Data Software Engineer.

Live at [manuelma4.github.io](https://manuelma4.github.io/).

## Stack

Static site, no build step, no framework, no dependencies at runtime:

- `index.html` — page skeleton (nav, hero, section containers)
- `assets/css/styles.css` — design system (light/dark themes via CSS custom properties)
- `assets/js/content.js` — all copy, in Spanish / English / French (`window.SITE`)
- `assets/js/app.js` — renders `content.js` into the DOM, handles language switching, theme toggle, scroll reveal, mobile nav, lightbox
- `assets/img/` — project charts and icons
- `assets/files/` — downloadable CV (PDF)

## Editing content

All text lives in `assets/js/content.js`, keyed by section and language (`{ es, en, fr }`). Edit copy there — `index.html`/`app.js` shouldn't need to change for content updates. Timeline entries (education/experience), projects, coursework, skills and certifications are each arrays of records rendered by `app.js`.

## Running locally

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deploying

This repo is a GitHub Pages user site — pushes to `main` deploy automatically.
