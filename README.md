# Portfolio

Personal site for Aditya Rungta. Plain HTML and CSS — no build step, no
JavaScript, no dependencies.

## Files

- `index.html` — the whole site
- `style.css` — styles (light/dark via `prefers-color-scheme`)
- `resume.pdf` — downloadable résumé
- `favicon.svg` — tab icon

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```sh
python -m http.server
```

Then visit <http://localhost:8000>.

## Deploying

Everything is static at the repo root, so GitHub Pages works out of the box:
**Settings → Pages → Deploy from a branch**, pick `main` and `/ (root)`.
