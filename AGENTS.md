# AGENTS.md — guide for AI coding agents

This repository is the **LLazyEmail** fork of AssemBLYA docs (Docusaurus 3, EN + UK locales).

## Goals

1. Keep EN (`docs/`) and UK (`i18n/uk/...`) in sync when editing content.
2. Prefer documentation-actions reusable workflows for CI.
3. Do not delete content without an explicit request.

## Setup

```bash
npm ci
npm start          # EN
npm run docs:uk    # UK locale
npm run build
npm run typecheck
npm run format:check
npm run check:images
npm run check:i18n
```

Node 26 (see `.nvmrc` and CI). Package manager: npm.

## Media

Some image references in the docs point to files that are missing or corrupt in this fork (notably under `static/img/hornets/cheap/`). Builds warn but do not fail (`onBrokenMarkdownImages: 'warn'`). Restore binaries in a follow-up; do not invent replacements.

## CI

Workflows under `.github/workflows/` call reusable workflows from `LLazyEmail/documentation-actions@v2`. Prefer short-name aliases from [DA naming](https://github.com/LLazyEmail/documentation-actions/blob/main/docs/naming.md) when they exist: `reusable-pages-deploy`, `reusable-npm-check`, and `reusable-auto-rebase`. Pass `node-version: '26'` to match `.nvmrc`. Auto-rebase is opted into `delegate-bot-rebase`, `resolve-deleted-on-main`, `fail-on-conflict: false`, `conflict-label: has-conflicts`, `fail-on-skipped-conflicts: true`, `report-failing-checks: true`, and `failing-checks-label: checks-failing`. Failing check names need the `AUTO_REBASE_TOKEN` secret (a personal access token that can read checks); without it the workflow uses GitHub's "unstable" merge state.

## Style

- Prettier for formatting (`npm run format` / `format:check`).
- ESLint for JS/TS.
- Markdownlint config in `.markdownlint.json`.
- EditorConfig is present.
