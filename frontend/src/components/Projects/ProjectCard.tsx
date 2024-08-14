import React from "react";
import styled from "styled-components";

const ProjectCard = ({ name, description }: Project) => {
  return (
    <Card>
      <FakeImage>.</FakeImage>
      <Content>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  max-width: 1200px;
  min-height: 400px;
  width: 100%;
  background-color: #ddd;
  color: #111;
  padding: 16px;
  border-radius: var(--border-radius);
`;

const FakeImage = styled.div`
  width: 50%;
  background-color: black;
`;

const Content = styled.div`
  width: 50%;
  background-color: #f1f1f1;
`;

const Name = styled.h4`
  font-size: 1.35rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
`;

export default ProjectCard;
