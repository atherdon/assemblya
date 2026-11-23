# Contributing

Thanks for helping with AssemBLYA docs on the **LLazyEmail/assemblya** fork.

## Workflow

1. Branch from `main` on this fork.
2. Keep PRs small and single-purpose; open as **draft** until CI is green.
3. Do **not** open PRs against upstream `atherdon/assemblya` from routine docs work unless asked.
4. Prefer extending docs over deleting content.
5. When editing docs that exist in Ukrainian, update both `docs/` and `i18n/uk/docusaurus-plugin-content-docs/current/`.

## Local checks

```bash
npm ci
npm run build
npm run typecheck
npm run format:check
npm run lint
```

CI already runs the Docusaurus build, Prettier, typecheck, markdownlint, and lychee on pull requests (via `LLazyEmail/documentation-actions@v2`).

## Commit trailer

```
Co-authored-by: petroved <arthur.tkachenko.netweight@gmail.com>
```
