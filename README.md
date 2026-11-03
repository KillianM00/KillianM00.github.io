# Killian Miller — Security and Systems Portfolio

A static portfolio at [kmiller.dev](https://kmiller.dev/), built with semantic HTML and responsive CSS and hosted on the existing GitHub Pages deployment.

The site leads with cybersecurity and systems projects, then connects implementation details to public technical case studies. Repository visibility, project maturity, and validation limits are stated explicitly. Content and navigation work without JavaScript.

## Local preview

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000`. There is no package installation or build step.

## Source map

- `index.html`: project selection, research context, and contact information.
- `projects/*/index.html`: technical case studies and evidence boundaries.
- `styles.css`: shared responsive, keyboard-focus, reduced-motion, and print styles.
- `favicon.svg`: portfolio monogram.
- `CNAME`: existing custom domain, `kmiller.dev`.

## Publishing checks

Review mobile and desktop layouts, keyboard navigation, local links, and print output. Keep private-source links out of public navigation; link to the public case study instead. Update technical claims when implementation or validation evidence changes. Do not publish raw research captures or credentials.

## Deployment

GitHub Pages publishes the root of `main`. Keep the existing CNAME and `.nojekyll` files. This site presents research; publishing it does not change the visibility or deployment state of any featured application.
