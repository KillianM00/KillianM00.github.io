# Killian Miller — Portfolio

Personal portfolio at [kmiller.dev](https://kmiller.dev/), built with semantic HTML and CSS and hosted on GitHub Pages.

The site presents selected public projects, private research areas, technical interests, and contact information. Content and navigation work without JavaScript.

## Preview locally

Requires Python 3. From the repository directory:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://localhost:8000/). No package installation or build step is required.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Content, navigation, responsive styles, and page metadata |
| `favicon.svg` | Portfolio monogram |
| `CNAME` | GitHub Pages custom domain |

## Before publishing

- Review at narrow mobile and desktop widths, including 200% zoom.
- Use the keyboard to follow the skip link, navigation, and project links; verify visible focus.
- Check the page with JavaScript disabled and in print preview.
- Verify each external project link in a signed-out browser.
- Keep project descriptions consistent with the source and distinguish private work from publicly inspectable projects.

## Deployment

The existing GitHub Pages deployment uses `main`. Merging a change into `main` publishes it through the Pages build and deployment workflow. Keep `CNAME` set to `kmiller.dev`.
