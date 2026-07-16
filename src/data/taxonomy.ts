import type { Person, Session, Topic } from './types';

export const people: Person[] = [
  {
    slug: 'nikolay-samokhvalov',
    name: 'Nikolay Samokhvalov',
    recognition: {
      label: 'PostgreSQL Significant Contributor',
      url: 'https://www.postgresql.org/community/contributors/#significant-contributors',
    },
    links: {
      github: 'https://github.com/NikolayS',
      gitlab: 'https://gitlab.com/NikolayS',
      twitter: 'https://x.com/samokhvalov',
      linkedin: 'https://www.linkedin.com/in/samokhvalov',
      website: 'https://postgres.ai',
    },
    note: 'Host and Postgres hacker.',
  },
  {
    slug: 'andrey-borodin',
    name: 'Andrey Borodin',
    recognition: {
      label: 'PostgreSQL Major Contributor',
      url: 'https://www.postgresql.org/community/contributors/#major-contributors',
    },
    links: {
      github: 'https://github.com/x4m',
      twitter: 'https://x.com/x4mmmmmm',
      linkedin: 'https://www.linkedin.com/in/andrew-borodin-79411b47/',
      scholar: 'https://scholar.google.com/citations?user=aISBHeUAAAAJ&hl=en',
      researchgate: 'https://www.researchgate.net/scientific-contributions/Andrey-Borodin-2082945809',
    },
    note: 'Postgres hacker and recurring session participant.',
  },
  {
    slug: 'kirk-wolak',
    name: 'Kirk Wolak',
    links: {
      github: 'https://github.com/kirkw',
      gitlab: 'https://gitlab.com/wolakk',
      linkedin: 'https://www.linkedin.com/in/kirk-wolak-7706737',
    },
    note: 'Postgres community hacker and recurring session participant.',
  },
  {
    slug: 'dmitry-fomin',
    name: 'Dmitry Fomin',
    links: {
      github: 'https://github.com/DmitryNFomin',
      linkedin: 'https://www.linkedin.com/in/dmitry-fomin-a88b7b45',
    },
    note: 'Author of pg_wait_tracer and wait-event timing patches.',
  },
];

const namedAppearances: Record<string, string[]> = {
  'andrey-borodin': [
    'x9Ahk5L2SwA', 'Q7QEvTbGlWs', 'Nu6RdU3aemk', 'KK6PSdiy-9s', 'LjiU6kB6izw',
    '74NFSqTrD0s', 'VKuxQZlvd8E', 'woTqRL0Zh3A', 'EqqByzGHIBk', 'c0wKWcPZnH0',
    'wLPDt7CufEU', '6cZvHjDrmlQ', '5lN775a5geI', 'mVYl2RHlpoE', '3MleDtXZUlM',
    'Ib3SXSFt8mE', 'D1PEdDcvZTw', 'Szpqbb89YSA', 'bfPdLjdQvwU', 'g9yl3zE9MlI',
    'lI-VEdAo4Ao', 't6T3GPjEiS4', 'OlzLF2VVZ8U', 'GpTJ06AFvg4', '0nFGVCpQDec',
    'k4A9-WZET_4', '-6xA5JI4irI', 'l-0IP-_meD0', 'ul-wgvNtUGY', 'ggXAxBhRvoc',
    'UzMxroqUuI0', 'hGXPgFK8Eh8',
  ],
  'kirk-wolak': [
    'x9Ahk5L2SwA', 'Q7QEvTbGlWs', 'RLeB6rP5CA8', '_Fp-llPPSrE', 'KK6PSdiy-9s',
    'LjiU6kB6izw', '74NFSqTrD0s', '6kqpjnpl5Gc', '3Gtuc2lnnsE', 'VKuxQZlvd8E',
    'woTqRL0Zh3A', 'EqqByzGHIBk', 'c0wKWcPZnH0', 'wLPDt7CufEU', '6cZvHjDrmlQ',
    '5lN775a5geI', 'mVYl2RHlpoE', '3MleDtXZUlM', 'Ib3SXSFt8mE', 'D1PEdDcvZTw',
    'Szpqbb89YSA', 'g9yl3zE9MlI', 'lI-VEdAo4Ao', 't6T3GPjEiS4', 'OlzLF2VVZ8U',
    'GpTJ06AFvg4', 'k4A9-WZET_4', '-6xA5JI4irI', 'l-0IP-_meD0', 'ul-wgvNtUGY',
    'ggXAxBhRvoc', 'YL31cf9Q1VM',
  ],
  'dmitry-fomin': ['RLeB6rP5CA8', '6kqpjnpl5Gc', '3Gtuc2lnnsE', 'bfPdLjdQvwU'],
};

