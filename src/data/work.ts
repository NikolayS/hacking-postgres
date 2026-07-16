import type { SupportedProject, WorkItem } from './types';

export const publicOutcomes = [
  {
    title: 'transaction_timeout',
    stage: 'committed upstream',
    summary: 'Stop transactions that remain open longer than the configured limit.',
    url: 'https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=51efe38cb92f4b15b68811bcce9ab878fbc71ea5',
  },
  {
    title: 'bounded psql \\watch',
    stage: 'committed upstream',
    summary: 'Let psql users stop \\watch automatically after a fixed number of executions.',
    url: 'https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=00beecfe839c878abb366b68272426ed5296bc2b',
  },
  {
    title: 'UUIDv7 generation',
    stage: 'committed upstream',
    summary: 'Turn the original ULID exercise into PostgreSQL\'s sortable uuidv7() implementation.',
    url: 'https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=78c5e141e9c139fc2ff36a220334e4aa25e1b0eb',
  },
  {
    title: 'MultiXact standby deadlock fix',
    stage: 'committed upstream',
    summary: 'Fix MultiXact creation, deadlock, and corruption edge cases on standbys.',
    url: 'https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=789d65364cdecd81e4bf822eec468ea3d34d28af',
  },
  {
    title: 'COPY file and program wait events',
    stage: 'committed upstream',
    summary: 'Expose blocking reads and writes for COPY FROM/TO files, pipes, and programs.',
    url: 'https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=e05a24c2d',
  },
  {
    title: 'unqualified DML guards',
    stage: 'patch proposed',
    summary: 'Prototype server-side protection against UPDATE or DELETE without qualification.',
    url: 'https://www.postgresql.org/message-id/CANNMO%2B%2Bs0ayutEaM8qu%2BMDzPOAvWnc8uJSfBSWCRh%2BMKZoBjNw%40mail.gmail.com',
  },
  {
    title: 'pg_stat_kcache observer-effect fix',
    stage: 'patch proposed',
    summary: 'Reduce self-hidden I/O accounting caused by extension locking.',
    url: 'https://github.com/powa-team/pg_stat_kcache/pull/39',
  },
  {
    title: 'whole-WAL-record compression',
    stage: 'CommitFest patch',
    summary: 'Compress or batch large WAL records, originating in B-tree build work.',
    url: 'https://commitfest.postgresql.org/patch/5621/',
  },
  {
    title: 'recovery landmarks for destructive DDL',
    stage: 'CommitFest patch',
    summary: 'Record a useful commit LSN for recovering from DROP TABLE and related operations.',
    url: 'https://commitfest.postgresql.org/patch/6272/',
  },
  {
    title: 'ANALYZE steps in dump output',
    stage: 'patch proposed',
    summary: 'Preserve or trigger statistics collection during dump and restore workflows.',
    url: 'https://www.postgresql.org/message-id/CACJufxGx_YLLxmnZVMuUApiVYqjKrydvEQqD3qxhwM6e0_8jrQ%40mail.gmail.com',
  },
  {
    title: 'B-tree bloat removal (page merge)',
    stage: 'patch proposed',
    summary: 'Salma El-Sayed’s mentored implementation now covers page merge plus cleanup of merged-away tombstone pages.',
    url: 'https://www.postgresql.org/message-id/flat/CANBEAPFq3YAOydjUS3xwcUG9L6e3WE5Z4nGPk_Q3RsjSFWTJNA%40mail.gmail.com',
  },
  {
    title: 'partial materialized-view refresh',
    stage: 'CommitFest patch',
    summary: 'Adam Brusselback turned the October 29 session’s idea into a REFRESH MATERIALIZED VIEW ... WHERE patch.',
    url: 'https://commitfest.postgresql.org/patch/6305/',
  },
  {
    title: 'precise wait-event timing and tracing',
    stage: 'CommitFest patch',
    summary: 'Publish low-overhead timing, trace capture, coverage analysis, and benchmarks.',
    url: 'https://commitfest.postgresql.org/patch/6984/',
  },
  {
    title: 'custom protocol command tags',
    stage: 'patch proposed',
    summary: 'Negotiate command-completion formats through the _pq_ protocol capability.',
    url: 'https://www.postgresql.org/message-id/CAM527d_y5MOGRgqFhgDOD3DOCyB8N0ExDBnu-xPjMqCmdm4%2B%3Dg%40mail.gmail.com',
  },
  {
    title: 'pglz compression experiment',
    stage: 'public experiment',
    summary: 'Build and publish an agent-assisted testbed for improving pglz compression.',
    url: 'https://github.com/NikolayS/pglz-compression',
  },
  {
    title: 'logical decoding from archive-fed standbys',
    stage: 'patch series',
    summary: 'Pause and safely resume recovery instead of invalidating conflicting logical slots.',
    url: 'https://github.com/NikolayS/postgres/pull/40',
  },
  {
    title: 'pg_dump table-data placeholders',
    stage: 'patch proposed',
    summary: 'Keep loadable slots for excluded table data so replacement data follows the normal restore order.',
    url: 'https://www.postgresql.org/message-id/flat/CACLU5mTrtt2ocj_UhVC2_4tjXRi7oMCxK17WjoeX7khwRvZjxQ%40mail.gmail.com',
  },
];

