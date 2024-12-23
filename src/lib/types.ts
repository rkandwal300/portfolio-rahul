export type Project = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  skills: string[];
  githubLink: string;
};

export type About = {
  duration: string;
  organization: string;
  role: string;
  description: string[];
  badges?: string[];
  logo?: string;
  link?: string;
};

export type Post = {
  id: string;
  title: string;
  description: string;
  link: string;

  date: string;
};