export const peopleForSession = (session: Session) => people.filter((person) =>
  person.slug === 'nikolay-samokhvalov' || namedAppearances[person.slug]?.includes(session.video),
);

export const sessionsForPerson = (sessions: Session[], slug: string) =>
  sessions.filter((session) => peopleForSession(session).some((person) => person.slug === slug));

export const topics: Topic[] = [
  { slug: 'wait-events', name: 'wait events', videos: ['Q7QEvTbGlWs', 'RLeB6rP5CA8', '6kqpjnpl5Gc', '3Gtuc2lnnsE', 'bfPdLjdQvwU', 'wLPDt7CufEU'] },
  { slug: 'logical-decoding', name: 'logical decoding', videos: ['_Fp-llPPSrE', 'Nu6RdU3aemk', 'KK6PSdiy-9s', 'LjiU6kB6izw', '74NFSqTrD0s'] },
  { slug: 'recovery', name: 'recovery', videos: ['x9Ahk5L2SwA', '_Fp-llPPSrE', 'Nu6RdU3aemk', 'KK6PSdiy-9s', 'LjiU6kB6izw', '74NFSqTrD0s', '5lN775a5geI', 't6T3GPjEiS4', 'OlzLF2VVZ8U', 'GpTJ06AFvg4', '0nFGVCpQDec', 'l-0IP-_meD0', 'ggXAxBhRvoc'] },
  { slug: 'btree', name: 'B-tree', videos: ['Q7QEvTbGlWs', 'c0wKWcPZnH0', '5lN775a5geI', 'mVYl2RHlpoE', '3MleDtXZUlM', 'Ib3SXSFt8mE', 'D1PEdDcvZTw', 'cbgHrmOAsiU', 'EYwh18PBitM'] },
  { slug: 'wal', name: 'WAL', videos: ['_Fp-llPPSrE', 'Nu6RdU3aemk', 'LjiU6kB6izw', '74NFSqTrD0s', 'cbgHrmOAsiU', 'EYwh18PBitM'] },
  { slug: 'multixact', name: 'MultiXact', videos: ['Szpqbb89YSA', 'g9yl3zE9MlI', 'wLPDt7CufEU'] },
  { slug: 'psql', name: 'psql', videos: ['VKuxQZlvd8E', 'ul-wgvNtUGY', 'UzMxroqUuI0', 'hGXPgFK8Eh8', 'vTV8XhWf3mo'] },
  { slug: 'sql', name: 'SQL', videos: ['6cZvHjDrmlQ', 'k4A9-WZET_4', '-6xA5JI4irI', 'YPq_hiOE-N8', 'samLkrC5xQA', 'WLoMpg8A4WU'] },
  { slug: 'monitoring', name: 'monitoring', videos: ['wLPDt7CufEU', 'wHMNX-fHb2A', 'RLeB6rP5CA8', '6kqpjnpl5Gc', '3Gtuc2lnnsE', 'bfPdLjdQvwU'] },
  { slug: 'compression', name: 'compression', videos: ['woTqRL0Zh3A', 'cbgHrmOAsiU', 'EYwh18PBitM', 'YL31cf9Q1VM'] },
  { slug: 'ai-assisted-hacking', name: 'AI-assisted hacking', videos: ['Q7QEvTbGlWs', '_Fp-llPPSrE', 'woTqRL0Zh3A', '4KVaeJfWPas', 'c0wKWcPZnH0'] },
  { slug: 'hacking-process', name: 'hacking process', videos: ['Q7QEvTbGlWs', '74NFSqTrD0s', 'EqqByzGHIBk', '4KVaeJfWPas', '5lN775a5geI', 'mVYl2RHlpoE', 'lI-VEdAo4Ao', 't6T3GPjEiS4', 'OlzLF2VVZ8U', 'GpTJ06AFvg4', '0nFGVCpQDec', 'ggXAxBhRvoc'] },
];

export const topicsForSession = (session: Session) => topics.filter((topic) => topic.videos.includes(session.video));
export const sessionsForTopic = (sessions: Session[], slug: string) =>
  sessions.filter((session) => topicsForSession(session).some((topic) => topic.slug === slug));