export const supportedProjects: SupportedProject[] = [
  {
    title: 'TRACE / wait-event tracing',
    owner: 'Dmitry Fomin',
    summary: 'Dmitry’s pg_wait_tracer and core wait-event timing work, supported here with design sessions, reviews, coverage analysis, and independent benchmarks.',
    artifacts: [
      { label: 'pg_wait_tracer', url: 'https://github.com/DmitryNFomin/pg_wait_tracer' },
      { label: 'CF #6984', url: 'https://commitfest.postgresql.org/patch/6984/' },
      { label: 'WET timing benchmark', url: 'https://nikolays.github.io/wet-timing-bench-brief/' },
      { label: 'sessions and work', url: '/projects/wait-event-tracing/' },
    ],
  },
  {
    title: 'wait-event coverage gaps',
    owner: 'Seongjun Shin',
    summary: 'A proposed GSoC project that continued independently: systematically identify invisible waits and add coverage, starting with blocking writes to server logging destinations.',
    artifacts: [
      { label: 'coverage map', url: 'https://gaps.wait.events/' },
      { label: 'COPY wait events commit', url: 'https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=e05a24c2d' },
      { label: 'logging waits patch', url: 'https://www.postgresql.org/message-id/flat/CACdN0M78U%2BGvpqA7oey-GA7fFSYM636aDp6H9FVvCztv9zXxSA%40mail.gmail.com' },
      { label: 'related WET sessions', url: '/projects/wait-event-tracing/' },
    ],
  },
  {
    title: 'pg_stat_statements scalability',
    owner: 'Quan Hoang Truong + AWS contributors',
    summary: 'Quan continued the proposed GSoC work on LWLock contention. In parallel, an AWS-led patch series implements a broader pgstat-based redesign for the same scalability problem.',
    artifacts: [
      { label: 'GSoC project', url: 'https://wiki.postgresql.org/wiki/GSoC_2026#Monitoring_Tools_Performance:_pg_stat_statements_and_LWLock_Contention' },
      { label: 'student introduction', url: 'https://www.postgresql.org/message-id/CAGJgb9vmBZRWi-8%2B%3D62U-BoPvGrUS4uMk%3DgjGbAfp3Rro2CAJg%40mail.gmail.com' },
      { label: 'AWS patch series', url: 'https://www.postgresql.org/message-id/flat/CAA5RZ0vZwR_dSK6fo0P2-EnskUVN0NjLHnGnJMFDPC8-kEW3sQ%40mail.gmail.com' },
    ],
  },
];

