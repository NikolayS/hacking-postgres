import { workItems } from './work';

type GitHubIssue = {
  number: number;
  title: string;
  body: string | null;
  html_url: string;
  state: 'open' | 'closed';
  labels: Array<{ name?: string } | string>;
  pull_request?: unknown;
};

export type TrackerIssue = {
  number: number;
  title: string;
  url: string;
  state: 'open' | 'closed';
  labels: string[];
  tasks: Array<{ text: string; done: boolean }>;
};

const taskPattern = /^\s*- \[([ xX])\] (.+)$/gm;

function parseIssue(issue: GitHubIssue): TrackerIssue {
  const tasks = [...(issue.body ?? '').matchAll(taskPattern)].map((match) => ({
    done: match[1].toLowerCase() === 'x',
    text: match[2],
  }));

  return {
    number: issue.number,
    title: issue.title,
    url: issue.html_url,
    state: issue.state,
    labels: issue.labels.map((label) => typeof label === 'string' ? label : label.name ?? ''),
    tasks,
  };
}

export async function getTrackerIssues(): Promise<TrackerIssue[]> {
  try {
    const response = await fetch('https://api.github.com/repos/postgres-ai/hacking-postgres/issues?state=all&per_page=100', {
      headers: {
        Accept: 'application/vnd.github+json',
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
    });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const issues = await response.json() as GitHubIssue[];
    return issues.filter((issue) => !issue.pull_request).map(parseIssue);
  } catch {
    return workItems.filter((item) => item.issue > 0).map((item) => ({
      number: item.issue,
      title: item.title,
      url: `https://github.com/postgres-ai/hacking-postgres/issues/${item.issue}`,
      state: 'open',
      labels: [item.state],
      tasks: item.next.map((text) => ({ text, done: false })),
    }));
  }
}
