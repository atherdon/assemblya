# AssemblyA

Documentation site built with [Docusaurus](https://docusaurus.io/).

Live site: https://atherdon.github.io/assemblya/

## Getting started

```bash
npm install
npm start
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the local development server |
| `npm run build` | Build the static site into `build/` |
| `npm run serve` | Serve the production build locally |
| `npm run clear` | Clear the Docusaurus cache |

## GitHub Pages deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys it with GitHub Pages.

Pull requests to `main` run `.github/workflows/test-deploy.yml` to verify the site builds.

After merging, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.
