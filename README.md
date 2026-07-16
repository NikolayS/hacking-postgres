# Postgres Hacking

Public workbench for the [Hacking Postgres](https://www.youtube.com/playlist?list=PLH8y1BNPAKjKDdJA7sDmFWUkbbYux3TRz) sessions: progress, blockers, TODOs, videos, patches, pgsql-hackers threads, and CommitFest entries.

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
- GitHub Issues — actionable TODO source of truth

## Deployment

GitHub Actions deploys `dist/` to GitHub Pages. The custom domain is declared in `public/CNAME` as `hacking.postgres.tv`.

## Community

Join <https://t.me/postgres_hacking>.
