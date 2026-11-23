# AssemblyA

<!-- fork-status -->

> **Fork note:** This is the [LLazyEmail/assemblya](https://github.com/LLazyEmail/assemblya) working fork of [atherdon/assemblya](https://github.com/atherdon/assemblya). Upstream is the original docs site; this fork is where modernization, CI, and EN/UK sync work happens.

Docusaurus documentation site for AssemBLYA (EN + UK).

## Requirements

- Node.js 26 (see `.nvmrc`)
- npm

## Development

```bash
npm ci
npm start          # English
npm run docs:uk    # Ukrainian locale
npm run build
npm run typecheck
npm run format:check
npm run check:images
npm run check:i18n
npm run lint                 # ESLint
npm run check:build-images   # after npm run build: verify every <img> in build/ resolves
npm run generate:docs-index  # regenerate docs/pages-index.md (CI does this on main)
```

## CI

Every workflow in `.github/workflows/` is a thin caller of a reusable workflow or action from [`LLazyEmail/documentation-actions`](https://github.com/LLazyEmail/documentation-actions). Where a short-name alias exists, the caller uses it: `deploy.yml` calls `reusable-pages-deploy` (same inputs as `reusable-docusaurus-pages-deploy`), currently pinned at `@v1`. [PR #112](https://github.com/atherdon/assemblya/pull/112) bumps that pin to `@v2`.

### On pull requests

| Workflow             | What it runs                                                                          | Red on problems?          |
| -------------------- | ------------------------------------------------------------------------------------- | ------------------------- |
| Test deployment      | Docusaurus build                                                                      | yes                       |
| Build image check    | build, then `scripts/check-build-images.mjs` with `scripts/build-image-allowlist.txt` | yes                       |
| Format check         | `npm run format:check` (Prettier)                                                     | yes                       |
| Typecheck            | `npm run typecheck`                                                                   | yes                       |
| Markdown lint        | markdownlint on README, CHANGELOG, AGENTS, CONTRIBUTING, `docs/`, `i18n/`             | yes                       |
| Link check           | lychee on README, CHANGELOG, `docs/`, `i18n/` (also weekly, opening an issue)         | yes                       |
| Missing images check | `npm run check:images`                                                                | advisory (always exits 0) |
| i18n sync check      | `npm run check:i18n`                                                                  | advisory (always exits 0) |
| Star request comment | one comment on newly opened PRs (`pull_request_target`)                               | no                        |

### On `main`

| Workflow                | What it does                                                   |
| ----------------------- | -------------------------------------------------------------- |
| Update changelog        | regenerates `CHANGELOG.md` with auto-changelog and commits it  |
| Update docs pages index | regenerates `docs/pages-index.md` and commits it               |
| Deploy                  | builds and publishes the site (`reusable-pages-deploy`)        |
| Auto-rebase open PRs    | every 6 hours, updates open PR branches that are behind `main` |

Generated files (`CHANGELOG.md`, `docs/pages-index.md`) are committed by CI, so don't edit them by hand.

Broken or missing media images warn but do not fail the Docusaurus build (`onBrokenMarkdownImages: 'warn'`). The build image check is the gate for those. Known-unrecoverable assets are listed in `scripts/build-image-allowlist.txt` and tracked in #105.
