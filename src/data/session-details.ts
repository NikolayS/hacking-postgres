import type { SessionDetail } from './types';

// Generated from timestamped YouTube captions and manually reviewed.
export const sessionDetails: Record<string, SessionDetail> = {
  "x9Ahk5L2SwA": {
    "summary": "The group returned to commit-LSN logging for DROP TABLE and related destructive DDL, using several AI agents to review and repair the revived patch. They rejected an extension split, found that the hook exposed the end rather than the start of the commit record, and revised the code to log the precise recovery boundary without a concurrency race. After considering restore points and event triggers as alternatives, they audited documentation and an end-to-end restore test, then prepared a PostgreSQL-style commit message, a new pgsql-hackers revision, and CI for the fork.",
    "chapters": [
      {
        "at": "00:00",
        "title": "Reviving commit-LSN logging for destructive DDL"
      },
      {
        "at": "04:00",
        "title": "Asking AI for a broader architectural review"
      },
      {
        "at": "08:15",
        "title": "Concrete bugs, missing tests, and CommitFest plans"
      },
      {
        "at": "13:00",
        "title": "Core feature versus extension design"
      },
      {
        "at": "18:55",
        "title": "B-tree page-merge and wait-coverage updates"
      },
      {
        "at": "20:55",
        "title": "Finding the wrong commit-record LSN boundary"
      },
      {
        "at": "32:35",
        "title": "Reviewing the repaired patch and documentation"
      },
      {
        "at": "37:40",
        "title": "Restore points and event triggers as alternatives"
      },
      {
        "at": "41:45",
        "title": "End-to-end recovery test and patch readiness"
      },
      {
        "at": "44:00",
        "title": "Commit message, pgsql-hackers email, and CI"
      }
    ]
  },
  "Q7QEvTbGlWs": {
    "summary": "The group reviewed Kirk Wolak's pg_dump patch for keeping loadable placeholders when table data is excluded, grounding the discussion in his large-table restore workflow. They debated a positive interface, filter-file actions, arbitrary dump queries, PII transformation, and referential-integrity risks, then posted supportive review feedback to pgsql-hackers. The final segment examined Salma El-Sayed's B-tree leaf-page merge design, including merged-page markers, scan correctness, vacuum cleanup, and review plans.",
    "chapters": [
      {
        "at": "00:00",
        "title": "Postgres 19 development opens and patches await review"
      },
      {
        "at": "03:00",
        "title": "Kirk introduces the pg_dump placeholder patch"
      },
      {
        "at": "07:30",
        "title": "Large-table dump and one-command restore use case"
      },
      {
        "at": "17:00",
        "title": "Reviewing the option name and user interface"
      },
      {
        "at": "24:00",
        "title": "Using AI to review design and mailing-list history"
      },
      {
        "at": "28:00",
        "title": "Parallel chunks for restoring one large table"
      },
      {
        "at": "35:30",
        "title": "Custom dump queries, filtering, and PII transformation"
      },
      {
        "at": "01:05:00",
        "title": "B-tree leaf-page merge design and scan safety"
      }
    ]
  },
  "RLeB6rP5CA8": {
    "summary": "Dmitry Fomin presented a seven-patch wait-event tracing series, split for review but intended to provide complete transition timing and query attribution. The group designed an independent benchmark ladder covering vanilla, compiled-disabled, stats, and full trace modes; corrected pgbench workloads; and distinguished static overhead from observer effect. Preliminary runs showed no clear slowdown, but they added pg_stat_statements, wait-event counts, repeated rounds, raw results, and independent review before submission.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Why sampled wait events miss short transitions"
      },
      {
        "at": "02:30",
        "title": "Seven-patch tracing series and review structure"
      },
      {
        "at": "05:30",
        "title": "Planning an independent overhead benchmark"
      },
      {
        "at": "25:30",
        "title": "Designing high-transition pgbench workloads"
      },
      {
        "at": "31:00",
        "title": "Five measurement levels and observer effect"
      },
      {
        "at": "50:00",
        "title": "Stats versus full trace capture modes"
      },
      {
        "at": "56:00",
        "title": "Correcting workload duration, rate limits, and logging"
      },
      {
        "at": "01:11:30",
        "title": "Preliminary results and adding pg_stat_statements"
      }
    ]
  },
  "_Fp-llPPSrE": {
    "summary": "The session refined logical decoding from an archive-fed physical standby as a recoverable, production-independent pipeline: after losing the decoding node, a consumer can restore another standby at the acknowledged LSN and tolerate overlap. They reviewed the three-patch implementation and TAP test, found registration and naming issues, debated lock structure, and judged the code ready for discussion after fixes. They then specified an end-to-end WAL-G test with catalog churn, paused consumption, catch-up, and a final marker.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Recoverable decoding after a standby is lost"
      },
      {
        "at": "06:00",
        "title": "Archive-fed WAL decoding without touching production"
      },
      {
        "at": "13:00",
        "title": "Naming the feature: logical decoding from archive"
      },
      {
        "at": "20:30",
        "title": "Reviewing the three-patch implementation"
      },
      {
        "at": "27:00",
        "title": "TAP test registration and test readability"
      },
      {
        "at": "42:00",
        "title": "Reviewing pause-on-conflict code and locking"
      },
      {
        "at": "57:00",
        "title": "Patch readiness and concrete submission fixes"
      },
      {
        "at": "01:02:30",
        "title": "Designing an end-to-end WAL-G recovery test"
      }
    ]
  },
  "Nu6RdU3aemk": {
    "summary": "The group inspected two AI-produced patch branches for pausing archive recovery when replay would invalidate a logical slot. They reconstructed the patch series, reviewed synchronized-slot and promotion behavior, and clarified that dirty slot state is only persisted at restart points, weakening crash guarantees. The concrete conclusion was to favor correctness, consolidate the work into one reviewable three-patch series, preserve readable code over premature lock optimization, and target the July CommitFest after further testing.",
    "chapters": [
      {
        "at": "00:00",
        "title": "Returning to logical decoding on WAL-shipping standbys"
      },
      {
        "at": "01:30",
        "title": "Recovering useful changes from a broken pull request"
      },
      {
        "at": "04:30",
        "title": "Reviewing pause and auto-resume patches"
      },
      {
        "at": "09:00",
        "title": "Conflict horizons and synchronized-slot behavior"
      },
      {
        "at": "20:00",
        "title": "Dirty slot state and restart-point persistence"
      },
      {
        "at": "28:30",
        "title": "Live transcript-assisted code investigation"
      },
      {
        "at": "32:00",
        "title": "Restructuring the work into reviewable patches"
      },
      {
        "at": "46:30",
        "title": "Crash-safety invariant and correctness-first decision"
      }
    ]
  },
  "KK6PSdiy-9s": {
    "summary": "The group connected archive-fed logical decoding to resilient analytical replication: replay should pause before catalog cleanup invalidates a lagging slot, then resume automatically once consumption catches up. They manually audited an AI-generated prototype and its complex TAP test, discovering that the test needed clearer assertions around the actual paused state. They accepted a proof-of-concept pause GUC, rejected manual resume as incomplete, and designed auto-resume behavior for drained, dropped, or otherwise nonblocking slots.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Archive-fed decoding for resilient analytics"
      },
      {
        "at": "05:00",
        "title": "From meeting transcript to AI-built prototype"
      },
      {
        "at": "07:00",
        "title": "Logical archive during large initial synchronization"
      },
      {
        "at": "21:00",
        "title": "Pause replay instead of blocking primary vacuum"
      },
      {
        "at": "28:00",
        "title": "Opening the prototype for manual review"
      },
      {
        "at": "38:00",
        "title": "Understanding the pause-on-conflict TAP test"
      },
      {
        "at": "47:30",
        "title": "Missing assertions for the paused recovery state"
      },
      {
        "at": "01:04:30",
        "title": "Designing automatic recovery resume"
      }
    ]
  },
  "LjiU6kB6izw": {
    "summary": "The session began by testing whether Postgres 16's logical decoding on a standby could turn an archive-fed recovery instance into a detached decoding engine. The group concluded a full server is the practical first implementation because it supplies catalog snapshots and output plugins; the missing behavior is to pause replay when it would invalidate a slot and continue when consumption advances. They also identified broader uses: per-record WAL verification, recovery debugging, and filtered, PII-free staging streams.",
    "chapters": [
      {
        "at": "00:00",
        "title": "Why decode archived WAL away from production"
      },
      {
        "at": "03:30",
        "title": "Using an archive-fed standby as the decoder"
      },
      {
        "at": "06:00",
        "title": "Standalone WAL tool versus a full Postgres server"
      },
      {
        "at": "08:00",
        "title": "Slot conflicts and the need to pause replay"
      },
      {
        "at": "13:30",
        "title": "Choosing a recovery mode driven by consumption"
      },
      {
        "at": "19:00",
        "title": "Function-based recovery targets"
      },
      {
        "at": "22:00",
        "title": "Stepping through WAL for correctness testing"
      },
      {
        "at": "28:00",
        "title": "Filtered, PII-free staging from archived WAL"
      }
    ]
  },
  "74NFSqTrD0s": {
    "summary": "The workshop first revisited customizable command tags, confirming legacy behavior remains the default and its added branch should be negligible, then explored extensible client protocols and better psql completion. The main direction was extracting data from managed Postgres without burdening production: decode archived WAL into a logical stream. They compared a full recovery server with a standalone tool, concluding the latter would need schema state at a starting LSN, checkpoint/full-page-image handling, and careful treatment of file swaps such as pg_repack.",
    "chapters": [
      {
        "at": "03:00",
        "title": "Command-tag customization and performance feedback"
      },
      {
        "at": "11:30",
        "title": "Ideas for an extensible client/server protocol"
      },
      {
        "at": "18:30",
        "title": "Language-server completion for psql"
      },
      {
        "at": "24:00",
        "title": "Parallelizing logical-replication initialization"
      },
      {
        "at": "33:30",
        "title": "Keeping an independent copy outside managed Postgres"
      },
      {
        "at": "36:30",
        "title": "Turning archived WAL into a logical stream"
      },
      {
        "at": "45:00",
        "title": "Designing a standalone offline decoder"
      },
      {
        "at": "49:00",
        "title": "Checkpoints, full-page images, and pg_repack caveats"
      }
    ]
  },
  "6kqpjnpl5Gc": {
    "summary": "The group compared pg_wait_tracer's external eBPF hardware-watchpoint tracing with Dmitri Fomin's new Postgres patch, which records wait transitions into per-backend lock-free ring buffers. They designed a shared-buffer-thrashing benchmark to stress transition overhead, explored transition, concurrency, and query-profile visualizations, and discussed eventual EXPLAIN integration. Preliminary claims of roughly 2% patched overhead were treated as unverified; the agreed next steps were finish benchmarks, publish the tool, review the code, and prepare a pgsql-hackers proposal.",
    "chapters": [
      {
        "at": "01:00",
        "title": "How precise wait-event tracing works"
      },
      {
        "at": "10:00",
        "title": "ASH dashboard, AAS, and wait hierarchy"
      },
      {
        "at": "17:30",
        "title": "Why tracing needs a Postgres patch"
      },
      {
        "at": "21:30",
        "title": "Designing a transition-heavy overhead benchmark"
      },
      {
        "at": "23:00",
        "title": "Per-backend lock-free ring-buffer design"
      },
      {
        "at": "28:00",
        "title": "Transition paths and concurrency analysis"
      },
      {
        "at": "34:30",
        "title": "Toward wait events in EXPLAIN"
      },
      {
        "at": "48:30",
        "title": "Publishing and presenting the patch upstream"
      }
    ]
  },
  "3Gtuc2lnnsE": {
    "summary": "Dmitri Fomin demonstrated pg_wait_tracer, an eBPF-based tool that captures every Postgres wait-event transition with microsecond-to-nanosecond timestamps, replayable trace files, latency heatmaps, and query drill-down. The motivating case was intermittent primary-key lookups jumping from milliseconds to a one-second timeout. The group identified inlined pgstat_report_wait_start/end calls as the obstacle to ordinary probes, produced a small USDT-probe prototype, and planned worst-case overhead benchmarks before proposing always-on core instrumentation.",
    "chapters": [
      {
        "at": "00:30",
        "title": "ASH, wait-event gaps, and pg_wait_tracer"
      },
      {
        "at": "04:30",
        "title": "The intermittent one-second query mystery"
      },
      {
        "at": "08:30",
        "title": "Sampling versus complete wait tracing"
      },
      {
        "at": "12:30",
        "title": "Finding a trace path with hardware watchpoints"
      },
      {
        "at": "17:30",
        "title": "Live ASH-style trace visualization"
      },
      {
        "at": "24:30",
        "title": "Latency heatmaps and source-code attribution"
      },
      {
        "at": "31:00",
        "title": "Transition chains for root-cause analysis"
      },
      {
        "at": "35:00",
        "title": "USDT probes, core patch, and benchmark plan"
      }
    ]
  },
  "VKuxQZlvd8E": {
    "summary": "After testing the newly committed REPACK command and confirming that it is transactional but takes an access-exclusive lock, the group built a prototype for customizable command-completion tags such as schema-qualified table names. A first server-only change broke psql's parser, exposing the need for client/server capability negotiation. The agent then used the existing _pq_ protocol-options framework so only requesting clients receive the new format. They reviewed compatibility tests and concluded the patch was useful for discussion but needed cleanup before pgsql-hackers.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Testing the new REPACK command"
      },
      {
        "at": "13:30",
        "title": "REPACK locking and transaction behavior"
      },
      {
        "at": "18:30",
        "title": "Designing descriptive command tags"
      },
      {
        "at": "24:00",
        "title": "Prototype-first agentic implementation"
      },
      {
        "at": "34:00",
        "title": "Server-only format change breaks psql"
      },
      {
        "at": "35:30",
        "title": "Why protocol feature negotiation is required"
      },
      {
        "at": "59:00",
        "title": "Using the _pq_ protocol-options framework"
      },
      {
        "at": "01:06:00",
        "title": "Compatibility review and patch cleanup"
      }
    ]
  },
  "woTqRL0Zh3A": {
    "summary": "The first half examined AI-assisted Postgres development: community overload, specification-first agent workflows, independent review, and personal responsibility for generated work. The second half audited an agent-produced pglz optimization series. Existing benchmarks mixed runtime and work done, while some optimizations changed compressed output. The group therefore narrowed the project to byte-compatible changes, required old-versus-new output tests, fixed-transaction-count and multi-platform benchmarks, and a small reproducible pgsql-hackers result; a reported 14% workload gain still needed verification.",
    "chapters": [
      {
        "at": "01:30",
        "title": "AI risks for the Postgres community"
      },
      {
        "at": "07:00",
        "title": "Specification-first autonomous agent workflows"
      },
      {
        "at": "15:00",
        "title": "Quality, review, and ownership of AI output"
      },
      {
        "at": "21:00",
        "title": "AI policy for Google Summer of Code"
      },
      {
        "at": "24:00",
        "title": "Reviewing the pglz optimization project"
      },
      {
        "at": "41:00",
        "title": "Why the benchmark methodology was misleading"
      },
      {
        "at": "47:30",
        "title": "Compression correctness and corruption tests"
      },
      {
        "at": "54:30",
        "title": "Byte-compatible scope and revised benchmark plan"
      }
    ]
  },
  "EqqByzGHIBk": {
    "summary": "The group turned Postgres GSoC brainstorming into a draft set of core-development projects. After Nikolay recounted his 2006 SQL/XML GSoC experience, they evaluated planner, parallel GiST build, TOAST slicing, test coverage, logged/unlogged tables, global temporary tables, and autovacuum ideas. They then added wait-event coverage, pg_stat_statements scalability, and B-tree page merge, using an AI-generated wiki draft. The draft still needed expert validation, clearer mentor ownership, and manual editing before merging into the official ideas page.",
    "chapters": [
      {
        "at": "01:30",
        "title": "Nikolay's 2006 SQL/XML GSoC project"
      },
      {
        "at": "08:30",
        "title": "Reviewing existing core project ideas"
      },
      {
        "at": "15:00",
        "title": "How GSoC ideas, mentors, and proposals match"
      },
      {
        "at": "20:00",
        "title": "Logged tables and other deceptively hard projects"
      },
      {
        "at": "25:00",
        "title": "Global temporary tables and autonomous work"
      },
      {
        "at": "31:00",
        "title": "Autovacuum control and scheduling ideas"
      },
      {
        "at": "38:00",
        "title": "Generating the GSoC wiki draft"
      },
      {
        "at": "59:30",
        "title": "Wait events, page merge, and observability projects"
      }
    ]
  },
  "4KVaeJfWPas": {
    "summary": "The session developed a responsible AI-assisted patch workflow: treat prompts as engineering specifications, assign independent security, documentation, and testing reviewers, distrust praise, and use agents to summarize long CommitFest threads without surrendering judgment. They then applied that workflow to a patch that logs the LSN of DROP TABLE, enabling precise PITR after accidental deletion. The agent retrieved and rebased the patch, planned transaction, rollback, savepoint, and documentation tests, and continued adapting it to changed GUC infrastructure; final review remained pending.",
    "chapters": [
      {
        "at": "01:00",
        "title": "What AI changes in Postgres hacking"
      },
      {
        "at": "04:30",
        "title": "Specifications and independent reviewer roles"
      },
      {
        "at": "08:00",
        "title": "Maintenance work and critical AI feedback"
      },
      {
        "at": "18:30",
        "title": "AI-assisted patch and CommitFest review"
      },
      {
        "at": "24:00",
        "title": "Advice for learning Postgres development"
      },
      {
        "at": "29:00",
        "title": "GSoC as an entry into core hacking"
      },
      {
        "at": "57:30",
        "title": "Starting a live DROP TABLE logging review"
      },
      {
        "at": "01:02:30",
        "title": "PITR use case, tests, and patch rebase"
      }
    ]
  },
  "c0wKWcPZnH0": {
    "summary": "The workshop focused on a prototype for reclaiming B-tree bloat by merging adjacent sparse leaf pages. Kirk proposed an incremental, access-exclusive-lock design that first merges only one pair, prioritizing correctness of forward and backward scans. The pgindex_reclaim extension identified merge candidates, but execution crashed. Inspection showed incomplete parent-page handling and incorrect WAL/critical-section logic. The group chose to stop trusting the generated merge code, add a reproducible regression test, study related upstream page-deletion work, and restart from the smallest verifiable merge.",
    "chapters": [
      {
        "at": "01:30",
        "title": "Why merge sparse B-tree pages"
      },
      {
        "at": "05:30",
        "title": "Forward and backward scan constraints"
      },
      {
        "at": "09:30",
        "title": "Smallest verifiable merge design"
      },
      {
        "at": "16:00",
        "title": "How the approach differs from pg_squeeze"
      },
      {
        "at": "22:00",
        "title": "Building and running pgindex_reclaim"
      },
      {
        "at": "30:00",
        "title": "Candidate pages found, execution crashes"
      },
      {
        "at": "34:00",
        "title": "Critical sections, WAL, and parent updates"
      },
      {
        "at": "58:00",
        "title": "Regression test and restart plan"
      }
    ]
  },
  "wLPDt7CufEU": {
    "summary": "Starting from an AI-assisted audit of missing wait-event coverage, the group distinguished genuine waits from CPU work and chose COPY as a testable first target. They reproduced an unreported wait in COPY FROM PROGRAM, prototyped events for program input and output, and used pg_stat_activity and pg_wait_sampling to validate them. The investigation also exposed missing coverage for ordinary COPY file reads and writes, expanding the planned patch to all four paths; the file/program work later reached core.",
    "chapters": [
      {
        "at": "00:30",
        "title": "AI-assisted audit of missing wait events"
      },
      {
        "at": "06:30",
        "title": "Review discipline and excluding CPU work"
      },
      {
        "at": "12:00",
        "title": "Choosing COPY FROM PROGRAM as the first target"
      },
      {
        "at": "26:30",
        "title": "Reproducing the unreported external-program wait"
      },
      {
        "at": "32:30",
        "title": "Prototyping COPY PROGRAM wait events"
      },
      {
        "at": "48:30",
        "title": "Testing COPY TO PROGRAM and separating code paths"
      },
      {
        "at": "01:09:00",
        "title": "Discovering ordinary COPY file I/O gaps"
      },
      {
        "at": "01:19:00",
        "title": "Validating coverage with pg_wait_sampling"
      }
    ]
  },
  "6cZvHjDrmlQ": {
    "summary": "The session explored adding a WHERE clause to REFRESH MATERIALIZED VIEW so selected rows can be refreshed without rebuilding the whole result. Reading the concurrent-refresh implementation revealed that Postgres creates a temporary difference table, then applies ordinary SQL deletes and inserts through SPI. After experimentally bypassing the normal DML guard, updates to a materialized view and its indexes worked. The group concluded that partial refresh looked technically approachable, while delete semantics, grammar, safety, and consistency still needed design work. Viewer Adam Brusselback explicitly credited this session as the inspiration for the patch he later submitted to pgsql-hackers and CommitFest.",
    "chapters": [
      {
        "at": "00:30",
        "title": "The case for partial materialized-view refresh"
      },
      {
        "at": "10:30",
        "title": "Building a concurrent-refresh test case"
      },
      {
        "at": "29:30",
        "title": "Tracing REFRESH through parser and executor code"
      },
      {
        "at": "34:30",
        "title": "How concurrent refresh computes and applies a diff"
      },
      {
        "at": "54:30",
        "title": "Designing a filtered merge without global deletes"
      },
      {
        "at": "01:03:30",
        "title": "Testing direct DML on a materialized view"
      },
      {
        "at": "01:20:00",
        "title": "Conclusions and remaining partial-refresh semantics"
      }
    ]
  },
  "5lN775a5geI": {
    "summary": "After reviewing UUIDv7 and amcheck support for GIN in Postgres 18, the group discussed responsible AI-assisted hacking and briefly parked the B-tree merge work over unresolved scan concurrency. Most of the session revisited recovery from accidental DROP TABLE: they asked an agent to extend transaction callbacks with the commit LSN and build a logging extension. The prototype found table names through object-access hooks, but cleanup timing and an invalid commit LSN prevented a working result, leaving the design unfinished.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Postgres 18 outcomes: UUIDv7 and GIN checks"
      },
      {
        "at": "06:30",
        "title": "Responsible AI-assisted Postgres hacking"
      },
      {
        "at": "11:30",
        "title": "Why the B-tree merge prototype was paused"
      },
      {
        "at": "19:00",
        "title": "Revisiting a recovery landmark for DROP TABLE"
      },
      {
        "at": "28:30",
        "title": "Prompting a callback and extension prototype"
      },
      {
        "at": "40:00",
        "title": "Building and loading the DROP TABLE extension"
      },
      {
        "at": "48:30",
        "title": "Combining object-access and commit callbacks"
      },
      {
        "at": "01:00:00",
        "title": "Recovery-event catalogs and the invalid-LSN blocker"
      }
    ]
  },
  "mVYl2RHlpoE": {
    "summary": "The group assessed the B-tree page-merge prototype after community feedback. They agreed benchmarks should emphasize extra buffer I/O, cache pollution, WAL, and sparse-page workloads rather than lookup latency alone. A new injection-point test then demonstrated the critical flaw: a concurrent forward scan returned duplicates while a backward scan missed tuples after pages were merged. Several recovery schemes were examined, but repeated vacuums and concurrent inserts defeated the simple designs. The session ended with correctness and concurrency still unresolved.",
    "chapters": [
      {
        "at": "01:30",
        "title": "Community feedback and the benchmark requirement"
      },
      {
        "at": "07:30",
        "title": "Why sparse pages hurt buffers, WAL, and vacuum"
      },
      {
        "at": "13:30",
        "title": "Scoping useful page-merge benchmarks"
      },
      {
        "at": "21:00",
        "title": "Injection-point test exposes incorrect scans"
      },
      {
        "at": "26:00",
        "title": "Visualizing the old-tree and new-tree race"
      },
      {
        "at": "38:00",
        "title": "Concurrent inserts and possible query aborts"
      },
      {
        "at": "42:00",
        "title": "When scans can recover from merged pages"
      },
      {
        "at": "44:30",
        "title": "Why limited merges and repeated vacuums still fail"
      }
    ]
  },
  "3MleDtXZUlM": {
    "summary": "The group refined a minimal B-tree merge: move tuples from a very sparse leaf page into its right sibling, then reuse existing page-deletion machinery. They inspected page layouts, asked an agent to implement the change inside vacuum, and built a sparse index. After removing an assertion, one page was successfully emptied without a crash. However, regression and foreign-key tests failed, and concurrent scans were not tested, so the result remained a potentially corrupt prototype rather than a valid patch.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Recap: turning sparse leaf pages into deletable pages"
      },
      {
        "at": "03:30",
        "title": "Comparing candidate leaf-page merge layouts"
      },
      {
        "at": "12:00",
        "title": "Applying Lehman-Yao page-merge ideas to Postgres"
      },
      {
        "at": "24:00",
        "title": "Minimal plan: move tuples, then reuse page deletion"
      },
      {
        "at": "34:00",
        "title": "Inspecting leaf pages before and after vacuum"
      },
      {
        "at": "49:30",
        "title": "Prompting the first vacuum-integrated implementation"
      },
      {
        "at": "01:16:30",
        "title": "Building a sparse-index test for the prototype"
      },
      {
        "at": "01:27:00",
        "title": "One merge succeeds, but regression tests fail"
      }
    ]
  },
  "Ib3SXSFt8mE": {
    "summary": "The session established why sparse B-tree pages matter: they increase buffer churn, WAL full-page images, replica storage, and the cost of scans. The group then traced vacuum's existing half-dead page deletion and studied whether a merge could resemble a split. Moving tuples directly exposed a duplicate-read race for concurrent scans, implying a two-phase protocol that removes the parent downlink before relocation. By the end they identified split/finish-split as the code to reverse, but deferred implementation pending a sound scan protocol.",
    "chapters": [
      {
        "at": "01:30",
        "title": "Operational costs of sparse B-tree pages"
      },
      {
        "at": "10:00",
        "title": "Why Postgres has reindexing but no page merge"
      },
      {
        "at": "15:00",
        "title": "Can merge be shaped like an existing page split?"
      },
      {
        "at": "20:00",
        "title": "Tracing vacuum and half-dead page deletion"
      },
      {
        "at": "35:00",
        "title": "Moving tuples into a sibling before deletion"
      },
      {
        "at": "47:30",
        "title": "Concurrent scans expose duplicate reads"
      },
      {
        "at": "55:00",
        "title": "A two-phase merge and scan-awareness requirement"
      },
      {
        "at": "01:08:30",
        "title": "Reversing finish-split becomes the next design step"
      }
    ]
  },
  "D1PEdDcvZTw": {
    "summary": "This B-tree page-merge session moved from automated REINDEX toward fixing the cause of persistent bloat. The group defined the target as partially empty leaf pages that vacuum cannot reclaim, then had an agent build a logical leaf-page scan that reports adjacent pages fitting into one block. On a randomized 90%-deleted workload it found widespread merge opportunities. They did not implement merging: backward-scan visibility, transaction horizons, WAL replay, lock coupling, and undetectable lightweight-lock deadlocks were identified as the core design problems.",
    "chapters": [
      {
        "at": "00:30",
        "title": "From automated REINDEX to B-tree page merge"
      },
      {
        "at": "08:00",
        "title": "Defining the persistent bloat worth fixing"
      },
      {
        "at": "17:30",
        "title": "Planning a logical scan for merge candidates"
      },
      {
        "at": "24:30",
        "title": "Agent-assisted prototype of the merge checker"
      },
      {
        "at": "54:30",
        "title": "Correcting physical scan to logical leaf order"
      },
      {
        "at": "01:00:30",
        "title": "The logical adjacency scanner works"
      },
      {
        "at": "01:08:00",
        "title": "Randomized deletion reveals widespread candidates"
      },
      {
        "at": "01:14:00",
        "title": "Backward scans, WAL, and lock-coupling hazards"
      }
    ]
  },
  "Szpqbb89YSA": {
    "summary": "The session reproduced a standby deadlock involving MultiXact lookup: a reader holds a heap buffer lock while waiting for a not-yet-replayed MultiXact offset, and the startup process needs that buffer before it can supply the offset. The team demonstrated the hang on Postgres 13 and current branches, confirmed that SIGINT cannot break it, evaluated three unsafe fixes, then implemented a localized WAL-redo fix that pre-populates the next offset on the same SLRU page.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Follow-up fixes for pg_dump policy comments"
      },
      {
        "at": "08:00",
        "title": "MultiXacts and the standby deadlock report"
      },
      {
        "at": "12:00",
        "title": "How MultiXact offsets and members are stored"
      },
      {
        "at": "15:00",
        "title": "Circular wait between a reader and startup process"
      },
      {
        "at": "23:00",
        "title": "Building a deterministic reproduction"
      },
      {
        "at": "34:30",
        "title": "Debugging both sides of the deadlock"
      },
      {
        "at": "47:30",
        "title": "Why three obvious fixes are unsafe"
      },
      {
        "at": "01:06:30",
        "title": "Localized WAL-redo fix and successful test"
      }
    ]
  },
  "bfPdLjdQvwU": {
    "summary": "Dmitry Fomin presented his first core patch after tracing synchronous-replication latency spikes to blocking fdatasync calls in the standby WAL receiver, even under synchronous_commit=remote_write. His prototype batches flushes by byte threshold or timeout. Review uncovered unsafe defaults for stronger synchronous modes and suggested a separate flusher process as a cleaner long-term design. They rebased the old patch onto master, removed redundant unflushed-byte state, compiled it, and prepared it for pgsql-hackers discussion.",
    "chapters": [
      {
        "at": "01:00",
        "title": "Production SyncRep latency problem"
      },
      {
        "at": "05:30",
        "title": "fdatasync stalls in remote_write mode"
      },
      {
        "at": "09:00",
        "title": "Batching WAL flushes by bytes or timeout"
      },
      {
        "at": "10:00",
        "title": "What synchronous replication actually guarantees"
      },
      {
        "at": "16:00",
        "title": "Reviewing the new WAL-receiver settings"
      },
      {
        "at": "21:30",
        "title": "Defaults break stronger synchronous-commit modes"
      },
      {
        "at": "25:30",
        "title": "Alternative design with a separate WAL flusher"
      },
      {
        "at": "35:30",
        "title": "Rebasing, reviewing, and preparing the patch"
      }
    ]
  },
  "g9yl3zE9MlI": {
    "summary": "Responding to audience interest in locking, the group investigated a Postgres 17 standby hang introduced when a one-millisecond MultiXact polling sleep was replaced with condition variables. A reported workload could drive replica TPS to zero. They reconstructed the locking protocol, used AI to inspect the patch and report, and realized the likely failure is a true deadlock: a query waits for MultiXact replay while holding the heap page needed by startup. They planned timeout instrumentation and stronger diagnostics.",
    "chapters": [
      {
        "at": "00:00",
        "title": "Audience chooses locking as the topic"
      },
      {
        "at": "07:00",
        "title": "MultiXact basics and foreign-key locking"
      },
      {
        "at": "09:00",
        "title": "SLRU storage and the old polling sleep"
      },
      {
        "at": "11:00",
        "title": "Condition-variable optimization in Postgres 17"
      },
      {
        "at": "13:00",
        "title": "Replica TPS drops to zero in the reported workload"
      },
      {
        "at": "20:00",
        "title": "Why standby replay changes the concurrency model"
      },
      {
        "at": "27:00",
        "title": "Timeout workaround versus a real fix"
      },
      {
        "at": "01:07:00",
        "title": "Identifying the heap-page deadlock"
      }
    ]
  },
  "lI-VEdAo4Ao": {
    "summary": "The group revived the long-running amcheck work for GiST indexes after shared infrastructure and the GIN checker had been committed. They manually rebased the remaining GiST patch, repaired build files and SQL upgrade scripts, and got its basic checks passing. They then asked Cursor to adapt newly committed GIN corruption tests. The generated tests initially assumed ordering that GiST does not have and later passed without actually corrupting indexes, leaving only a useful page-header corruption idea and more manual work.",
    "chapters": [
      {
        "at": "01:00",
        "title": "Reviving unfinished GiST amcheck work"
      },
      {
        "at": "04:30",
        "title": "Applying the old patch to current Postgres"
      },
      {
        "at": "07:00",
        "title": "Cursor overreaches while resolving rejects"
      },
      {
        "at": "17:00",
        "title": "Manual rebase of build and extension files"
      },
      {
        "at": "29:00",
        "title": "Compiling and running the basic GiST checks"
      },
      {
        "at": "37:00",
        "title": "Recent GIN corruption tests as a template"
      },
      {
        "at": "44:30",
        "title": "Reviewing AI's GiST corruption-test design"
      },
      {
        "at": "01:22:30",
        "title": "Tests pass, but no corruption was injected"
      }
    ]
  },
  "t6T3GPjEiS4": {
    "summary": "The workshop resumed the patch that logs a recovery LSN when destructive DDL commits. Review showed AI-generated schema support used the wrong hook, added an uncalled function, and supplied a nondeterministic regression test unsuitable for raw LSN output; a TAP test was deemed necessary. Rather than finish the substantial cleanup live, they switched to optimizing the regression-test schedule with Cursor. Its reordered groups caused failures and thermal throttling, demonstrating that faster scheduling must respect test dependencies and stable benchmarking conditions.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Reality-checking AI-generated implementations"
      },
      {
        "at": "04:30",
        "title": "Goal: log an LSN before destructive DDL"
      },
      {
        "at": "07:00",
        "title": "Reviewing three patch iterations"
      },
      {
        "at": "10:00",
        "title": "Why raw LSNs break regression-test output"
      },
      {
        "at": "18:30",
        "title": "Finding unused schema-drop code"
      },
      {
        "at": "24:00",
        "title": "Manual testing exposes missing schema logging"
      },
      {
        "at": "36:00",
        "title": "Deferring patch cleanup and changing tasks"
      },
      {
        "at": "47:00",
        "title": "Cursor rebalances the regression-test schedule"
      }
    ]
  },
  "OlzLF2VVZ8U": {
    "summary": "Nik presented an AI-assisted pg_resetwal option for changing the system identifier, needed to replay archived WAL after DBLab created a replacement cluster. Review accepted the use case but called for removing interactive safeguards, shortening documentation, reducing redundant tests, and aligning option identifiers with other frontend tools. The session then demonstrated Nik's agentic patch workflow: small commits, specification-first documentation, compilation and manual tests, strict review by stronger models, and a final human review that caught issues the models missed.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Opening review of the pg_resetwal patch"
      },
      {
        "at": "02:30",
        "title": "What pg_resetwal changes and why it is dangerous"
      },
      {
        "at": "06:00",
        "title": "DBLab recovery needs a different system identifier"
      },
      {
        "at": "07:00",
        "title": "Mailing-list feedback on safeguards and docs"
      },
      {
        "at": "15:00",
        "title": "AI-assisted Postgres patch workflow"
      },
      {
        "at": "27:00",
        "title": "Indexing the tree and structuring small changes"
      },
      {
        "at": "40:00",
        "title": "Strict review with a stronger model"
      },
      {
        "at": "53:30",
        "title": "Human review finds option and parsing issues"
      }
    ]
  },
  "GpTJ06AFvg4": {
    "summary": "The session opened with AI-assisted Postgres development lessons from the committed pg_dump policy patch and a separate wal_compression-level prototype: write tests and documentation early, review every line, and use several strong models as independent critics. The practical task was merging Jim Jones's improvements into the patch that logs commit LSNs for destructive DDL. Cursor produced overbroad changes, but after resetting and supplying both patches, the group compiled and manually tested the result, found a callback-unregistration bug, and attempted test-driven repair.",
    "chapters": [
      {
        "at": "00:30",
        "title": "An AI-written pg_dump change reaches Postgres 18"
      },
      {
        "at": "02:30",
        "title": "The hallucination that inspired wal_compression levels"
      },
      {
        "at": "07:00",
        "title": "Tests and documentation in agentic development"
      },
      {
        "at": "19:00",
        "title": "Returning to destructive-DDL LSN logging"
      },
      {
        "at": "23:00",
        "title": "Comparing the original patch with Jim's version"
      },
      {
        "at": "27:00",
        "title": "First Cursor attempt overreaches"
      },
      {
        "at": "40:30",
        "title": "Supplying both patches for a focused merge"
      },
      {
        "at": "49:00",
        "title": "Manual test exposes callback leakage"
      }
    ]
  },
  "0nFGVCpQDec": {
    "summary": "The session opened with recent Postgres work on GIN amcheck, corruption detection, read streams, and pg_stat_statements sampling, then returned to the DROP TABLE recovery patch. The patch logged an attempted drop before commit, producing misleading landmarks after rollback. They redesigned transaction callbacks to receive the commit LSN, manually changed the commit path after an AI attempt stalled, and demonstrated commit-only logging. Remaining work included two-phase commit, schema/OID formatting, tests, and incorporating Jim Jones's review before a new version.",
    "chapters": [
      {
        "at": "02:00",
        "title": "GIN amcheck and corruption detection"
      },
      {
        "at": "12:30",
        "title": "Recent read-stream and statistics work"
      },
      {
        "at": "19:00",
        "title": "Revisiting DROP TABLE recovery logging"
      },
      {
        "at": "21:30",
        "title": "Why attempted-drop logging is ambiguous"
      },
      {
        "at": "23:00",
        "title": "Testing an AI coding agent on Postgres"
      },
      {
        "at": "27:00",
        "title": "Passing the commit LSN to transaction callbacks"
      },
      {
        "at": "34:00",
        "title": "Implementing the core changes manually"
      },
      {
        "at": "01:02:30",
        "title": "Working result and remaining patch tasks"
      }
    ]
  },
  "k4A9-WZET_4": {
    "summary": "Part two implemented the pg_dump side of per-object ANALYZE. The group modeled ANALYZE as a new dumpable archive object, dependent on its table and emitted in the post-data section after data and indexes. They limited the first prototype to ordinary tables and materialized views, excluding sequences, views, and foreign tables. The code compiled, but no ANALYZE appeared in output because the new object was not reached or enabled correctly; print debugging exposed control-flow problems, and they deferred completion.",
    "chapters": [
      {
        "at": "01:00",
        "title": "Resuming from pg_dump archive entries"
      },
      {
        "at": "05:00",
        "title": "Creating a dumpable ANALYZE object"
      },
      {
        "at": "08:30",
        "title": "Tables, partitions, foreign tables, and sequences"
      },
      {
        "at": "15:30",
        "title": "Object IDs and table dependencies"
      },
      {
        "at": "18:00",
        "title": "Choosing an ArchiveEntry implementation"
      },
      {
        "at": "27:00",
        "title": "Building the ANALYZE command in post-data"
      },
      {
        "at": "30:30",
        "title": "Enabling ANALYZE and considering opt-out"
      },
      {
        "at": "38:00",
        "title": "Compilation succeeds, output debugging begins"
      }
    ]
  },
  "-6xA5JI4irI": {
    "summary": "The group investigated why pg_restore leaves restored relations without planner statistics and agreed that a database-wide ANALYZE in pg_restore would be too coarse. Instead, pg_dump should add an ANALYZE entry for every dumped table so archive filtering and partial restores retain correct behavior. They explored directory-format archives, TOC dependencies, table-data files, materialized-view refresh ordering, and index ArchiveEntry code. They concluded ANALYZE belongs after data, indexes, and materialized-view population, then began defining a new DumpableObject type before the call ended.",
    "chapters": [
      {
        "at": "04:30",
        "title": "Why restored databases need ANALYZE"
      },
      {
        "at": "05:30",
        "title": "Choosing pg_dump over a global pg_restore step"
      },
      {
        "at": "11:00",
        "title": "Materialized views as the ordering model"
      },
      {
        "at": "13:00",
        "title": "Exploring directory archives and the TOC"
      },
      {
        "at": "17:00",
        "title": "How table definitions and data entries connect"
      },
      {
        "at": "25:00",
        "title": "ANALYZE must follow indexes and refreshes"
      },
      {
        "at": "31:00",
        "title": "Adding a new DumpableObject priority"
      },
      {
        "at": "41:00",
        "title": "Learning from index ArchiveEntry generation"
      }
    ]
  },
  "l-0IP-_meD0": {
    "summary": "The group designed a recovery landmark for accidental DROP TABLE. They first considered emitting a named restore-point WAL record, then traced deletion through parser, dependency, permission, and lock paths. Rollback and the absence of a fresh LSN before any WAL write made that design misleading. They pivoted to logging a restore LSN after the table lock is acquired but before deletion, restricted it to ordinary tables, demonstrated the output, and prepared a small pgsql-hackers patch.",
    "chapters": [
      {
        "at": "03:00",
        "title": "Two recovery and restore ideas"
      },
      {
        "at": "07:00",
        "title": "Choosing the DROP TABLE recovery problem"
      },
      {
        "at": "12:00",
        "title": "Considering an automatic restore-point record"
      },
      {
        "at": "18:00",
        "title": "Which dropped objects need protection"
      },
      {
        "at": "24:00",
        "title": "Tracing DROP through parser and dependency code"
      },
      {
        "at": "37:00",
        "title": "Intent, permissions, locks, and rollback"
      },
      {
        "at": "01:17:00",
        "title": "Why no usable LSN exists before WAL"
      },
      {
        "at": "01:34:00",
        "title": "Final log message and mailing-list patch"
      }
    ]
  },
  "ul-wgvNtUGY": {
    "summary": "The group prototyped richer psql help after noting that autocomplete and backslash-h do little for functions or unknown keywords. They modified the no-match path to print clickable documentation or search URLs, added a configurable HELP_URLS variable containing pipe-separated templates, implemented substitution and URL encoding, and tested PostgreSQL.org, Google, and DuckDuckGo links. They kept PostgreSQL.org as the default, refined the wording, and prepared a discussion patch while leaving external API/LLM help and reusable URL functions as future ideas.",
    "chapters": [
      {
        "at": "01:30",
        "title": "Limits of SQL autocomplete and help"
      },
      {
        "at": "07:30",
        "title": "A URL fallback for unknown help topics"
      },
      {
        "at": "12:30",
        "title": "Finding psql's backslash-h output path"
      },
      {
        "at": "20:00",
        "title": "First clickable PostgreSQL search link"
      },
      {
        "at": "25:00",
        "title": "Implementing URL encoding"
      },
      {
        "at": "32:30",
        "title": "Configurable HELP_URLS templates"
      },
      {
        "at": "44:00",
        "title": "Supporting multiple pipe-separated URLs"
      },
      {
        "at": "01:16:30",
        "title": "Final wording and patch preparation"
      }
    ]
  },
  "ggXAxBhRvoc": {
    "summary": "The first section reviewed UUIDv7's evolving RFC, monotonic counter, distributed generation, timestamp extraction, and blocked core support. They also surveyed transaction-timeout and SLRU-locking work. The hands-on section tackled flaky transaction-timeout tests by combining injection points with a background psql watch loop. Testing uncovered false success from malformed watch parameters and a broken-pipe cleanup problem when timeout killed psql. The harness remained unfinished, needing a reliable way to detect whether the background session is active.",
    "chapters": [
      {
        "at": "01:30",
        "title": "UUIDv7 status and the evolving RFC"
      },
      {
        "at": "05:00",
        "title": "Monotonic counters and distributed generators"
      },
      {
        "at": "11:00",
        "title": "Why UUIDv7 combines ordering and randomness"
      },
      {
        "at": "14:00",
        "title": "Timestamp extraction and partitioning"
      },
      {
        "at": "21:30",
        "title": "SLRU locking and subtransaction edge cases"
      },
      {
        "at": "29:00",
        "title": "Transaction timeout lands, tests remain flaky"
      },
      {
        "at": "42:00",
        "title": "Replacing fixed sleeps with injection points"
      },
      {
        "at": "01:07:00",
        "title": "False success, broken pipes, and unfinished cleanup"
      }
    ]
  },
  "cbgHrmOAsiU": {
    "summary": "After noting Kirk Wolak's committed psql ECHO_HIDDEN improvement and comparing Meson with Autotools, the session resumed a WAL full-page-image compression prototype. Earlier work grouped up to 32 images in one WAL record; Andrey began replacing per-page compression with a contiguous buffer, disabling hole stripping and restructuring record-data links. The code became tangled around rdata ownership and was left uncompilable. They agreed to finish offline, then benchmark batch sizes 1, 4, 16, and 32 for compression, CPU, memory, and record-size trade-offs.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Kirk's first committed psql patch"
      },
      {
        "at": "02:30",
        "title": "Meson versus Autotools build benchmarks"
      },
      {
        "at": "16:30",
        "title": "Resuming batched WAL image compression"
      },
      {
        "at": "18:00",
        "title": "How WAL record assembly handles page images"
      },
      {
        "at": "20:30",
        "title": "Removing per-page compression and hole logic"
      },
      {
        "at": "25:00",
        "title": "Allocating contiguous multi-page buffers"
      },
      {
        "at": "33:00",
        "title": "Record-data links block the implementation"
      },
      {
        "at": "46:00",
        "title": "Batch-size rationale and benchmark plan"
      }
    ]
  },
  "EYwh18PBitM": {
    "summary": "The group explored reducing WAL volume during B-tree index creation by batching full-page images, which could later let compressors reuse context across similar pages. After tracing the sorted B-tree build and its page-flush routine, they changed it to postpone writes and emit roughly 31 pages in one WAL record. The build and basic tests worked, but compression itself was not implemented, replication coverage was uncertain, and macOS library and overheating problems prevented the intended size and performance comparison.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Patch status and PostgreSQL CI infrastructure"
      },
      {
        "at": "12:00",
        "title": "Why full-page images limit WAL compression"
      },
      {
        "at": "15:30",
        "title": "Reusing compression context across B-tree pages"
      },
      {
        "at": "19:00",
        "title": "Measuring current multi-page WAL records"
      },
      {
        "at": "24:30",
        "title": "Tracing the sorted B-tree build path"
      },
      {
        "at": "28:30",
        "title": "Designing deferred page flushing and batching"
      },
      {
        "at": "35:00",
        "title": "Implementing the multi-page WAL batch"
      },
      {
        "at": "43:30",
        "title": "Successful 31-page records and missing benchmarks"
      }
    ]
  },
  "YL31cf9Q1VM": {
    "summary": "The session began by designing an overflow hash table for pg_stat_statements and pg_stat_kcache so new query IDs would not block behind a busy main table; races and merge semantics made it unsuitable for an immediate patch. Discussion then shifted to compression throughout Postgres. Per-column dictionaries were judged invasive, while reusing compression context during B-tree WAL logging looked tractable. They examined pglz and LZ4 stream constraints and concluded that B-tree builds should first batch pages like GiST; no code was written.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Revisiting pg_stat_kcache lock contention"
      },
      {
        "at": "03:00",
        "title": "An overflow hash table for delayed query IDs"
      },
      {
        "at": "09:00",
        "title": "Duplicate entries and merge races"
      },
      {
        "at": "18:00",
        "title": "From statistics contention to compression"
      },
      {
        "at": "21:00",
        "title": "Column dictionaries and system-wide dictionaries"
      },
      {
        "at": "24:00",
        "title": "Reusing context for B-tree full-page images"
      },
      {
        "at": "38:30",
        "title": "Why appending to compressed streams is difficult"
      },
      {
        "at": "56:30",
        "title": "B-tree WAL batching becomes the prerequisite"
      }
    ]
  },
  "wHMNX-fHb2A": {
    "summary": "The group reproduced an observer effect shared by pg_stat_statements and pg_stat_kcache. Reading their hash tables holds a shared lightweight lock while results are materialized; if the tuplestore spills beyond work_mem, the lock may cover temporary-file I/O, blocking registration of new queries. They prototyped conditional lock acquisition for pg_stat_kcache so a query can execute while its statistics entry is skipped. The workaround succeeded in the demonstration, but needed configuration, benchmarks, and confirmation that it addressed the production contention before submission.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Reviewing the committed bounded psql watch"
      },
      {
        "at": "05:30",
        "title": "Observer effects in statistics extensions"
      },
      {
        "at": "11:00",
        "title": "pg_stat_kcache contention at high TPS"
      },
      {
        "at": "18:30",
        "title": "Tracing the shared hash-table lock"
      },
      {
        "at": "20:30",
        "title": "Tuplestore spill extends lock duration"
      },
      {
        "at": "26:00",
        "title": "Reproducing blocked registration of new queries"
      },
      {
        "at": "36:00",
        "title": "Best-effort tracking with conditional locking"
      },
      {
        "at": "51:00",
        "title": "Prototype works, but the production cause remains uncertain"
      }
    ]
  },
  "UzMxroqUuI0": {
    "summary": "The session attempted to make PostgreSQL command-completion tags configurable, motivated by dump and restore output that says INSERT or COPY without identifying the relation. The proposed GUC would format tags with placeholders such as command name and relation names while preserving protocol compatibility. They threaded relation information through executor structures and reused a placeholder formatter, but the server repeatedly crashed because the helper was called incorrectly. The prototype remained unfinished, with lazy calculation of optional fields also identified as necessary.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Updates on earlier patches and reviews"
      },
      {
        "at": "07:30",
        "title": "Why command tags need relation context"
      },
      {
        "at": "12:30",
        "title": "A configurable placeholder-based tag format"
      },
      {
        "at": "15:00",
        "title": "Threading relation names through query completion"
      },
      {
        "at": "26:00",
        "title": "Adding the command_tag_format GUC"
      },
      {
        "at": "30:00",
        "title": "Formatting command and relation placeholders"
      },
      {
        "at": "35:00",
        "title": "Server crashes and binary-search debugging"
      },
      {
        "at": "47:00",
        "title": "Incorrect helper usage and unfinished prototype"
      }
    ]
  },
  "hGXPgFK8Eh8": {
    "summary": "After explaining CommitFest and release-cycle mechanics, the group designed extensible command-completion tags instead of changing PostgreSQL's long-stable protocol output directly. A format string could optionally include timestamps and affected relations, especially for readable dump and restore progress. They postponed implementation, then reviewed a libpq patch that randomizes a multi-host connection list. The Fisher-Yates shuffle appeared correct despite confusing code and minor whitespace issues, but they noted that randomization alone cannot avoid a slow replica and suggested future latency-aware selection.",
    "chapters": [
      {
        "at": "00:30",
        "title": "CommitFest cadence and the PostgreSQL release cycle"
      },
      {
        "at": "07:00",
        "title": "What command-completion tags currently report"
      },
      {
        "at": "11:00",
        "title": "Relation names and compatibility constraints"
      },
      {
        "at": "19:00",
        "title": "Designing a configurable command-tag format"
      },
      {
        "at": "24:30",
        "title": "Reviewing libpq multi-host load balancing"
      },
      {
        "at": "27:00",
        "title": "Random ordering cannot avoid a slow replica"
      },
      {
        "at": "32:30",
        "title": "Refactoring addresses out of PGconn"
      },
      {
        "at": "35:00",
        "title": "Checking the Fisher-Yates shuffle implementation"
      }
    ]
  },
  "vTV8XhWf3mo": {
    "summary": "The main exercise added a maximum iteration count to psql's backslash-watch command, allowing monitoring or sampling queries to stop automatically. Parsing a second optional argument exposed subtleties in psql's meta-command scanner, whitespace handling, defaults, and preserving unlimited behavior; the live prototype was close but still malfunctioned and needed offline cleanup before its later upstream completion. The final segment reviewed a proposed pg_stat_session view, questioning its per-backend memory and runtime overhead, missing functional tests, and practical value to DBAs.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Use case for a bounded psql watch"
      },
      {
        "at": "05:00",
        "title": "ULID work shifts toward UUIDv7"
      },
      {
        "at": "10:00",
        "title": "Starting the psql meta-command patch"
      },
      {
        "at": "16:00",
        "title": "Tracing watch argument parsing"
      },
      {
        "at": "20:30",
        "title": "Adding the optional iteration argument"
      },
      {
        "at": "27:00",
        "title": "Learning how multi-argument meta-commands parse"
      },
      {
        "at": "31:00",
        "title": "Iteration defaults and preserving infinity"
      },
      {
        "at": "39:30",
        "title": "Reviewing pg_stat_session counters and overhead"
      }
    ]
  },
  "YPq_hiOE-N8": {
    "summary": "They implemented a C prototype of a time-ordered 128-bit identifier, initially called ULID, combining microsecond time with random bytes in UUID storage. Generation speed matched gen_random_uuid(), while inserting millions of values into indexed tables remained constant instead of degrading as random UUIDs scattered writes across the B-tree. Buffer measurements showed a dramatic reduction in pages read, dirtied, and written. Rather than submit a bespoke format, they decided to align the implementation with the emerging UUIDv7 standard, which later reached core.",
    "chapters": [
      {
        "at": "00:30",
        "title": "Why random UUIDs hurt B-tree locality"
      },
      {
        "at": "05:00",
        "title": "Security, performance, and ordering trade-offs"
      },
      {
        "at": "10:00",
        "title": "Preparing the in-core identifier prototype"
      },
      {
        "at": "14:00",
        "title": "Adding the catalog function and C implementation"
      },
      {
        "at": "20:00",
        "title": "Encoding microsecond time in network byte order"
      },
      {
        "at": "31:00",
        "title": "First generated values and generation benchmark"
      },
      {
        "at": "43:00",
        "title": "Comparing indexed inserts with random UUIDs"
      },
      {
        "at": "48:30",
        "title": "Buffer evidence and decision to target UUIDv7"
      }
    ]
  },
  "samLkrC5xQA": {
    "summary": "The group prototyped opt-in GUCs to reject UPDATE and DELETE plans that would affect an entire table. They added checks after planning, which also reject constant-true predicates optimized away but can be bypassed by volatile expressions, exposing ambiguity between syntactic WHERE protection and actual full-table impact. They implemented separate prevent_unqualified_deletes and prevent_unqualified_updates settings, tested role-level defaults and permissions, noted users could disable their own safeguards without stronger controls, and prepared a rough patch for pgsql-hackers discussion.",
    "chapters": [
      {
        "at": "01:30",
        "title": "One-click CommitFest testing with PG Cloud Hacker"
      },
      {
        "at": "07:30",
        "title": "Checking the transaction_timeout workspace"
      },
      {
        "at": "09:30",
        "title": "Idea: reject destructive unqualified DML"
      },
      {
        "at": "12:30",
        "title": "Finding command type and WHERE quals in Query"
      },
      {
        "at": "17:00",
        "title": "First planner check for DELETE"
      },
      {
        "at": "19:30",
        "title": "Constant predicates reveal semantic ambiguity"
      },
      {
        "at": "23:00",
        "title": "Naming two opt-in safety GUCs"
      },
      {
        "at": "36:00",
        "title": "Role settings, bypasses, and patch submission"
      }
    ]
  },
  "WLoMpg8A4WU": {
    "summary": "Nik demonstrated a browser-based workflow for reviewing the proposed transaction_timeout patch: mirror the mailing-list attachment, open a preconfigured Gitpod workspace, compile Postgres, and test the feature. The timeout correctly canceled a long transaction. Andrey then moved timer startup from transaction begin to assignment of a real XID, exploring a narrower write-transaction/Xmin-horizon timeout. They concluded this changed the patch's intended semantics and needed separate user discussion; isolation tests also exposed timing complexity and Windows instability.",
    "chapters": [
      {
        "at": "03:30",
        "title": "Why Postgres needs transaction_timeout"
      },
      {
        "at": "05:30",
        "title": "Turning a mailing-list patch into a browser review"
      },
      {
        "at": "09:00",
        "title": "Building patched Postgres in Gitpod"
      },
      {
        "at": "17:30",
        "title": "Testing transaction_timeout from psql"
      },
      {
        "at": "19:00",
        "title": "Virtual, real, and prepared transactions"
      },
      {
        "at": "20:30",
        "title": "Starting the timer only after XID assignment"
      },
      {
        "at": "28:30",
        "title": "Transaction duration versus Xmin-horizon protection"
      },
      {
        "at": "32:30",
        "title": "Isolation-test failures and unresolved semantics"
      }
    ]
  }
};

export const timestampSeconds = (timestamp: string) => timestamp
  .split(':')
  .reduce((total, part) => total * 60 + Number(part), 0);
