export type Artifact = {
  label: string;
  url: string;
};

export type Chapter = {
  at: string;
  title: string;
};

export type SessionDetail = {
  summary: string;
  chapters: Chapter[];
};

export type Session = {
  date: string;
  title: string;
  video: string;
  duration: string;
  topic: string;
  line: string;
  confidence: 'direct' | 'correlated' | 'none';
  outcome?: 'committed' | 'active' | 'stalled' | 'exploration';
  artifacts: Artifact[];
};

export type Person = {
  slug: string;
  name: string;
  recognition?: {
    label: string;
    url: string;
  };
  links: {
    github?: string;
    gitlab?: string;
    twitter?: string;
    linkedin?: string;
    scholar?: string;
    researchgate?: string;
    website?: string;
  };
  note: string;
};

export type Topic = {
  slug: string;
  name: string;
  videos: string[];
};

export type WorkItem = {
  slug: string;
  title: string;
  state: 'active' | 'needs-review' | 'blocked' | 'shipped' | 'exploration';
  summary: string;
  blocker?: string;
  sessions: string[];
  artifacts: Artifact[];
  next: string[];
};

export type SupportedProject = {
  title: string;
  owner: string;
  summary: string;
  artifacts: Artifact[];
};