export const workItems: WorkItem[] = [
  {
    slug: 'wait-event-tracing', title: 'Precise wait-event timing and tracing', state: 'needs-review', progress: 72,
    summary: 'Low-overhead core timing, trace capture, coverage analysis, independent observer-effect benchmarks, and related work to expose currently invisible waits.',
    blocker: 'Needs more reviewer cycles and benchmark scrutiny in CommitFest.',
    sessions: ['bfPdLjdQvwU', 'wLPDt7CufEU', '3Gtuc2lnnsE', '6kqpjnpl5Gc', 'RLeB6rP5CA8', 'Q7QEvTbGlWs'],
    artifacts: [{ label: 'patch PR', url: 'https://github.com/DmitryNFomin/postgres/pull/2' }, { label: 'CF #6984', url: 'https://commitfest.postgresql.org/patch/6984/' }, { label: 'WET timing benchmark', url: 'https://nikolays.github.io/wet-timing-bench-brief/' }, { label: 'coverage gaps', url: 'https://gaps.wait.events/' }, { label: 'COPY waits commit', url: 'https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=e05a24c2d' }, { label: 'logging waits patch', url: 'https://www.postgresql.org/message-id/flat/CACdN0M78U%2BGvpqA7oey-GA7fFSYM636aDp6H9FVvCztv9zXxSA%40mail.gmail.com' }],
    next: ['Run and publish reproducible benchmarks', 'Close instrumentation coverage gaps', 'Address CommitFest review'],
  },
  {
    slug: 'log-object-drops', title: 'Recovery landmarks for destructive DDL', state: 'active', progress: 64,
    summary: 'Log the correct commit-record LSN for DROP TABLE and related destructive operations to make PITR recovery less guessy.',
    blocker: 'The corrected PR changes have not yet been posted back to -hackers and CommitFest.',
    sessions: ['l-0IP-_meD0', '0nFGVCpQDec', 'GpTJ06AFvg4', 't6T3GPjEiS4', '5lN775a5geI', '4KVaeJfWPas', 'x9Ahk5L2SwA'],
    artifacts: [{ label: 'PR #55', url: 'https://github.com/NikolayS/postgres/pull/55' }, { label: 'CF #6272', url: 'https://commitfest.postgresql.org/patch/6272/' }, { label: 'session notes', url: 'https://github.com/NikolayS/postgres/issues/57' }],
    next: ['Finish review tracker', 'Send a new patch version to -hackers', 'Update the CommitFest entry'],
  },
  {
    slug: 'logical-decoding-archives', title: 'Logical decoding from archive-fed standbys', state: 'active', progress: 58,
    summary: 'Keep logical slots usable on a standby fed by WAL archives by pausing and safely resuming recovery around conflicts.',
    blocker: 'Crash-safety and promotion behavior need complete end-to-end coverage before upstream submission.',
    sessions: ['74NFSqTrD0s', 'LjiU6kB6izw', 'KK6PSdiy-9s', 'Nu6RdU3aemk', '_Fp-llPPSrE'],
    artifacts: [{ label: 'blueprint #24', url: 'https://github.com/NikolayS/postgres/pull/24' }, { label: 'patch PR #40', url: 'https://github.com/NikolayS/postgres/pull/40' }, { label: 'test plan #43', url: 'https://github.com/NikolayS/postgres/issues/43' }],
    next: ['Complete crash/restart matrix', 'Test promotion and rewind paths', 'Prepare -hackers submission'],
  },
  {
    slug: 'partial-matview-refresh', title: 'Partial materialized-view refresh', state: 'needs-review', progress: 67,
    summary: 'Inspired by the October 29 Hacking Postgres session, viewer Adam Brusselback implemented WHERE support for targeted REFRESH MATERIALIZED VIEW and has continued revising it through review.',
    blocker: 'The current patch has acknowledged privilege-escalation and error-cleanup bugs; the next revision has not been posted yet.',
    sessions: ['6cZvHjDrmlQ'], artifacts: [{ label: 'Adam’s -hackers thread', url: 'https://www.postgresql.org/message-id/flat/CAMjNa7eFzTQ5%3DoZMQiB2bMkez5KP4A77JC7SRjeVEkOrh7cUHw%40mail.gmail.com' }, { label: 'CF #6305', url: 'https://commitfest.postgresql.org/patch/6305/' }, { label: 'latest v2 patch', url: 'https://www.postgresql.org/message-id/attachment/194767/v2-0001-implement_mat_view_where.patch' }],
    next: ['Review the security and failure-cleanup fixes in the next version', 'Test concurrency and isolation-level semantics', 'Post review to CommitFest'],
  },
  {
    slug: 'wal-compression', title: 'Whole-WAL-record compression', state: 'blocked', progress: 43,
    summary: 'Compress or batch larger WAL records, originating in B-tree build experiments.',
    blocker: 'Closed CommitFest entry is waiting on the author.',
    sessions: ['YL31cf9Q1VM', 'EYwh18PBitM', 'cbgHrmOAsiU'], artifacts: [{ label: '-hackers', url: 'https://www.postgresql.org/message-id/4DC38068-976E-4A84-8EE6-4EFACBBD927A%40yandex-team.ru' }, { label: 'CF #5621', url: 'https://commitfest.postgresql.org/patch/5621/' }],
    next: ['Confirm author intent', 'Rebase the series', 'Produce current benchmarks'],
  },
  {
    slug: 'multixact-standby', title: 'MultiXact standby deadlock', state: 'shipped', progress: 100,
    summary: 'Fix standby MultiXact creation and deadlock/corruption edge cases.',
    sessions: ['g9yl3zE9MlI', 'Szpqbb89YSA'], artifacts: [{ label: '-hackers', url: 'https://www.postgresql.org/message-id/flat/20250625061137.460ae55a%40dashiell.home' }, { label: 'CF #6070', url: 'https://commitfest.postgresql.org/patch/6070/' }],
    next: [],
  },
  {
    slug: 'command-tags', title: 'Custom protocol command tags', state: 'exploration', progress: 38,
    summary: 'Negotiate custom command-completion tags through a _pq_ protocol capability.',
    blocker: 'No CommitFest entry and the protocol design needs broader consensus.',
    sessions: ['UzMxroqUuI0', 'VKuxQZlvd8E', '74NFSqTrD0s'], artifacts: [{ label: 'PR #16', url: 'https://github.com/NikolayS/postgres/pull/16' }, { label: '-hackers', url: 'https://www.postgresql.org/message-id/CAM527d_y5MOGRgqFhgDOD3DOCyB8N0ExDBnu-xPjMqCmdm4%2B%3Dg%40mail.gmail.com' }],
    next: ['Resolve capability negotiation questions', 'Decide whether to pursue a CF entry'],
  },
  {
    slug: 'btree-page-merge', title: 'B-tree bloat removal (page merge)', state: 'active', progress: 46,
    summary: 'Salma El-Sayed’s implementation, mentored by Kirk Wolak, merges sparse siblings and reclaims merged-away tombstone pages without rebuilding the entire index.',
    blocker: 'The active prototype still needs concurrency, backward-scan, VACUUM, WAL/recovery, and crash-safety review before CommitFest.',
    sessions: ['D1PEdDcvZTw', 'Ib3SXSFt8mE', '3MleDtXZUlM', 'mVYl2RHlpoE', '5lN775a5geI', 'c0wKWcPZnH0', 'Q7QEvTbGlWs'], artifacts: [{ label: 'current -hackers thread', url: 'https://www.postgresql.org/message-id/flat/CANBEAPFq3YAOydjUS3xwcUG9L6e3WE5Z4nGPk_Q3RsjSFWTJNA%40mail.gmail.com' }, { label: 'working branch', url: 'https://github.com/salmaaliia/postgres/tree/merge' }, { label: 'tombstone cleanup commit', url: 'https://github.com/salmaaliia/postgres/commit/3cabf7b3cec90bffb427e8fa2ca9faf1a85213bf' }, { label: 'GSoC idea', url: 'https://wiki.postgresql.org/wiki/GSoC_2026#B-tree_Index_Bloat_Reduction_(Page_Merge)' }],
    next: ['Review invariants and locking with the current prototype', 'Expand correctness, concurrency, and recovery tests', 'Shape the branch into a reviewable patch series'],
  },
  {
    slug: 'pg-dump-table-data-placeholders', title: 'pg_dump table-data placeholders', state: 'needs-review', progress: 48,
    summary: 'Keep loadable slots for excluded table data so replacement data is restored before dependent indexes and constraints.',
    blocker: 'The first review raised interface questions; the patch needs a revised option design and another version.',
    sessions: ['Q7QEvTbGlWs'], artifacts: [{ label: '-hackers patch', url: 'https://www.postgresql.org/message-id/flat/CACLU5mTrtt2ocj_UhVC2_4tjXRi7oMCxK17WjoeX7khwRvZjxQ%40mail.gmail.com' }, { label: 'first review', url: 'https://www.postgresql.org/message-id/502B3804-007B-4B3D-B6F2-F9632EBECF7C%40yandex-team.ru' }],
    next: ['Settle the command-line and filter-file interface', 'Post the next patch version', 'Add a CommitFest entry when ready'],
  },
];
