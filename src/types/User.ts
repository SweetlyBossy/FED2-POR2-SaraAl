// This file defines the User interface and related types for the project.
export interface ProjectTeaser {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ProjectArticle extends ProjectTeaser {
  client: string;
  year: string;
  caption: string;
  LiveUrl: string;
  RepoUrl: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
}
