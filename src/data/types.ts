export type Artifact = {
  label: string;
  url: string;
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
  links: {
    github?: string;
    gitlab?: string;
    twitter?: string;
    linkedin?: string;
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
  progress: number;
  summary: string;
  blocker?: string;
  sessions: string[];
  artifacts: Artifact[];
  next: string[];
};
