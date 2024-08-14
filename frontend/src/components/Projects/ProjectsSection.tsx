import {
  DefaultContainer,
  DefaultSection,
  SectionTitle,
} from "@/styles/styled";
import React from "react";
import ProjectsContainer from "./ProjectsContainer";

const ProjectsSection = () => {
  return (
    <DefaultSection id="projetos">
      <DefaultContainer>
        <SectionTitle>Projetos</SectionTitle>
        <ProjectsContainer />
      </DefaultContainer>
    </DefaultSection>
  );
};

export default ProjectsSection;
