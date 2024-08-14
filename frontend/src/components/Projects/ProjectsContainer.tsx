import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
  {
    id: "jardimambiental",
    name: "Jardim Consultoria Ambiental",
    description: "Teste de descrição",
    technologies: [
      {
        id: "html",
        name: "HTML",
      },
    ],
  },
  {
    id: "stockapp",
    name: "StockApp! Controle de Varejo",
    description: "Teste de descrição",
    technologies: [
      {
        id: "html",
        name: "HTML",
      },
    ],
  },
  {
    id: "nextbank",
    name: "NextBank - O Banco Digital",
    description: "Teste de descrição",
    technologies: [
      {
        id: "html",
        name: "HTML",
      },
    ],
  },
];

const ProjectsContainer = () => {
  return (
    <Container>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default ProjectsContainer;
