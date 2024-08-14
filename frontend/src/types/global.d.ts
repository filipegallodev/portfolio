type Technology = {
  id: string;
  name: string;
};

type Project = {
  id: string;
  name: string;
  description: string;
  technologies: Technology[];
};
