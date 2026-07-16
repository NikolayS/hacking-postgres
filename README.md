# Postgres Hacking

Public workbench for the [Hacking Postgres](https://www.youtube.com/playlist?list=PLH8y1BNPAKjKDdJA7sDmFWUkbbYux3TRz) sessions: responsible agentic hacking, progress, blockers, TODOs, videos, patches, pgsql-hackers threads, and CommitFest entries.

We use AI agents heavily, then inspect the relevant code paths, reproduce the problem, test the ugly edges, and take full responsibility for the result. GitHub and GitLab forks are useful for pre-review; PostgreSQL patches are submitted to pgsql-hackers, with CommitFest used in addition for tracking and review.

## Local development

```sh
npm install
npm run dev
```

The production build is static:

```sh
npm run build
```

## Data

- `src/data/sessions.ts` — session and artifact index
- `src/data/work.ts` — active work lines, progress, blockers, and next steps
- `TODO` — the entire TODO list, deliberately kept as plain text

## Deployment

GitHub Actions deploys `dist/` to GitHub Pages. The custom domain is declared in `public/CNAME` as `hacking.postgres.tv`.

## Community

Join <https://t.me/postgres_hacking>.
