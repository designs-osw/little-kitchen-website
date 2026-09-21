# Little Kitchen — Website

A static site for Little Kitchen (Shanghainese restaurant, Staten Island). Plain HTML/CSS/JS — no build step, no framework, no dependencies.

## Structure

```
index.html      Home
menu.html       Menu
gallery.html    Gallery
hours.html      Hours & Location
contact.html    Contact
css/styles.css  Shared styles + design tokens
js/main.js      Language toggle, reviews slider, menu tabs, video-loop handling
images/         Photos, icons, logo
videos/         Hero background videos (Home + Menu)
```

## Running locally

No build tools needed. Easiest option: install the free **Live Server** extension in VS Code, open this folder, right-click `index.html` → "Open with Live Server". It auto-refreshes on save.

Alternative (no VS Code): from a terminal in this folder, run `python3 -m http.server 8000`, then visit `http://localhost:8000`.

Don't just double-click the HTML files — some things (like the video autoplay) behave better served over `http://` than opened directly as a `file://` path.

## Putting this on GitHub

```
git init
git add .
git commit -m "Initial site"
git remote add origin <your-repo-url>
git push -u origin main
```

Then, in the repo on GitHub: **Settings → Pages** → set source to the `main` branch, to get a free live URL at `yourusername.github.io/<repo-name>`.

## Known placeholders / TODOs

- Menu items are marked `[DISH NAME]` / `[PRICE]` — real menu content still needs to go in.
- Hero videos are stand-ins, not final footage.
- The "Follow Us on Instagram" section on Home is a static placeholder — for a real live-syncing feed, connect a service like SnapWidget or Behold.so.
- The map on the Hours page is a placeholder box — swap in a real embed (e.g. Google Maps) when ready.
- Contact form doesn't submit anywhere yet — needs a form backend (e.g. Formspree, Netlify Forms) or a server endpoint once hosted somewhere with backend support.
- Address/hours are real; verify before launch in case anything's changed.
