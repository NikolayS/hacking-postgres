import type { WorkItem } from './types';

export const workItems: WorkItem[] = [
  {
    issue: 1, slug: 'wait-event-tracing', title: 'Precise wait-event timing and tracing', state: 'needs-review', progress: 72,
    summary: 'Low-overhead core timing, trace capture, coverage analysis, and independent observer-effect benchmarks.',
    blocker: 'Needs more reviewer cycles and benchmark scrutiny in CommitFest.',
    sessions: ['bfPdLjdQvwU', '3Gtuc2lnnsE', '6kqpjnpl5Gc', 'RLeB6rP5CA8', 'Q7QEvTbGlWs'],
    artifacts: [{ label: 'patch PR', url: 'https://github.com/DmitryNFomin/postgres/pull/2' }, { label: 'CF #6984', url: 'https://commitfest.postgresql.org/patch/6984/' }, { label: 'benchmark', url: 'https://nikolays.github.io/wet-timing-bench-brief/' }],
    next: ['Run and publish reproducible benchmarks', 'Close instrumentation coverage gaps', 'Address CommitFest review'],
  },
  {
    issue: 2, slug: 'log-object-drops', title: 'Recovery landmarks for destructive DDL', state: 'active', progress: 64,
    summary: 'Log the correct commit-record LSN for DROP TABLE and related destructive operations to make PITR recovery less guessy.',
    blocker: 'The corrected PR changes have not yet been posted back to -hackers and CommitFest.',
    sessions: ['l-0IP-_meD0', 'x9Ahk5L2SwA'],
    artifacts: [{ label: 'PR #55', url: 'https://github.com/NikolayS/postgres/pull/55' }, { label: 'CF #6272', url: 'https://commitfest.postgresql.org/patch/6272/' }, { label: 'session notes', url: 'https://github.com/NikolayS/postgres/issues/57' }],
    next: ['Finish review tracker', 'Send a new patch version to -hackers', 'Update the CommitFest entry'],
  },
  {
    issue: 3, slug: 'logical-decoding-archives', title: 'Logical decoding from archive-fed standbys', state: 'active', progress: 58,
    summary: 'Keep logical slots usable on a standby fed by WAL archives by pausing and safely resuming recovery around conflicts.',
    blocker: 'Crash-safety and promotion behavior need complete end-to-end coverage before upstream submission.',
    sessions: ['LjiU6kB6izw', 'KK6PSdiy-9s', 'Nu6RdU3aemk', '_Fp-llPPSrE'],
    artifacts: [{ label: 'blueprint #24', url: 'https://github.com/NikolayS/postgres/pull/24' }, { label: 'patch PR #40', url: 'https://github.com/NikolayS/postgres/pull/40' }, { label: 'test plan #43', url: 'https://github.com/NikolayS/postgres/issues/43' }],
    next: ['Complete crash/restart matrix', 'Test promotion and rewind paths', 'Prepare -hackers submission'],
  },
  {
    issue: 4, slug: 'partial-matview-refresh', title: 'Partial materialized-view refresh', state: 'needs-review', progress: 67,
    summary: 'Add WHERE support to REFRESH MATERIALIZED VIEW with explicit concurrency semantics.',
    blocker: 'CommitFest entry currently needs review.',
    sessions: ['6cZvHjDrmlQ'], artifacts: [{ label: '-hackers', url: 'https://www.postgresql.org/message-id/CAMjNa7eFzTQ5%3DoZMQiB2bMkez5KP4A77JC7SRjeVEkOrh7cUHw%40mail.gmail.com' }, { label: 'CF #6305', url: 'https://commitfest.postgresql.org/patch/6305/' }],
    next: ['Review semantics and tests', 'Post review to CommitFest'],
  },
  {
    issue: 5, slug: 'wal-compression', title: 'Whole-WAL-record compression', state: 'blocked', progress: 43,
    summary: 'Compress or batch larger WAL records, originating in B-tree build experiments.',
    blocker: 'Closed CommitFest entry is waiting on the author.',
    sessions: ['YL31cf9Q1VM', 'EYwh18PBitM', 'cbgHrmOAsiU'], artifacts: [{ label: '-hackers', url: 'https://www.postgresql.org/message-id/4DC38068-976E-4A84-8EE6-4EFACBBD927A%40yandex-team.ru' }, { label: 'CF #5621', url: 'https://commitfest.postgresql.org/patch/5621/' }],
    next: ['Confirm author intent', 'Rebase the series', 'Produce current benchmarks'],
  },
  {
    issue: 0, slug: 'multixact-standby', title: 'MultiXact standby deadlock', state: 'shipped', progress: 100,
    summary: 'Fix standby MultiXact creation and deadlock/corruption edge cases.',
    sessions: ['g9yl3zE9MlI', 'Szpqbb89YSA'], artifacts: [{ label: '-hackers', url: 'https://www.postgresql.org/message-id/flat/20250625061137.460ae55a%40dashiell.home' }, { label: 'CF #6070', url: 'https://commitfest.postgresql.org/patch/6070/' }],
    next: [],
  },
  {
    issue: 6, slug: 'command-tags', title: 'Custom protocol command tags', state: 'exploration', progress: 38,
    summary: 'Negotiate custom command-completion tags through a _pq_ protocol capability.',
    blocker: 'No CommitFest entry and the protocol design needs broader consensus.',
    sessions: ['UzMxroqUuI0', 'VKuxQZlvd8E'], artifacts: [{ label: 'PR #16', url: 'https://github.com/NikolayS/postgres/pull/16' }, { label: '-hackers', url: 'https://www.postgresql.org/message-id/CAM527d_y5MOGRgqFhgDOD3DOCyB8N0ExDBnu-xPjMqCmdm4%2B%3Dg%40mail.gmail.com' }],
    next: ['Resolve capability negotiation questions', 'Decide whether to pursue a CF entry'],
  },
  {
    issue: 7, slug: 'btree-page-merge', title: 'B-tree page merge', state: 'exploration', progress: 31,
    summary: 'Merge sparse sibling pages to reduce index bloat without rebuilding the entire index.',
    blocker: 'Prototype correctness and concurrency design are not ready for CommitFest.',
    sessions: ['D1PEdDcvZTw', 'Ib3SXSFt8mE', '3MleDtXZUlM'], artifacts: [{ label: '-hackers WIP', url: 'https://www.postgresql.org/message-id/CACLU5mRude0L5psEj5WS0DVDv%3DAHN0McfZBKV5eBoW0JqwwZDA%40mail.gmail.com' }, { label: 'GSoC idea', url: 'https://wiki.postgresql.org/wiki/GSoC_2026#B-tree_Index_Bloat_Reduction_(Page_Merge)' }],
    next: ['Define invariants and locking', 'Build a minimal correctness test suite', 'Scope a reviewable first patch'],
  },
];
