# Killian Miller — Security and Systems Portfolio

A static portfolio at [kmiller.dev](https://kmiller.dev/), built with semantic HTML and responsive CSS and hosted on the existing GitHub Pages deployment.

The site leads with independent bug bounty research and an Anthropic responsible-disclosure acknowledgment, followed by cybersecurity and systems engineering case studies. Repository visibility, project maturity, and validation limits are stated explicitly. Content and navigation work without JavaScript. The default theme is white and blue; an accessible toggle switches to black and blue and stores the preference locally across pages and visits.

## Local preview

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000`. There is no package installation or build step.

## Source map

- `index.html`: project selection, research context, and contact information.
- `research/anthropic/index.html`: research methods and disclosure acknowledgment.
- `projects/*/index.html`: technical case studies and evidence boundaries.
- `styles.css`: light/dark color tokens, responsive layout, keyboard focus, and print styles.
- `theme.js`: theme selection, local preference persistence, and accessible toggle state.
- `favicon.svg`: portfolio monogram.
- `CNAME`: existing custom domain, `kmiller.dev`.

## Publishing checks

Review both themes on mobile and desktop, keyboard navigation, local links, and print output. Verify the preference survives navigation and reload, and that the page remains usable when JavaScript or browser storage is disabled. Keep private-source links out of public navigation; link to the public case study instead. Update technical claims when implementation or validation evidence changes. Do not publish raw research captures or credentials.

## Deployment

GitHub Pages publishes the root of `main`. Keep the existing CNAME and `.nojekyll` files. This site presents research; publishing it does not change the visibility or deployment state of any featured application.
